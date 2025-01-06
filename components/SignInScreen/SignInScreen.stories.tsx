import { View } from "react-native";
import { SignInScreen } from "./SignInScreen";
import { SessionProvider } from "@/context/Session";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/SignInScreen",
  component: SignInScreen,
  decorators: [
    (Story) => (
      <SessionProvider>
        <View className="flex-1 justify-center items-center">
          <Story />
        </View>
      </SessionProvider>
    ),
  ],
} satisfies Meta<typeof SignInScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
