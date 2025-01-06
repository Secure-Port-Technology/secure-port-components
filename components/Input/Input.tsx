import React, { useState } from "react";
import { TextInput, TextInputProps, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type InputProps = TextInputProps & {
  placeholder?: string;
  secureTextEntry?: boolean;
};

export const Input = ({
  placeholder,
  secureTextEntry,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full relative">
      <TextInput
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-full p-4"
        secureTextEntry={secureTextEntry && !showPassword}
        {...props}
      />

      {secureTextEntry && (
        <Pressable
          className="absolute right-4 top-4"
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Ionicons name="eye-off-outline" size={22} color="gray" />
          ) : (
            <Ionicons name="eye-outline" size={22} color="gray" />
          )}
        </Pressable>
      )}
    </View>
  );
};
