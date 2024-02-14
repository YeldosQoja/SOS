import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    main: string;
    text: string;
    white: string;
    gray: {
      light: string;
      dark: string;
    };
    red: {
      light: string;
      dark: string;
    };
    rating: string;
  }
}
