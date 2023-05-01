import React, { createContext, ReactElement, ReactNode, useRef, useState } from 'react'
import Animation from '../components/Animation'

export interface DoorOptions {
    color: string
    closingDuration: number
    openingDuration: number
    closedDuration: number
}

export const defaultDoorOptions: DoorOptions = {
    color: '#1c2d4f',
    closingDuration: 500,
    openingDuration: 500,
    closedDuration: 1000,
}

export type AnimationContextType = {
    isAnimating: string
    startAnimation: (subContent: ReactNode, doorContent?: ReactElement, doorOptions?: Partial<DoorOptions>) => void
}

const defaultContext: AnimationContextType = {
    isAnimating: 'open',
    startAnimation: () => {},
}

export const AnimationContext = createContext<AnimationContextType>(defaultContext)

export const FullPageDoorChangeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAnimating, setIsAnimating] = useState('open')
    const doorContent = useRef<ReactElement>(<></>)
    const doorOptions = useRef<DoorOptions>(defaultDoorOptions)
    const [mainContent, setMainContent] = useState<ReactNode>(children)
    const subContent = useRef<ReactNode>(<></>)
    const subpage = useRef(false)
    const bodyOverflowRef = useRef(document.documentElement.style.overflow)

    const startAnimation = (_subContent: ReactNode, _doorContent?: ReactElement, options?: Partial<DoorOptions>) => {
        if (_doorContent) {
            doorContent.current = _doorContent
        }

        if (subContent) {
            subContent.current = _subContent
        }

        if (isAnimating !== 'open') return

        doorOptions.current = { ...defaultDoorOptions, ...doorOptions.current, ...options }

        setIsAnimating('closing')
        document.documentElement.style.overflow = 'hidden'

        setTimeout(() => {
            setIsAnimating('closed')
            setMainContent(subpage.current ? children : subContent.current)
        }, doorOptions.current.closingDuration)

        setTimeout(() => {
            setIsAnimating('opening')
            document.documentElement.scroll(0, 0)
        }, doorOptions.current.closingDuration + doorOptions.current.closedDuration)

        setTimeout(() => {
            setIsAnimating('open')
            document.documentElement.style.overflow = bodyOverflowRef.current
        }, doorOptions.current.closingDuration + doorOptions.current.closedDuration + doorOptions.current.openingDuration)
    }

    const contextValue: AnimationContextType = {
        isAnimating,
        startAnimation,
    }

    return (
        <AnimationContext.Provider value={contextValue}>
            <Animation content={doorContent.current} doorOptions={doorOptions.current} />
            {mainContent}
        </AnimationContext.Provider>
    )
}
