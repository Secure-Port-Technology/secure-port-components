import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "@/components/Button/Button";
import { useSession } from "@/context/Session";
import { Toggle } from "@/components/Toggle/Toggle";
import { Input } from "@/components/Input/Input";
import { Screen } from "@/components/Screen/Screen";

import type { UserType } from "@/context/Session";

export const SignInScreen = () => {
  const router = useRouter();

  const { userType, setUserType, signIn } = useSession();

  return (
    <Screen className="justify-between my-safe-offset-12">
      <View className="items-center gap-8">
        <Text className="text-2xl font-bold">Sign in to SPT</Text>
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
          <Input placeholder="Email Address" />
          <Input placeholder="Password" secureTextEntry />
        </View>

        <TouchableOpacity>
          <Text className="text-sky-500">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center w-full gap-8">
        <Text className="text-gray-500">Or sign in using a social profile</Text>

        <View className="flex-row gap-12">
          <Button icon={require("@/assets/images/apple-icon.png")} />
          <Button icon={require("@/assets/images/google-icon.png")} />
        </View>

        <TouchableOpacity onPress={() => router.push("/sign-up")}>
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
    </Screen>
  );
};
