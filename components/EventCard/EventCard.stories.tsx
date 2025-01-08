import type { Meta, StoryObj } from "@storybook/react";
import { EventCard } from "./EventCard";
import { View } from "react-native";

const meta: Meta<typeof EventCard> = {
  title: "Components/EventCard",
  component: EventCard,
  decorators: [
    (Story) => (
      <View className="p-4 bg-gray-100">
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
  args: {
    title: "Fashion Forward",
    location: "The Strand, London",
    date: "Aug 24 2024",
    attendeeCount: 100,
    isLiked: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
  },
};

export const Liked: Story = {
  args: {
    ...Default.args,
    isLiked: true,
  },
};

export const ManyAttendees: Story = {
  args: {
    ...Default.args,
    attendeeCount: 1000,
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title: "Fashion Forward 2024: The Ultimate Summer Collection Show",
    backgroundImage:
      "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=800",
  },
};
