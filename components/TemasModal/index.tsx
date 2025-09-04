import { useBackground } from "@/contexts/BackgroundContext";
import Entypo from "@expo/vector-icons/Entypo";
import { Image } from "expo-image";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function TemasModal() {
  const { back, setBack, backgrounds } = useBackground();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o seu tema preferido!</Text>

      <ScrollView horizontal contentContainerStyle={styles.scrollContent} persistentScrollbar>
        {backgrounds.map((bg, i) => (
          <TouchableOpacity key={i} onPress={() => setBack(bg)} style={styles.backBtn}>
            <Image
              source={bg.src}
              contentPosition={bg.align}
              contentFit={styles.backIcon.resizeMode}
              style={{ ...styles.backIcon, aspectRatio: bg.dimensions?.ratio }}
            />
            {back.src === bg.src && (
              <View style={styles.backSelected}>
                <Entypo name="check" style={styles.backSelectedIcon} />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
