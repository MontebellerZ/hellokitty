import Mozinho from "@/assets/imgs/mozinho.jpg";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Repetidas() {
  return (
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>Figurinhas repetidas</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Está tela ainda está em construção</Text>

        <Text style={styles.text}>❤ Aguarde minha amorzinha 💕</Text>

        <Image source={Mozinho} style={styles.imagem} />
      </View>
    </View>
  );
}
