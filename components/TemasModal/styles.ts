import Colors from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.texto,
  },
  scrollContent: {
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  backBtn: {
    elevation: 5,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  backIcon: {
    height: 160,
    resizeMode: "cover",
  },
  backSelected: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.transparency(Colors.texto, 0.4),
  },
  backSelectedIcon: {
    position: "absolute",
    fontSize: 50,
    color: Colors.rosaClaro,
    textShadowColor: Colors.texto,
    textShadowRadius: 15,
  },
});
