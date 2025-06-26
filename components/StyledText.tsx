import { COLORS } from "@/constants/ui";
import { StyleSheet, Text, TextProps } from "react-native";

// Компонент StyledText будет принимать все те же пропсы, что и обычный <Text>
type StyledTextProps = TextProps & {
  variant?: "primary" | "title" | "subtitle" | "heading" | "small";
};

const StyledText: React.FC<StyledTextProps> = ({
  style,
  variant = "primary",
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        variant === "title" ? styles.title : null,
        variant === "subtitle" ? styles.subtitle : null,
        variant === "heading" ? styles.heading : null,
        variant === "small" ? styles.small : null,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default StyledText;
