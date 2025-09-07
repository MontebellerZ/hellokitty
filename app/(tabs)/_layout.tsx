import TabBar from "@/components/TabBar";
import Colors from "@/utils/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          freezeOnBlur: true,
          sceneStyle: {
            backgroundColor: Colors.transparent,
          },
          animation: "shift",
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen
          name="album"
          options={{
            title: "Álbum",
            tabBarIcon: (props) => <AntDesign name="book" {...props} />,
          }}
        />
        <Tabs.Screen
          name="repetidas"
          options={{
            title: "Repetidas",
            tabBarIcon: (props) => (
              <MaterialCommunityIcons name="bookmark-multiple-outline" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="fotos"
          options={{
            title: "Fotos",
            tabBarIcon: (props) => <Feather name="camera" {...props} />,
          }}
        />
      </Tabs>

      {/* <Controls />

        <Figurinhas /> */}
    </>
  );
}
