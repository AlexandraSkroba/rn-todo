import { COLORS } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInputProps = TextInputProps & {
  isError?: boolean;
};

const StyledTextInput: React.FC<StyledTextInputProps> = ({
  isError,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, props.style, isError ? styles.error : null]}
      {...props}
      placeholderTextColor={COLORS.PLACEHOLDER_TEXT}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: COLORS.PRIMARY_TEXT,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_TEXT,
    flex: 1,
  },
  error: {
    borderColor: COLORS.INPUT_ERROR,
  },
});

export default StyledTextInput;
