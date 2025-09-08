import { Image } from "expo-image";
import styles from "./styles";

interface CameraFotoProps {
  foto: string;
  ratio: number;
}

export default function VerFoto(props: CameraFotoProps) {
  return (
    <Image
      source={{ uri: props.foto }}
      style={[styles.previewFoto, { aspectRatio: props.ratio }]}
    />
  );
}
