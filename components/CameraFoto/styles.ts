import Colors from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cameraHolder: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  camera: {
    width: "100%",
    maxHeight: "100%",
  },
  controleBtn: {
    position: "absolute",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    elevation: 2,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: Colors.texto,
  },
  cameraFlipBtn: {
    bottom: 10,
    right: 10,
    backgroundColor: Colors.rosaClaro,
  },
  cameraFlip: {
    fontSize: 24,
    color: Colors.texto,
  },
  cameraClickBtn: {
    bottom: 10,
    backgroundColor: Colors.branco,
    height: 50,
  },
  cameraClick: {
    fontSize: 28,
    color: Colors.texto,
  },
  previewFotoHolder: {
    backgroundColor: Colors.background,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  previewFoto: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  previewFotoControles: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 8,
    bottom: 10,
    alignSelf: "center",
  },
  previewFotoBtn: {
    backgroundColor: Colors.rosaClaro,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    elevation: 2,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: Colors.texto,
  },
  previewFotoIcon: {
    fontSize: 28,
    color: Colors.texto,
  },
});
