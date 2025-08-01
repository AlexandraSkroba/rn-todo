import { COLORS } from "@/constants/ui";
import useTodo from "@/hooks/useTodo";
import Header from "@/layout/Header";
import TodoCreator from "@/layout/TodoCreator";
import TodoList from "@/layout/TodoList";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  const {
    onAddTodo,
    onDeleteTodo,
    onCheckTodo,
    onUpdateTodoTitle,
    todos,
    completedTodos,
  } = useTodo();

  return (
    <View style={styles.container}>
      {/* меняет цвет в статусбаре */}
      <StatusBar barStyle={"dark-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodoTitle={onUpdateTodoTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
