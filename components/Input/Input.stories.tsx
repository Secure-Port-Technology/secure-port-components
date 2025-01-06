import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: "100%" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Email Address",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Password",
    secureTextEntry: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Email Address",
    value: "user@example.com",
  },
};
