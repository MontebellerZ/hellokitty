import Controls from "@/components/Controls";
import Figurinhas from "@/components/Figurinhas";
import { View } from "react-native";
import styles from "./styles";

export default function Teste() {
  return (
    <View style={styles.container}>
      <Controls />

      <Figurinhas />
    </View>
  );
}
