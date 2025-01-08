import { SignUpScreen } from "./SignUpScreen";
import { SessionProvider } from "@/context/Session";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/SignUpScreen",
  component: SignUpScreen,
  decorators: [
    (Story) => (
      <SessionProvider>
        <Story />
      </SessionProvider>
    ),
  ],
} satisfies Meta<typeof SignUpScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
