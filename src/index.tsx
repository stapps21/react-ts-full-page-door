import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import imgDoor from './door.jpg'
import imgStappsLogoLeft from './stappsLogoLeft.png'
import imgStappsLogoRight from './stappsLogoRight.png'
import imgRocket from './rocket.svg'
import { FullPageDoorChangeProvider, useDoorAnimation } from 'react-ts-full-page-door'

function MainComponent() {
    const { startAnimation } = useDoorAnimation({ doorMoveTime: 500, closedAnimationDuration: 1500 })

    const handleTextDoor = () => {
        startAnimation(
            <SubComponent />,
            <div className='door-container'>
                <h1>Image Door</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Mauris sit amet massa vitae tortor. In tellus integer feugiat scelerisque
                    varius morbi. Leo vel orci porta non pulvinar neque laoreet suspendisse. Quam nulla porttitor massa
                    id neque aliquam. Odio morbi quis commodo odio aenean. Mi sit amet mauris commodo quis imperdiet
                    massa tincidunt. Quis viverra nibh cras pulvinar mattis nunc. Pretium fusce id velit ut tortor
                    pretium. Ac odio tempor orci dapibus. Tristique magna sit amet purus gravida quis. Leo duis ut diam
                    quam nulla porttitor. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Consequat
                    interdum varius sit amet mattis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus
                    dolor.{' '}
                </p>
            </div>,
        )
    }

    const handleImageDoor = () => {
        startAnimation(
            <SubComponent />,
            <div className='door-container'>
                <h1>Image Door</h1>
                <img src={imgDoor} alt='Door Image' />
            </div>,
        )
    }

    const handleAnimateDoor = () => {
        startAnimation(
            <SubComponent />,
            <>
                <div className='logo-anim-container'>
                    <img src={imgStappsLogoLeft} alt='Stapps logo left' />
                    <img src={imgStappsLogoRight} alt='Stapps logo right' />
                </div>
                <h1 className='subtext'>GitHub - stapps21</h1>
            </>,
        )
    }

    const handleAnimateSmiley = () => {
        startAnimation(
            <SubComponent />,
            <div>
                <h1>Rocket Anim</h1>
                <img className='anim-rocket' src={imgRocket} alt='Rocket' />
            </div>,
        )
    }

    const handleSlowDoor = () => {
        startAnimation(
            <SubComponent />,
            <div>
                <h1>SLOW DOOR</h1>
                <div>closingDuration: 1500</div>
                <div>openingDuration: 1000</div>
            </div>,
            { closingDuration: 1500, openingDuration: 1000 },
        )
    }

    const handleNotLongClosed = () => {
        startAnimation(<SubComponent />, <h1>NOT LONG CLOSED</h1>, { closedDuration: 100 })
    }

    const handleColoredDoor = () => {
        startAnimation(
            <SubComponent />,
            <div>
                <h1>COLORED DOOR</h1>
                <div>color &apos;#941477&apos;</div>
            </div>,
            { color: '#941477' },
        )
    }

    return (
        <div className='main-container'>
            <div className='bottom-space center'>
                <h1>react-ts-full-page-door</h1>
                <h3>
                    Here are some examples of door designs, but keep in mind that virtually any design can be
                    incorporated into the door.
                </h3>
            </div>
            <div className='grid-container'>
                <div onClick={handleImageDoor} className='item-grid btn'>
                    Image Door
                </div>
                <div onClick={handleAnimateDoor} className='item-grid btn'>
                    Animated Door
                </div>
                <div onClick={handleAnimateSmiley} className='item-grid btn'>
                    Rocket Anim Door
                </div>
                <div onClick={handleTextDoor} className='item-grid btn'>
                    Text Door
                </div>
                <div onClick={handleSlowDoor} className='item-grid btn'>
                    Slow Door
                </div>
                <div onClick={handleNotLongClosed} className='item-grid btn'>
                    Not Long Closed
                </div>
                <div onClick={handleColoredDoor} className='item-grid btn'>
                    Colored Door
                </div>
            </div>
        </div>
    )
}

const SubComponent = () => {
    const { startAnimation } = useDoorAnimation()

    const handleBackToMain = () => {
        startAnimation(
            <MainComponent />,
            <>
                <h1>BACK</h1>
                <h2>To the main component</h2>
            </>,
            {
                closingDuration: 200,
                openingDuration: 200,
                closedDuration: 500,
            },
        )
    }

    return (
        <div className='subcontent-container'>
            <div onClick={handleBackToMain} className='btn small'>
                Back
            </div>
            <h1>I am another component :)</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Mauris sit amet massa vitae tortor. In tellus integer feugiat scelerisque varius
                morbi. Leo vel orci porta non pulvinar neque laoreet suspendisse. Quam nulla porttitor massa id neque
                aliquam. Odio morbi quis commodo odio aenean. Mi sit amet mauris commodo quis imperdiet massa tincidunt.
                Quis viverra nibh cras pulvinar mattis nunc. Pretium fusce id velit ut tortor pretium. Ac odio tempor
                orci dapibus. Tristique magna sit amet purus gravida quis. Leo duis ut diam quam nulla porttitor. Elit
                ut aliquam purus sit amet luctus venenatis lectus magna. Consequat interdum varius sit amet mattis.
                Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nunc congue nisi vitae suscipit
                tellus mauris a. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Lorem dolor sed viverra
                ipsum nunc aliquet bibendum enim. Fusce id velit ut tortor pretium. Dui sapien eget mi proin sed. Orci
                phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ullamcorper sit amet risus
                nullam eget. Pharetra sit amet aliquam id diam maecenas ultricies. Ultrices mi tempus imperdiet nulla.
                Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Cum sociis natoque penatibus et magnis.
                Cras adipiscing enim eu turpis egestas pretium. Dictum sit amet justo donec enim diam vulputate ut.
                Justo donec enim diam vulputate ut pharetra. Vitae elementum curabitur vitae nunc sed velit dignissim.
                Nunc mattis enim ut tellus elementum sagittis vitae et leo. Lorem mollis aliquam ut porttitor leo a diam
                sollicitudin tempor. Vulputate enim nulla aliquet porttitor. Non blandit massa enim nec dui. Morbi
                tristique senectus et netus et malesuada fames. Turpis egestas integer eget aliquet nibh. Amet nisl
                suscipit adipiscing bibendum. Eget nullam non nisi est sit. Risus sed vulputate odio ut enim blandit
                volutpat maecenas volutpat. Nulla aliquet porttitor lacus luctus. Lobortis mattis aliquam faucibus purus
                in massa. Vel fringilla est ullamcorper eget nulla facilisi etiam. Massa vitae tortor condimentum
                lacinia quis vel eros donec. Felis imperdiet proin fermentum leo vel. Auctor elit sed vulputate mi.
                Vivamus at augue eget arcu dictum varius duis at. Hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque elit ullamcorper. Lacus viverra vitae congue eu consequat ac felis. Iaculis at erat
                pellentesque adipiscing. Vitae congue eu consequat ac felis donec et odio pellentesque. Quis risus sed
                vulputate odio ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Gravida quis
                blandit turpis cursus in. In fermentum et sollicitudin ac orci phasellus egestas tellus. Varius sit amet
                mattis vulputate enim nulla aliquet. Convallis convallis tellus id interdum velit. Egestas sed tempus
                urna et pharetra pharetra massa massa. Mattis pellentesque id nibh tortor id aliquet lectus proin. Et
                magnis dis parturient montes nascetur ridiculus mus mauris. Ipsum faucibus vitae aliquet nec ullamcorper
                sit amet risus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nulla aliquet enim
                tortor at auctor urna nunc id cursus. Amet justo donec enim diam vulputate ut pharetra sit amet. Non
                quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Nam at lectus urna duis convallis
                convallis tellus id interdum. Luctus accumsan tortor posuere ac. Porta nibh venenatis cras sed felis
                eget velit. Justo donec enim diam vulputate. Tristique et egestas quis ipsum suspendisse ultrices. Amet
                cursus sit amet dictum sit amet justo. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
            </p>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <FullPageDoorChangeProvider>
            <MainComponent />
        </FullPageDoorChangeProvider>
    </React.StrictMode>,
)
