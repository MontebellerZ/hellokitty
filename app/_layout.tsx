import AppHolder from "@/components/AppHolder";
import Controls from "@/components/Controls";
import ModalView from "@/components/ModalView";
import { BackgroundProvider } from "@/contexts/BackgroundContext";
import { FigurinhasProvider } from "@/contexts/FigurinhasContext";
import { MediaProvider } from "@/contexts/MediaPermissionContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { OrientationProvider } from "@/contexts/OrientationContext";
import Colors from "@/utils/colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function AppWithContexts() {
  return (
    <>
      <AppHolder>
        <Controls />

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.transparent,
            },
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AppHolder>

      <StatusBar style="dark" hidden />
      <ModalView />
    </>
  );
}

export default function RootLayout() {
  return (
    <MediaProvider>
      <OrientationProvider>
        <FigurinhasProvider>
          <BackgroundProvider>
            <ModalProvider>
              <AppWithContexts />
            </ModalProvider>
          </BackgroundProvider>
        </FigurinhasProvider>
      </OrientationProvider>
    </MediaProvider>
  );
}
