import {
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
  View,
} from "react-native";

export type MyButtonProps = {
  onPress?: () => void;
  text?: string;
  icon?: ImageSourcePropType;
  variant?: "primary" | "secondary";
};

export const Button = ({
  onPress,
  text,
  icon,
  variant = "primary",
}: MyButtonProps) => {
  const isIconButton = Boolean(icon);
  const buttonVariant = isIconButton ? "secondary" : variant;

  const containerClassName = [
    "rounded-full active:opacity-80",
    buttonVariant === "primary" ? "bg-sky-500" : "bg-none border border-black",
    isIconButton ? "p-3" : "py-4 w-full",
  ].join(" ");

  const textClassName = [
    "text-center",
    buttonVariant === "primary" ? "text-white" : "text-black",
  ].join(" ");

  return (
    <TouchableOpacity className={containerClassName} onPress={onPress}>
      {isIconButton ? (
        <Image
          source={icon}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      ) : (
        <Text className={textClassName}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
