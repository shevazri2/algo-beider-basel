/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const ThemeColors = {
  darkBlue: '#244061',
  lightBlue: '#c6d9f1',
  white: '#ffffff',
  yellow: '#ffc003',
  green: '#7cd432',
  red: '#c00001',
  black: '#000000',
  tintYellow: '#ffe48f',
  tintYellowDark: '#f9be86',
  tintRed: '#f9e1df',
  tintRedDark: '#ddc8c9',
  pink: '#ff99cc',
}

export const Colors = {
  light: {
    text: ThemeColors.black,
    background: ThemeColors.white,
    tint: ThemeColors.darkBlue,
    icon: ThemeColors.black,
    tabIconDefault: ThemeColors.darkBlue,
    tabIconSelected: ThemeColors.black,
  },
  dark: {
    text: ThemeColors.white,
    background: ThemeColors.darkBlue,
    tint: ThemeColors.lightBlue,
    icon: ThemeColors.white,
    tabIconDefault: ThemeColors.white,
    tabIconSelected: ThemeColors.lightBlue,
  },
};
