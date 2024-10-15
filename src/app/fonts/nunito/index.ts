import localFont from "next/font/local"

export const nunito = localFont({
    src: [
        {
            path: "./Nunito-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./Nunito-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./Nunito-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./Nunito-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./Nunito-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Nunito-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-nunito",
    display: "swap",
    adjustFontFallback: false,
})
