import Colors from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparency(Colors.background, 0.85),
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },
  titleHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.texto,
  },
  content: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
  imagem: {
    width: "90%",
    aspectRatio: 1,
    elevation: 4,
    borderRadius: 100,
    overflow: "hidden",
  },
});
