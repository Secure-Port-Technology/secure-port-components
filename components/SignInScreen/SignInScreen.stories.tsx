import { SignInScreen } from "./SignInScreen";
import { SessionProvider } from "@/context/Session";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/SignInScreen",
  component: SignInScreen,
  decorators: [
    (Story) => (
      <SessionProvider>
        <Story />
      </SessionProvider>
    ),
  ],
} satisfies Meta<typeof SignInScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
