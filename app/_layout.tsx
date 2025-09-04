import AppHolder from "@/components/AppHolder";
import Controls from "@/components/Controls";
import Figurinhas from "@/components/Figurinhas";
import ModalView from "@/components/ModalView";
import { BackgroundProvider } from "@/contexts/BackgroundContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { StatusBar } from "expo-status-bar";

function AppWithContexts() {
  return (
    <>
      <AppHolder>
        <StatusBar style="dark" hidden />

        <Controls />

        <Figurinhas />
      </AppHolder>

      <ModalView />
    </>
  );
}

export default function RootLayout() {
  return (
    <BackgroundProvider>
      <ModalProvider>
        <AppWithContexts />
      </ModalProvider>
    </BackgroundProvider>
  );
}
