import { useFigurinhas } from "@/contexts/FigurinhasContext";
import { useFotos } from "@/contexts/FotosContext";
import { useModal } from "@/contexts/ModalContext";
import { Figurinha } from "@/utils/figurinhas";
import { updateCacheFoto } from "@/utils/fotos";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Toast } from "toastify-react-native";
import ConfirmarFigurinhaModal from "../ConfirmarFigurinhaModal";
import styles from "./styles";

interface FigurinhaViewProps {
  figurinha: Figurinha;
  coletarFigurinha: (figurinha: Figurinha, coletada: boolean) => void;
  fotografarFigurinha: (figurinha: Figurinha, foto?: string) => void;
}

function FigurinhaView(props: FigurinhaViewProps) {
  const { setContent, close } = useModal();

  const [coletado, setColetado] = useState(props.figurinha.coletada);

  function confirmarFigurinha() {
    setColetado((c) => !c);
    close();
  }

  function salvarFoto(foto?: string) {
    props.fotografarFigurinha(props.figurinha, foto);
  }

  function selectFigurinha() {
    setContent(
      <ConfirmarFigurinhaModal
        figurinha={props.figurinha}
        coletado={coletado}
        onCancelar={close}
        onConfirmar={confirmarFigurinha}
        onFoto={salvarFoto}
      />
    );
  }

  useEffect(() => {
    if (coletado === props.figurinha.coletada) return;

    props.coletarFigurinha(props.figurinha, coletado);
  }, [coletado, props]);

  return (
    <TouchableOpacity
      style={[styles.figurinha, coletado ? styles.figurinhaColetada : {}]}
      onPress={selectFigurinha}
    >
      <Text style={[styles.figurinhaText, coletado ? styles.figurinhaColetadaText : {}]}>
        {props.figurinha.id}
      </Text>

      {props.figurinha.foto && <AntDesign name="star" style={styles.figurinhaFotografada} />}
    </TouchableOpacity>
  );
}

export default function Figurinhas() {
  const { figurinhas, setFigurinhas } = useFigurinhas();
  const { setFotos } = useFotos();

  async function coletarFigurinha(figurinha: Figurinha, coletada: boolean) {
    if (!figurinhas) return;

    figurinha.coletada = coletada;
    setFigurinhas(figurinhas);

    if (coletada) Toast.success("Figurinha coletada!");
    else Toast.info("Figurinha desmarcada.");
  }

  async function fotografarFigurinha(figurinha: Figurinha, foto?: string) {
    if (!figurinhas) return;

    figurinha.foto = foto;
    setFotos(updateCacheFoto(figurinha, foto));
    setFigurinhas(figurinhas);

    if (foto) Toast.success("Foto registrada!");
    else Toast.warn("Não encontramos a foto da sua figurinha!");
  }

  const coletadas = useMemo(
    () => figurinhas?.reduce((sum, f) => (f.coletada ? sum + 1 : sum), 0) || 0,
    [figurinhas]
  );
  const total = useMemo(() => figurinhas?.length || 0, [figurinhas]);

  return (
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        {!figurinhas && <ActivityIndicator size={"small"} />}
        <Text style={styles.title}>
          {!figurinhas ? "Buscando figurinhas" : "Figurinhas coletadas"}
        </Text>
      </View>

      {figurinhas && (
        <View style={styles.titleHolder}>
          <Text style={styles.subtitle}>
            {coletadas} / {total}
          </Text>
        </View>
      )}

      {figurinhas?.length ? (
        <FlatList
          contentContainerStyle={styles.flatlistContent}
          data={figurinhas}
          renderItem={({ item }) => (
            <FigurinhaView
              figurinha={item}
              coletarFigurinha={coletarFigurinha}
              fotografarFigurinha={fotografarFigurinha}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
