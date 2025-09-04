import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageDetails } from "./imageDetails";

import back1 from "../assets/background/back1.jpg";
import back2 from "../assets/background/back2.jpg";
import back3 from "../assets/background/back3.jpg";
import back4 from "../assets/background/back4.jpg";
import back5 from "../assets/background/back5.jpg";
import back6 from "../assets/background/back6.png";

const BACKGROUND_KEY = "backgroundStorageKey";

export const BACKGROUNDS: ImageDetails[] = [
  new ImageDetails(back1, undefined, true),
  new ImageDetails(back2, undefined, true),
  new ImageDetails(back3, "left", true),
  new ImageDetails(back4, undefined, true),
  new ImageDetails(back5, undefined, true),
  new ImageDetails(back6, undefined, true),
];

export async function loadBackground() {
  try {
    const backJson = await AsyncStorage.getItem(BACKGROUND_KEY);
    if (!backJson) return BACKGROUNDS[0];

    const index = Number(backJson);
    if (isNaN(index)) {
      throw new Error("O background armazenado está corrompido");
    }

    return BACKGROUNDS[index] ?? BACKGROUNDS[0];
  } catch (err) {
    console.error("Erro ao carregar background:", err);
    return BACKGROUNDS[0];
  }
}

export async function saveBackground(back: ImageDetails) {
  const index = BACKGROUNDS.findIndex((b) => b.src === back.src);
  await AsyncStorage.setItem(BACKGROUND_KEY, index.toString());
}
