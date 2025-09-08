import Galeria from "@/components/Galeria";
import { View } from "react-native";
import styles from "./styles";

export default function Fotos() {
  return (
    <View style={styles.container}>
      <Galeria />
    </View>
  );
}
