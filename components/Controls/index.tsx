import { useModal } from "@/contexts/ModalContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity, View } from "react-native";
import TemasModal from "../TemasModal";
import styles from "./styles";

export default function Controls() {
  const { setContent } = useModal();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttons} onPress={() => setContent(<TemasModal />)}>
        <FontAwesome6 name="brush" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}
