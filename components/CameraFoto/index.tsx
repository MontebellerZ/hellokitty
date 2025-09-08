import { useOrientation } from "@/contexts/OrientationContext";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  CameraCapturedPicture,
  CameraRatio,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

const RATIOS: { ratio: CameraRatio; styleRatio: { h: number; v: number } }[] = [
  // {
  //   ratio: "1:1",
  //   styleRatio: { v: 1, h: 1 },
  // },
  {
    ratio: "4:3",
    styleRatio: { v: 3 / 4, h: 4 / 3 },
  },
  // {
  //   ratio: "16:9",
  //   styleRatio: { v: 9 / 16, h: 16 / 9 },
  // },
];

interface CameraFotoProps {
  salvarFoto: (foto: CameraCapturedPicture) => void;
}

export default function CameraFoto(props: CameraFotoProps) {
  const cameraRef = useRef<CameraView>(null);

  const { orientation } = useOrientation();

  const [face, setFace] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [foto, setFoto] = useState<CameraCapturedPicture>();

  function virarCamera() {
    setFace((f) => (f === "back" ? "front" : "back"));
  }

  async function tirarFoto() {
    const camera = cameraRef.current;

    if (!camera) return;

    const pic = await camera.takePictureAsync({
      quality: 1,
      base64: true,
      exif: true,
    });

    setFoto(pic);
  }

  async function apagarFoto() {
    setFoto(undefined);
  }

  async function salvarFoto() {
    if (!foto) return;

    props.salvarFoto(foto);
  }

  const usingRatio = orientation === "portrait" ? RATIOS[0].styleRatio.v : RATIOS[0].styleRatio.h;

  useEffect(() => {
    if (permission?.granted) return;

    requestPermission();
  }, [requestPermission, permission]);

  if (!permission?.granted) return <View />;

  return (
    <View style={styles.container}>
      <View style={styles.cameraHolder}>
        <CameraView
          facing={face}
          ratio={RATIOS[0].ratio}
          style={[styles.camera, { aspectRatio: usingRatio }]}
          ref={cameraRef}
        />

        <TouchableOpacity style={[styles.controleBtn, styles.cameraClickBtn]} onPress={tirarFoto}>
          <MaterialCommunityIcons name="camera" style={styles.cameraClick} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.controleBtn, styles.cameraFlipBtn]} onPress={virarCamera}>
          <MaterialCommunityIcons name="camera-flip-outline" style={styles.cameraFlip} />
        </TouchableOpacity>
      </View>

      {foto && (
        <View style={styles.previewFotoHolder}>
          <Image source={{ uri: foto.uri }} style={styles.previewFoto} />

          <View style={styles.previewFotoControles}>
            <TouchableOpacity style={[styles.previewFotoBtn]} onPress={apagarFoto}>
              <Ionicons name="close" style={styles.previewFotoIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.previewFotoBtn]} onPress={salvarFoto}>
              <Feather name="check" style={styles.previewFotoIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
