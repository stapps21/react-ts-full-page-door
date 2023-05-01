import { RefObject, useCallback, useEffect } from 'react'

export const usePrivateAnimation = (
    isAnimating: string,
    closingDuration: number,
    openingDuration: number,
    animationDivLeftRef: RefObject<HTMLDivElement>,
    animationDivRightRef: RefObject<HTMLDivElement>,
) => {
    enum DOOR_STATE {
        CLOSING,
        OPENING,
    }

    const animation = useCallback(
        (doorState: DOOR_STATE) => {
            const from = doorState === DOOR_STATE.CLOSING ? '50vw' : '0'
            const to = doorState === DOOR_STATE.CLOSING ? '0' : '50vw'
            const animDuration = doorState === DOOR_STATE.CLOSING ? closingDuration : openingDuration
            const animationLeftDiv = animationDivLeftRef.current
            const animationRightDiv = animationDivRightRef.current

            if (animationLeftDiv && animationRightDiv) {
                animationLeftDiv.style.transform = `translateX(-${from})`
                animationRightDiv.style.transform = `translateX(${from})`

                const slideInAnimationLeft = animationLeftDiv.animate(
                    [{ transform: `translateX(-${from})` }, { transform: `translateX(-${to})` }],
                    { duration: animDuration, easing: 'ease-out' },
                )

                const slideInAnimationRight = animationRightDiv.animate(
                    [{ transform: `translateX(${from})` }, { transform: `translateX(${to})` }],
                    { duration: animDuration, easing: 'ease-out' },
                )

                slideInAnimationLeft.onfinish = () => {
                    animationLeftDiv.style.transform = `translateX(-${to})`
                }

                slideInAnimationRight.onfinish = () => {
                    animationRightDiv.style.transform = `translateX(${to})`
                }

                return () => {
                    slideInAnimationLeft.cancel()
                    slideInAnimationRight.cancel()
                }
            }
            return () => {}
        },
        [animationDivLeftRef, animationDivRightRef, closingDuration, openingDuration, DOOR_STATE.CLOSING],
    )

    useEffect(() => {
        switch (isAnimating) {
            case 'open':
                break
            case 'closing':
                animation(DOOR_STATE.CLOSING)
                break
            case 'closed':
                break
            case 'opening':
                animation(DOOR_STATE.OPENING)
                break
        }
    }, [isAnimating, animation, DOOR_STATE.CLOSING, DOOR_STATE.OPENING])
}
