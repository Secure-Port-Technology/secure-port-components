import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Hello world",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    variant: "secondary",
  },
};

export const Icon: Story = {
  args: {
    icon: require("@/assets/images/apple-icon.png"),
  },
};
