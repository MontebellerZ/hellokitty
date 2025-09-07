import { useBackground } from "@/contexts/BackgroundContext";
import { useFonts } from "expo-font";
import { ImageBackground } from "expo-image";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

SplashScreen.preventAutoHideAsync();

export default function AppHolder(props: PropsWithChildren) {
  const [fontLoaded, fontError] = useFonts({
    Boldins: require("../../assets/fonts/Boldins.otf"),
  });

  const { back } = useBackground();

  useEffect(() => {
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }

    if (fontError) {
      console.error("Font Error:", fontError);
    }
  }, [fontLoaded, fontError]);

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
