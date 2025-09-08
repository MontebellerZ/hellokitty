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
  flatlistContent: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingVertical: 10,
  },
  fotoHolder: {
    elevation: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.branco,
    position: "relative",
  },
  foto: {
    width: "100%",
    resizeMode: "contain",
  },
  fotoHolderText: {
    position: "absolute",
    backgroundColor: Colors.rosa,
    paddingHorizontal: 6,
    color: Colors.branco,
    fontWeight: 500,
    fontSize: 14,
    borderRadius: 1000,
    bottom: 0,
    transform: "translate(0, 50%)",
  },
});
