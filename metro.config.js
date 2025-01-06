/* eslint-env node */
const path = require("path");

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = withNativeWind(config, { input: "./app/global.css" });

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.storybook"),
  onDisabledRemoveStorybook: true,
});
