<div align="center">
  <img alt="react simple icons" src="https://github.com/icons-pack/react-simple-icons/blob/main/docs/images/svg/react-simple-icons.svg" width="150" />

# react-native-simple-icons

This package provides the [Simple Icons 15.20.0](https://github.com/simple-icons/simple-icons/releases/tag/15.20.0)
packaged as a set of [React Native](https://reactnative.dev/) components.

  [![www.npmjs.com!](https://img.shields.io/npm/v/@icons-pack/react-simple-icons?color=CB061D&style=flat-square)](https://www.npmjs.com/package/@icons-pack/react-simple-icons)
  [![downloads](https://img.shields.io/npm/dw/@icons-pack/react-simple-icons?color=087BB4&style=flat-square)](https://www.npmjs.com/package/@icons-pack/react-simple-icons)
  [![license](https://img.shields.io/npm/l/@icons-pack/react-simple-icons?color=008660&style=flat-square)](https://github.com/icons-pack/react-simple-icons/blob/main/LICENSE)
</div>

## Installation

Install the package and its peer dependency `react-native-svg` in your project directory with:

```shell
npm i @icons-pack/react-simple-icons react-native-svg
```

> TypeScript Support

## Usage

You can use [simpleicons.org](https://simpleicons.org) to find a specific icon. When importing an icon, keep in mind
that the names of the icons are [upperCamelCase](https://github.com/samverschueren/uppercamelcase) , for instance:

- [`Material Design`](https://simpleicons.org/?q=material) is exposed as
  `{ SiMaterialdesign } from @icons-pack/react-simple-icons`
- [`azure devOps`](https://simpleicons.org/?q=azure%20devOps) is exposed as
  `{ SiAzuredevops } from @icons-pack/react-simple-icons`

## Basic example

```jsx
import { SiReact } from '@icons-pack/react-simple-icons';

function BasicExample() {
  return <SiReact color='#61DAFB' size={24} />;
}
```

## Change title (Accessibility Label)

Each icon has a default `title` prop that corresponds to the icon name. In React Native, this prop is mapped to `accessibilityLabel` for screen reader support.

```jsx
import { SiReact } from '@icons-pack/react-simple-icons';

// Default title/accessibilityLabel is "React"
function ChangeTitle() {
  return <SiReact title='Custom React Icon' color='#61DAFB' size={24} />;
}
```

> **Note**: The `title` prop sets the `accessibilityLabel` for the icon. You can also pass `accessibilityLabel` directly via the spread props if needed.

## Use default color

Set color as `default` to use the default color for each icon

```jsx
import { SiReact } from '@icons-pack/react-simple-icons';

function DefaultColorExample() {
  return <SiReact color='default' size={24} />;
}
```

### Use default color as hex

Append `Hex` to the icon name to use the default color as hex string

```jsx
import { SiReact, SiReactHex } from '@icons-pack/react-simple-icons';

function DefaultColorExample() {
  return <SiReact color={SiReactHex} size={24} />;
}
```

## Custom styles

You can pass any `SvgProps` from `react-native-svg` to the component.

```jsx
import { SiReact } from '@icons-pack/react-simple-icons';

function CustomStyles() {
  return <SiReact style={{ opacity: 0.5 }} />;
}
```
