import 'styled-components'
import { type defaultTheme } from '../styles/themes/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
