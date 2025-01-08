import React, { useState } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface EventCardProps {
  title: string;
  location: string;
  date: string;
  attendeeCount: number;
  onLikePress?: () => void;
  isLiked?: boolean;
  backgroundImage: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  location,
  date,
  attendeeCount,
  onLikePress,
  isLiked = false,
  backgroundImage,
}) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLikePress = () => {
    setLiked(!liked);
    onLikePress?.();
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      className="rounded-xl overflow-hidden w-full max-w-[400px] aspect-[1.5]"
      resizeMode="cover"
    >
      <View
        id="background-image-overlay"
        className="absolute inset-0 bg-black/40"
      />

      <View className="flex-1 p-4">
        <View className="flex-row justify-between items-center mb-4">
          {/* <Text className="text-white text-sm font-medium"> */}
          <Text className="text-gray-900 text-sm font-medium bg-white/90 rounded-full py-4 px-6">
            {attendeeCount} going
          </Text>

          <Pressable
            onPress={handleLikePress}
            className="p-3 rounded-full bg-white/90"
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={24}
              color="#0ea5e9"
            />
          </Pressable>
        </View>

        <View className="flex-1 justify-end gap-2">
          <Text className="text-white text-2xl font-bold">{title}</Text>
          <View className="flex-row items-center gap-1">
            <Ionicons name="location-outline" size={16} color="white" />
            <Text className="text-white text-sm">{location}</Text>
          </View>
          <Text className="text-white text-sm">{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
