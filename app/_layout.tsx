import { Slot } from "expo-router";
import { SessionProvider } from "@/context/Session";

import "./global.css";

function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}

let AppEntryPoint = RootLayout;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint;
