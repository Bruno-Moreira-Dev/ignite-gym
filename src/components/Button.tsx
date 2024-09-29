import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  variant = "solid",
  isLoading = false,
  ...rest
}: Props) {
  const isOutline = variant === "outline";

  return (
    <GluestackButton
      w="$full"
      h="$14"
      bg={isOutline ? "transparent" : "$green700"}
      borderWidth={isOutline ? "$1" : "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-backgroundColor={isOutline ? "$gray500" : "$green500"}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={isOutline ? "$green500" : "$white"}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
