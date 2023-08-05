export interface ThemeInterface {
  colors: {
    primary: string;
    default: string;
    secondary: string;
    tertiary: string;
  };
  border_colors: {
    grey: string;
  };
  backgrounds: {
    default: string;
    forms: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const theme: ThemeInterface = {
  colors: {
    primary: "#F6E412",
    secondary: "#717171",
    tertiary: "#353535",
    default: "F8F8F8",
  },
  border_colors: {
    grey: "#3A3A3A",
  },
  backgrounds: {
    default: "#000000",
    forms: "#0a0b0b",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "996px",
  },
};
