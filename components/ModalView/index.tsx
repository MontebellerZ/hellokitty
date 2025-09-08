import { useModal } from "@/contexts/ModalContext";
import Entypo from "@expo/vector-icons/Entypo";
import { Modal, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function ModalView() {
  const { content, close } = useModal();

  return (
    <>
      {content.map((modal, i) => (
        <Modal
          key={i}
          visible={!!modal}
          animationType="slide"
          transparent
          onRequestClose={close}
          statusBarTranslucent
          hardwareAccelerated
          style={content.at(-1) === modal ? { display: "none" } : {}}
        >
          <View style={styles.modal}>
            <View style={styles.innerModal}>
              {modal}

              <TouchableOpacity style={styles.close} onPress={close}>
                <Entypo name="cross" style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ))}
    </>
  );
}
