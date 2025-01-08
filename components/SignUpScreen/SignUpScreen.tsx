import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "@/components/Button/Button";
import { useSession } from "@/context/Session";
import { Toggle } from "@/components/Toggle/Toggle";
import { Input } from "@/components/Input/Input";
import { Screen } from "@/components/Screen/Screen";

import type { UserType } from "@/context/Session";

export const SignUpScreen = () => {
  const router = useRouter();

  const { userType, setUserType, signIn } = useSession();

  return (
    <Screen className="justify-between my-safe-offset-12">
      <View className="items-center gap-8">
        <Text className="text-2xl font-bold">Sign up to SPT</Text>
        <Text className="text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>

        <Toggle
          options={[
            { label: "Event Manager", value: "manager" },
            { label: "User", value: "user" },
          ]}
          value={userType}
          onChange={(value) => setUserType(value as UserType)}
        />

        <View className="w-full gap-4">
          <Input placeholder="Organisation name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" secureTextEntry />
          <Input placeholder="Confirm Password" secureTextEntry />
          <Text className="text-gray-500 text-xs">
            Password must be at least 8 digits and contain numeric characters
          </Text>
        </View>
      </View>

      <View className="items-center w-full gap-8">
        <Text className="text-gray-500">
          Or create an account using a social profile
        </Text>

        <View className="flex-row gap-12">
          <Button icon={require("@/assets/images/apple-icon.png")} />
          <Button icon={require("@/assets/images/google-icon.png")} />
        </View>

        <TouchableOpacity onPress={() => router.push("/sign-in")}>
          <Text className="text-gray-500">
            Already have an account?{" "}
            <Text className="text-sky-500">Sign in</Text>
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
    </Screen>
  );
};
