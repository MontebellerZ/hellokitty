import { useModal } from "@/contexts/ModalContext";
import Entypo from "@expo/vector-icons/Entypo";
import { Modal, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function ModalView() {
  const { content, close } = useModal();

  return (
    <Modal visible={!!content} animationType="slide" transparent onRequestClose={close}>
      <View style={styles.modal}>
        <View style={styles.innerModal}>
          {content}

          <TouchableOpacity style={styles.close} onPress={close}>
            <Entypo name="cross" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
