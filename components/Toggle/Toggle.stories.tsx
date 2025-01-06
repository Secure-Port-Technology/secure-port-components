import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Toggle } from "./Toggle";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components/Toggle",
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const ToggleWithState = () => {
  const [value, setValue] = useState("user");

  const handleChange = (newValue: string) => {
    action("onChange")(newValue);
    setValue(newValue);
  };

  return (
    <Toggle
      options={[
        { label: "Event Manager", value: "manager" },
        { label: "User", value: "user" },
      ]}
      value={value}
      onChange={handleChange}
      className="mb-4"
    />
  );
};

export const Default: Story = {
  render: () => <ToggleWithState />,
};
