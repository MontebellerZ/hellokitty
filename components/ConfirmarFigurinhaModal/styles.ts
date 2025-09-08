import Colors from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    gap: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: Colors.texto,
    maxWidth: "80%",
    textAlign: "center",
  },
  figurinhaId: {
    fontWeight: "bold",
    fontSize: 80,
    lineHeight: 60,
    color: Colors.texto,
  },
  fotoBtn: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: Colors.azulClaro,
    borderRadius: 100,
    elevation: 2,
    padding: 10,
    aspectRatio: 1,
  },
  fotoBtnIcon: {
    fontSize: 20,
  },
  fotoBtnText: {
    textAlign: "center",
    fontSize: 16,
  },
  fotoTiradaBtn: {
    backgroundColor: Colors.rosaClaro,
  },
  foto: {},
  controles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    alignSelf: "stretch",
  },
  btn: {
    minWidth: 100,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: Colors.cinzaClaro,
    alignSelf: "center",
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnCancelar: {},
  btnCancelarText: {},
  btnConfirmar: {
    backgroundColor: Colors.rosa,
  },
  btnConfirmarText: {
    color: Colors.branco,
  },
});
