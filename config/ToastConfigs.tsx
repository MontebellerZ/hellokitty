import Colors from "@/utils/colors";
import { Image } from "expo-image";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import ToastManager from "toastify-react-native";
import {
  ToastConfig,
  ToastConfigParams,
  ToastManagerProps,
} from "toastify-react-native/utils/interfaces";

import GifDance from "@/assets/gifs/hello_kitty_dance.gif";
import GifCoffe from "@/assets/gifs/hello_kitty_happy_coffe.gif";
import GifHelp from "@/assets/gifs/hello_kitty_help.gif";
import GifPrincess from "@/assets/gifs/hello_kitty_princess.gif";
import GifRain from "@/assets/gifs/hello_kitty_rain.gif";
import GifSad from "@/assets/gifs/hello_kitty_sad.gif";
import GifSchool from "@/assets/gifs/hello_kitty_school.gif";
import GifTrain from "@/assets/gifs/hello_kitty_train.gif";
import GifWhat from "@/assets/gifs/hello_kitty_what.gif";

const TOAST_DETAILS = {
  success: {
    gifs: [GifDance, GifCoffe, GifPrincess],
    color: Colors.toastSuccess,
  },
  info: {
    gifs: [GifTrain, GifHelp],
    color: Colors.toastInfo,
  },
  warn: {
    gifs: [GifSad, GifRain, GifSchool, GifWhat],
    color: Colors.toastWarn,
  },
  error: {
    gifs: [GifSad],
    color: Colors.toastError,
  },
};

type TOAST_TYPES = keyof typeof TOAST_DETAILS;

function getDetails(type: keyof typeof TOAST_DETAILS) {
  return TOAST_DETAILS[type];
}

function getRandomGif(gifs: any[]) {
  const randomIndex = Math.floor(Math.random() * gifs.length);
  return gifs[randomIndex];
}

interface ToastConfigProps extends ToastConfigParams {
  toastType: TOAST_TYPES;
}

function ToastContainer(props: ToastConfigProps) {
  const toastDetails = getDetails(props.toastType);
  const gif = getRandomGif(toastDetails.gifs);
  const color = toastDetails.color;

  return (
    <View style={styles.container}>
      <Image source={gif} style={styles.gif} />
      <View style={styles.textHolder}>
        <Text style={[styles.text1, { color }]}>{props.text1}</Text>
        {props.text2 && <Text style={styles.text2}>{props.text2}</Text>}
      </View>
    </View>
  );
}

const toastConfig: ToastConfig = {
  success: (props) => <ToastContainer {...props} toastType="success" />,
  info: (props) => <ToastContainer {...props} toastType="info" />,
  warn: (props) => <ToastContainer {...props} toastType="warn" />,
  error: (props) => <ToastContainer {...props} toastType="error" />,
};

const toastManagerProps: ToastManagerProps = {
  config: toastConfig,
  useModal: false,
  duration: 5000,
  animationStyle: "fade",
};

export const ToastConfigs: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ToastManager {...toastManagerProps} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.branco,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    maxWidth: "90%",
  },
  gif: {
    height: 60,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  textHolder: {
    alignItems: "stretch",
    justifyContent: "center",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 16,
  },
  text2: {
    color: Colors.texto,
    fontSize: 14,
  },
});
