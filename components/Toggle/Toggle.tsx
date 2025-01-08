import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from "react-native-reanimated";

export type ToggleOption = {
  label: string;
  value: string;
};

type ToggleProps = {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const Toggle = ({
  options,
  value,
  onChange,
  className = "",
}: ToggleProps) => {
  const activeIndex = options.findIndex((option) => option.value === value);
  const translateX = useSharedValue(activeIndex);

  // Calculate and animate to new position when value changes
  React.useEffect(() => {
    translateX.value = withSpring(activeIndex, {
      mass: 0.1,
      damping: 15,
      stiffness: 250,
    });
  }, [value, options, activeIndex]);

  const pillAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: `${translateX.value * 100}%`,
        },
      ],
      width: `${100 / options.length}%`,
    };
  });

  return (
    <View
      className={`flex-row w-full relative border border-gray-300 rounded-full ${className}`}
    >
      <Animated.View
        className="absolute bg-sky-500 h-full rounded-full"
        style={pillAnimation}
      />
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <TouchableOpacity
            key={option.value}
            onPress={() => onChange(option.value)}
            className="flex-1 items-center py-2"
          >
            <Text className={`text-sm ${isSelected ? "text-white" : ""}`}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
