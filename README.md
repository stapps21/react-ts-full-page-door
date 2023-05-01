# react-ts-full-page-door

A React library written in TypeScript for creating smooth full-page door animations to switch between components.

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

## [Live Demo](https://stapps21.github.io/react-ts-full-page-door/)

## Installation

To install the library, run the following command in your project directory:

```sh
npm install react-ts-full-page-door
```

## Usage

Please refer to the [example](#example) section for a complete usage example.

## API

Wrap your app with the `FullPageDoorChangeProvider` and use the `useDoorAnimation` hook to get access to the `startAnimation` function. The `startAnimation` function accepts the following parameters:

| Parameter    | Type                  | Description                                                   | Required | Default Value  |
|--------------|-----------------------|---------------------------------------------------------------|----------|----------------|
| subContent   | ReactNode             | New content to display after the animation                    | Yes      | -              |
| doorContent  | ReactElement          | Content to display on the doors during the animation          | No       | -              |
| doorOptions  | Partial<DoorOptions>  | Object containing options for customizing the door animation  | No       | See below      |

### DoorOptions

The `DoorOptions` object has the following properties:

| Property        | Type   | Description                                 | Default Value |
|-----------------|--------|---------------------------------------------|---------------|
| color           | string | Background color of the doors               | '#1c2d4f'     |
| closingDuration | number | Duration of the door closing animation (ms) | 500           |
| openingDuration | number | Duration of the door opening animation (ms) | 500           |
| closedDuration  | number | Duration the doors will remain closed (ms)  | 1000          |

## Example

```jsx
import React from 'react'
import { FullPageDoorChangeProvider, useDoorAnimation } from 'react-ts-full-page-door'

const MyApp = () => {
  const { startAnimation } = useDoorAnimation()

  const handleClick = () => {
    startAnimation(
      <div>New content to display</div>,
      <div>Door content</div>,
      { color: '#FF0000', closingDuration: 1000, openingDuration: 1000, closedDuration: 2000 },
    )
  }

  return (
    <div>
      <button onClick={handleClick}>Start animation</button>
    </div>
  )
}

const App = () => {
  return (
    <FullPageDoorChangeProvider>
      <MyApp />
    </FullPageDoorChangeProvider>
  )
}

export default App
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

If you find any issues or have suggestions, please feel free to open an issue on the GitHub repository. Contributions are always welcome!


[npm-url]: https://www.npmjs.com/package/react-ts-full-page-door
[npm-image]: https://img.shields.io/npm/v/react-ts-full-page-door
[github-license]: https://img.shields.io/github/license/stapps21/react-ts-full-page-door
[github-license-url]: https://github.com/stapps21/react-ts-full-page-door/blob/master/LICENSE
[github-build]: https://github.com/stapps21/react-ts-full-page-door/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/stapps21/react-ts-full-page-door/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-ts-full-page-door