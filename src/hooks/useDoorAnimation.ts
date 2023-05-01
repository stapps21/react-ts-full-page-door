import { ReactElement, ReactNode, useContext } from 'react'
import {
    AnimationContext,
    AnimationContextType,
    defaultDoorOptions,
    DoorOptions,
} from '../contexts/FullPageChangeContext'

type UseAnimationOptions = {
    doorMoveTime?: number
    closedAnimationDuration?: number
}

const useDoorAnimation = (globalDoorOptions?: UseAnimationOptions): AnimationContextType => {
    const context = useContext(AnimationContext)

    if (!context) {
        throw new Error('useAnimation must be used within a FullPageChangerProvider')
    }

    // Wrap the startAnimation function to pass in the overridden values
    const startAnimation = (subContent: ReactNode, doorContent?: ReactElement, doorOptions?: Partial<DoorOptions>) => {
        const finalDoorOptions: DoorOptions = { ...defaultDoorOptions, ...globalDoorOptions, ...doorOptions }
        context.startAnimation(subContent, doorContent, finalDoorOptions)
    }

    return { ...context, startAnimation }
}

export default useDoorAnimation
