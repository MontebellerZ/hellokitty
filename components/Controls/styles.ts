import Colors from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  buttons: {
    backgroundColor: Colors.transparency(Colors.background, 0.85),
    borderRadius: 1000,
    aspectRatio: 1,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    fontSize: 24,
    color: Colors.texto,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
