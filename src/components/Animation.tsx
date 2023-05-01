import React, { CSSProperties, ReactElement, useContext, useRef } from 'react'
import { AnimationContext, defaultDoorOptions, DoorOptions } from '../contexts/FullPageChangeContext'
import { usePrivateAnimation } from '../hooks/usePrivateAnimation'

type Props = {
    content: ReactElement
    doorOptions?: Partial<DoorOptions>
}

const Animation: React.FC<Props> = ({ content, doorOptions }) => {
    const { isAnimating } = useContext(AnimationContext)
    const animationDivLeftRef = useRef<HTMLDivElement>(null)
    const animationDivRightRef = useRef<HTMLDivElement>(null)

    const finalConfig: DoorOptions = { ...defaultDoorOptions, ...doorOptions }

    usePrivateAnimation(
        isAnimating,
        finalConfig.closingDuration,
        finalConfig.openingDuration,
        animationDivLeftRef,
        animationDivRightRef,
    )

    const doorStyle: CSSProperties = {
        position: 'fixed',
        backgroundColor: finalConfig.color,
        height: '100%',
        width: '50vw',
        top: '0',
        overflow: 'hidden',
        zIndex: 999999999,
    }

    return isAnimating === 'open' ? null : (
        <div
            style={{
                position: 'fixed',
                zIndex: 999999998,
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                userSelect: 'none',
            }}
        >
            <div
                ref={animationDivLeftRef}
                style={{
                    ...doorStyle,
                    left: '0',
                    userSelect: 'none',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        textAlign: 'center',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%) translateX(50%)',
                        userSelect: 'none',
                    }}
                >
                    {content}
                </div>
            </div>
            <div
                ref={animationDivRightRef}
                style={{
                    ...doorStyle,
                    right: '0',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        textAlign: 'center',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%) translateX(-50%)',
                    }}
                >
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Animation
