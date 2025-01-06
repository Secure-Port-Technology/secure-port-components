import { Stack } from "expo-router";

import "./global.css";

function RootLayout() {
  return <Stack />;
}

let AppEntryPoint = RootLayout;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint;
