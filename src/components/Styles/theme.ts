import {DefaultTheme} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string
        secondaryColor: string
        svgActive: string
        link: string
        tag: string
        danger: string
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: "#333",
    secondaryColor: "#666",
    svgActive: "#2da44e",
    link: "#fff",
    tag: "#fff",
    danger: "#fff",
}

export const darkTheme: DefaultTheme = {
    primaryColor: "#fff",
    secondaryColor: "#242525",
    svgActive: "#2da44e",
    link: "#fff",
    tag: "#fff",
    danger: "#B73556",
}