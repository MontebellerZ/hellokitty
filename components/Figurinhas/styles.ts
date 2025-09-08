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
  subtitle: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 17,
    color: Colors.texto,
  },
  flatlistContent: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
  },
  figurinha: {
    elevation: 3,
    width: 50,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.branco,
    position: "relative",
  },
  figurinhaText: {
    color: Colors.vermelho,
    fontWeight: 600,
  },
  figurinhaFotografada: {
    color: Colors.roxo,
    fontWeight: 600,
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(30%, -30%)",
    fontSize: 16,
    textShadowColor: Colors.branco,
    textShadowRadius: 1,
  },
  figurinhaColetada: {
    backgroundColor: Colors.rosa,
  },
  figurinhaColetadaText: {
    color: Colors.branco,
    fontWeight: "bold",
  },
});
