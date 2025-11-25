<div align="center">
  <img alt="react simple icons" src="https://github.com/icons-pack/react-simple-icons/blob/main/docs/images/svg/react-simple-icons.svg" width="150" />

# simple-icons-react-native

This package provides the [Simple Icons 15.20.0](https://github.com/simple-icons/simple-icons/releases/tag/15.20.0)
packaged as a set of [React Native](https://reactnative.dev/) components.
</div>

## Installation

Install the package and its peer dependency `react-native-svg` in your project directory with:

```shell
npm i simple-icons-react-native react-native-svg
```

> TypeScript Support

## Usage

You can use [simpleicons.org](https://simpleicons.org) to find a specific icon. When importing an icon, keep in mind
that the names of the icons are [upperCamelCase](https://github.com/samverschueren/uppercamelcase) , for instance:

- [`Material Design`](https://simpleicons.org/?q=material) is exposed as
  `{ SiMaterialdesign } from simple-icons-react-native`
- [`azure devOps`](https://simpleicons.org/?q=azure%20devOps) is exposed as
  `{ SiAzuredevops } from simple-icons-react-native`

## Basic example

```jsx
import { SiReact } from 'simple-icons-react-native';

function BasicExample() {
  return <SiReact color='#61DAFB' size={24} />;
}
```

## Change title (Accessibility Label)

Each icon has a default `title` prop that corresponds to the icon name. In React Native, this prop is mapped to `accessibilityLabel` for screen reader support.

```jsx
import { SiReact } from 'simple-icons-react-native';

// Default title/accessibilityLabel is "React"
function ChangeTitle() {
  return <SiReact title='Custom React Icon' color='#61DAFB' size={24} />;
}
```

> **Note**: The `title` prop sets the `accessibilityLabel` for the icon. You can also pass `accessibilityLabel` directly via the spread props if needed.

## Use default color

Set color as `default` to use the default color for each icon

```jsx
import { SiReact } from 'simple-icons-react-native';

function DefaultColorExample() {
  return <SiReact color='default' size={24} />;
}
```

### Use default color as hex

Append `Hex` to the icon name to use the default color as hex string

```jsx
import { SiReact, SiReactHex } from 'simple-icons-react-native';

function DefaultColorExample() {
  return <SiReact color={SiReactHex} size={24} />;
}
```

## Custom styles

You can pass any `SvgProps` from `react-native-svg` to the component.

```jsx
import { SiReact } from 'simple-icons-react-native';

function CustomStyles() {
  return <SiReact style={{ opacity: 0.5 }} />;
}
```

## Acknowledgements

This project is a fork of [`@icons-pack/react-simple-icons`](https://github.com/icons-pack/react-simple-icons). Special thanks to that repository for the original tooling and component structure that made this React Native variant possible.
