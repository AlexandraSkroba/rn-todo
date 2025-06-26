import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type StyledCheckboxProps = {
  isChecked: boolean;
  onCheck: () => void;
};

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({
  isChecked,
  onCheck,
}) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons
        name={isChecked ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default StyledCheckbox;
