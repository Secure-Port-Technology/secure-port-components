import { View } from "react-native";

export const Screen = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <View
      className={`flex-1 w-5/6 justify-center self-center m-safe bg-white ${className}`}
    >
      {children}
    </View>
  );
};
