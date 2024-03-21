import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    colors: {
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#ffffff',
            800: '#172935',
            900: '#111'
        },
        green: {
            50: '#e0ffe0',
            100: '#b1ffb1',
            200: '#008000',
            300: '#4fff4e',
            400: '#25ff20',
            500: '#14e60c',
            600: '#08b304',
            700: '#008000',
            800: '#004d00',
            900: '#001b00',
            }
    }
});

export default theme;