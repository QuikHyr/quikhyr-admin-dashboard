import localFont from "next/font/local";

export const trap = localFont({
  src: [
    { path: "./Trap-Black.otf", weight: "900" },
    { path: "./Trap-ExtraBold.otf", weight: "800" },
    { path: "./Trap-Bold.otf", weight: "700" },
    { path: "./Trap-SemiBold.otf", weight: "600" },
    { path: "./Trap-Medium.otf", weight: "500" },
    { path: "./Trap-Regular.otf", weight: "400" },
    { path: "./Trap-Light.otf", weight: "300" },
  ],
  display: "swap",
  fallback: ["Garamond, serif", "Times New Roman, serif"],
  variable: "--font-trap",
});
