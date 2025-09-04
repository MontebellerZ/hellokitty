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
  titleDark: {
    fontWeight: "bold",
  },
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
