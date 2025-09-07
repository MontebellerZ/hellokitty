import Colors from "@/utils/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text } from "@react-navigation/elements";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ICON_SIZE = 24;

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const icon = options.tabBarIcon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const color = isFocused ? Colors.rosa : Colors.texto;

          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.navBtn}
            >
              {icon && icon({ color, size: ICON_SIZE, focused: false })}

              <Text style={{ color: color }}>{label as string}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
