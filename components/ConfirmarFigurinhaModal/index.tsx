import { useModal } from "@/contexts/ModalContext";
import { Figurinha } from "@/utils/figurinhas";
import { AssetType, getFoto, saveFoto } from "@/utils/fotos";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CameraCapturedPicture } from "expo-camera";
import { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CameraFoto from "../CameraFoto";
import VerFoto from "../VerFoto";
import styles from "./styles";

interface ConfirmarFigurinhaModalProps {
  onConfirmar: () => void;
  onCancelar: () => void;
  onFoto: (foto: string) => void;
  figurinha: Figurinha;
  coletado: boolean;
}

export default function ConfirmarFigurinhaModal(props: ConfirmarFigurinhaModalProps) {
  const { setContent, close } = useModal();

  const [foto, setFoto] = useState<AssetType>();

  const definirFoto = useCallback(
    (asset: AssetType) => {
      if (foto?.id !== asset.id) props.onFoto(asset.id);
      setFoto(asset);
    },
    [foto?.id, props]
  );

  async function salvarFoto(foto: CameraCapturedPicture) {
    close();

    const asset = await saveFoto(foto);

    definirFoto(asset);
  }

  function openCamera() {
    setContent(<CameraFoto salvarFoto={salvarFoto} />);
  }

  function verFoto() {
    if (foto) setContent(<VerFoto foto={foto.uri} ratio={foto.width / foto.height} />);
  }

  useEffect(() => {
    const fotoId = props.figurinha.foto;

    if (!fotoId) return;

    getFoto(fotoId).then(definirFoto);
  }, [definirFoto, props.figurinha.foto]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {!props.coletado
          ? "Deseja coletar essa figurinha?"
          : "Realmente quer desmarcar essa figurinha?"}
      </Text>

      <Text style={styles.figurinhaId}>{props.figurinha.id}</Text>

      <View style={styles.controles}>
        {props.figurinha.coletada && (
          <TouchableOpacity style={styles.fotoBtn}>
            <Ionicons name="duplicate-outline" style={styles.fotoBtnIcon} />
          </TouchableOpacity>
        )}

        {foto && (
          <TouchableOpacity style={[styles.fotoBtn, styles.fotoTiradaBtn]} onPress={verFoto}>
            <MaterialCommunityIcons name="image" style={styles.fotoBtnIcon} />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.fotoBtn} onPress={openCamera}>
          <MaterialCommunityIcons name="camera-plus-outline" style={styles.fotoBtnIcon} />
        </TouchableOpacity>
      </View>

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
