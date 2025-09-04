import { Figurinha } from "@/utils/figurinhas";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface ConfirmarFigurinhaModalProps {
  onConfirmar: () => void;
  onCancelar: () => void;
  figurinha: Figurinha;
  coletado: boolean;
}

export default function ConfirmarFigurinhaModal(props: ConfirmarFigurinhaModalProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {!props.coletado ? "Confirmar que a figurinha " : "Realmente quer desmarcar a figurinha "}
        <Text style={styles.titleDark}>{props.figurinha.id}</Text>
        {!props.coletado ? " foi coletada?" : "?"}
      </Text>

      <View style={styles.controles}>
        <TouchableOpacity style={[styles.btn, styles.btnCancelar]} onPress={props.onCancelar}>
          <Text style={[styles.btnText, styles.btnCancelarText]}>Não</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnConfirmar]} onPress={props.onConfirmar}>
          <Text style={[styles.btnText, styles.btnConfirmarText]}>Sim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
