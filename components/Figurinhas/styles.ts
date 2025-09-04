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
  },
  figurinhaText: {
    color: Colors.vermelho,
    fontWeight: 600,
  },
  figurinhaColetada: {
    backgroundColor: Colors.rosa,
  },
  figurinhaColetadaText: {
    color: Colors.branco,
    fontWeight: "bold",
  },
});
