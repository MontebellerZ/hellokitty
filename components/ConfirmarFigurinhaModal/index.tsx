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
        {!props.coletado
          ? "Deseja coletar essa figurinha?"
          : "Realmente quer desmarcar essa figurinha?"}
      </Text>

      <Text style={styles.figurinhaId}>{props.figurinha.id}</Text>

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
