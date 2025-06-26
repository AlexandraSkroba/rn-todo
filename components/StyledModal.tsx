import { COLORS } from "@/constants/ui";
import {
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

type StyledModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const StyledModal: React.FC<StyledModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType="fade"
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackgroundContainer}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.contentContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
    borderRadius: 20,
    padding: 20,
    width: "90%",
  },
});

export default StyledModal;
