import { useFotos } from "@/contexts/FotosContext";
import { useModal } from "@/contexts/ModalContext";
import { AssetType, Foto, getRatio } from "@/utils/fotos";
import { Image } from "expo-image";
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import VerFoto from "../VerFoto";
import styles from "./styles";

interface FigurinhaViewProps {
  foto: Foto;
}

function FotoView(props: FigurinhaViewProps) {
  const { setContent } = useModal();

  const [asset, setAsset] = useState<AssetType>();

  const ratio = useMemo(() => (asset ? getRatio(asset.width, asset.height) : null), [asset]);

  function verFoto() {
    if (!asset || !ratio) return;

    setContent(<VerFoto foto={asset.uri} ratio={ratio} />);
  }

  useEffect(() => {
    props.foto.getAsset().then(setAsset);
  }, [props.foto]);

  return (
    <TouchableOpacity style={styles.fotoHolder} onPress={verFoto}>
      {asset && ratio && (
        <>
          <Image source={{ uri: asset.uri }} style={[styles.foto, { aspectRatio: ratio }]} />
          {props.foto.figurinha && (
            <Text style={styles.fotoHolderText}>{props.foto.figurinha.id}</Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

export default function Galeria() {
  const { fotos } = useFotos();

  return (
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        {!fotos && <ActivityIndicator size={"small"} />}
        <Text style={styles.title}>{!fotos ? "Buscando fotos" : "Fotos tiradas"}</Text>
      </View>

      {fotos?.length ? (
        <FlatList
          contentContainerStyle={styles.flatlistContent}
          data={fotos}
          renderItem={({ item }) => <FotoView foto={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
