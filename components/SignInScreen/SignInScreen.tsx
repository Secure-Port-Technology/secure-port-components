import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "@/components/Button/Button";
import { useSession } from "@/context/Session";
import { Toggle } from "@/components/Toggle/Toggle";
import { Input } from "@/components/Input/Input";

export const SignInScreen = () => {
  const router = useRouter();

  const { signIn } = useSession();
  const [userType, setUserType] = useState("user");

  return (
    <View className="flex-1 w-4/5 justify-between self-center bg-white m-safe p-safe">
      <View className="items-center w-full gap-4">
        <Text className="text-2xl font-bold mb-2">Sign in to SPT</Text>
        <Text className="text-center text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>

        <Toggle
          options={[
            { label: "Event Manager", value: "manager" },
            { label: "User", value: "user" },
          ]}
          value={userType}
          onChange={setUserType}
          className="mb-4"
        />

        <View className="w-full gap-4">
          <Input placeholder="Email Address" />
          <Input placeholder="Password" secureTextEntry />
        </View>

        <TouchableOpacity className="mb-6">
          <Text className="text-sky-500">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center w-full gap-4">
        <Text className="text-gray-500 mb-4">
          Or sign in using a social profile
        </Text>

        <View className="flex-row mb-6 gap-12">
          <Button icon={require("@/assets/images/apple-icon.png")} />
          <Button icon={require("@/assets/images/google-icon.png")} />
        </View>

        <TouchableOpacity className="mb-12">
          <Text className="text-gray-500">
            Don’t have an account? <Text className="text-sky-500">Sign up</Text>
          </Text>
        </TouchableOpacity>

        <Button
          text="Next"
          onPress={() => {
            signIn();
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            !process.env.EXPO_PUBLIC_STORYBOOK_ENABLED && router.replace("/");
          }}
        />
      </View>
    </View>
  );
};
