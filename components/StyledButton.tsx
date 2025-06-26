// onPress

import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "./StyledText";

// Pressable
// TouchableOpacity

type StyledButtonProps = TouchableOpacityProps & {
  lable?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "large" | "small";
  variant?: "primary" | "secondary" | "delete";
};

const StyledButton: React.FC<StyledButtonProps> = ({
  lable,
  icon,
  size = "default",
  variant = "primary",
  disabled,
  ...props
}) => {
  const textVariant = (() => {
    if (size === "large") return "subtitle";
    return "small";
  })();

  return (
    <TouchableOpacity
      style={[
        styles.base,
        disabled ? styles.disabled : null,
        // Sizes
        size === "small" ? styles.small : null,
        size === "large" ? styles.large : null,
        // Variants
        variant === "secondary" ? styles.secondary : null,
        variant === "delete" ? styles.deleted : null,
      ]}
      {...props}
      disabled={disabled}
    >
      {lable && <StyledText variant={textVariant}>{lable}</StyledText>}
      {icon && <Ionicons name={icon} size={15} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  // Sizes
  small: {
    paddingHorizontal: 12,
  },
  large: {
    paddingHorizontal: 20,
  },
  // Variants
  secondary: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderColor: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
  deleted: {
    backgroundColor: COLORS.PRIMARY_DELETE_BUTTON,
  },
});

export default StyledButton;
