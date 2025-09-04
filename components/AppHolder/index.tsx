import { useBackground } from "@/contexts/BackgroundContext";
import { ImageBackground } from "expo-image";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

SplashScreen.preventAutoHideAsync();

export default function AppHolder(props: PropsWithChildren) {
  const { back } = useBackground();

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  return (
    <ImageBackground
      source={back.src}
      contentPosition={back.align}
      contentFit={styles.imgBack.resizeMode}
      style={styles.imgBack}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
