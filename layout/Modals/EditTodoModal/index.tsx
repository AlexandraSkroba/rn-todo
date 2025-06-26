import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import { useShakeAnimation } from "@/hooks/useShakeAnimation";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (title: string) => void;
  title: Todo["title"];
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  title,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [inputError, setInputError] = useState(false);
  const { animatedStyle, shake } = useShakeAnimation();

  const onPressSave = () => {
    if (!updatedTitle) {
      setInputError(true);
      shake();
      return;
    }
    onUpdate(updatedTitle);
    onClose();
  };

  useEffect(() => {
    if (inputError) {
      const timer = setTimeout(() => {
        setInputError(false);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [inputError]);

  useEffect(() => {
    setUpdatedTitle(title);
  }, [isOpen]);

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText variant="heading">Edit Todo</StyledText>
        <View style={styles.inputContainer}>
          <Animated.View style={[animatedStyle, { flex: 1 }]}>
            <StyledTextInput
              value={updatedTitle}
              onChangeText={setUpdatedTitle}
              placeholder="Enter todo title"
              isError={inputError}
            />
          </Animated.View>
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton lable="Cancel" onPress={onClose} variant="secondary" />
          <StyledButton
            lable="Save"
            onPress={onPressSave}
            disabled={inputError}
          />
        </View>
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  inputContainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
});

export default EditTodoModal;
