import StyledButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { useShakeAnimation } from "@/hooks/useShakeAnimation";
import { Todo } from "@/types/todo";
import React, { useEffect, useState } from "react";
import { Animated, Keyboard, StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState<string>("");
  const [inputError, setInputError] = useState(false);
  const { animatedStyle, shake } = useShakeAnimation();

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      shake();
      return;
    }
    Keyboard.dismiss();
    onAddTodo(text);
    setText("");
  };

  useEffect(() => {
    if (inputError) {
      const timer = setTimeout(() => {
        setInputError(false);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [inputError]);

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle, { flex: 1 }]}>
        <StyledTextInput
          placeholder="Add a task.."
          value={text}
          onChangeText={setText}
          isError={inputError}
        />
      </Animated.View>
      <StyledButton
        lable="+"
        onPress={onPressAdd}
        disabled={inputError}
        size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 13,
    marginHorizontal: 7,
    gap: 10,
  },
});

export default TodoCreator;
