import { ImageContentPosition } from "expo-image";
import { Dimensions, Image } from "react-native";

export class ImageDetails {
  src: any;
  align: ImageContentPosition = "center";
  dimensions?: { width: number; height: number; ratio: number };

  constructor(src: any, align: ImageContentPosition = "center", useScreenSize: boolean = false) {
    this.src = src;
    this.align = align;

    if (useScreenSize) this.getScreenSize();
    else this.getSize();
  }

  getSize() {
    const { width, height } = Image.resolveAssetSource(this.src);
    this.dimensions = { width, height, ratio: width / height };
  }

  getScreenSize() {
    const { width, height } = Dimensions.get("screen");
    this.dimensions = { width, height, ratio: width / height };
  }
}
