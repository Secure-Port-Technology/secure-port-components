export default {
  expo: {
    name: "secure-port-components",
    slug: "secure-port-components",
    owner: "secure-port-technology",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "single",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      baseUrl: "/secure-port-components",
    },
    extra: {
      eas: {
        projectId: "e24443e9-7968-49d6-a223-c7249f19bb70",
      },
    },
    updates: {
      url: "https://u.expo.dev/e24443e9-7968-49d6-a223-c7249f19bb70",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
