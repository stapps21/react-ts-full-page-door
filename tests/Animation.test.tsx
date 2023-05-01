import React from 'react'
import { render } from '@testing-library/react'
import Animation from '../src/components/Animation'
import { AnimationContext } from '../src/contexts/FullPageChangeContext'

test('renders Animation component without content when isAnimating is "open"', () => {
    const content = <div>Content</div>
    const { container } = render(
        <AnimationContext.Provider value={{ isAnimating: 'open', startAnimation: () => {} }}>
            <Animation content={content} />
        </AnimationContext.Provider>,
    )

    expect(container.firstChild).toBeNull()
})
