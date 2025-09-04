import Colors from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  innerModal: {
    position: "relative",
    backgroundColor: Colors.background,
    minWidth: 300,
    width: "90%",
    maxHeight: "90%",
    padding: 14,
    borderRadius: 18,
  },
  close: {
    position: "absolute",
    top: 4,
    right: 4,
    borderRadius: 1000,
    padding: 2,
    backgroundColor: Colors.rosaClaro,
  },
  closeIcon: {
    fontSize: 24,
    color: Colors.texto,
  },
});
