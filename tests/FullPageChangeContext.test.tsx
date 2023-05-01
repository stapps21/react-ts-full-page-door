import React from 'react'
import { render } from '@testing-library/react'
import { FullPageDoorChangeProvider, AnimationContext } from '../src/contexts/FullPageChangeContext'
import { useContext } from 'react'

test('renders FullPageDoorChangeProvider and provides the AnimationContext', () => {
    const TestComponent = () => {
        const context = useContext(AnimationContext)
        expect(context).toBeTruthy()
        expect(context.isAnimating).toBe('open')
        expect(typeof context.startAnimation).toBe('function')
        return <div>Test</div>
    }

    render(
        <FullPageDoorChangeProvider>
            <TestComponent />
        </FullPageDoorChangeProvider>,
    )
})
