import Colors from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    alignItems: "center",
    marginBottom: 6,
    marginTop: 8,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: Colors.branco,
    borderRadius: 10000,
    paddingVertical: 6,
    paddingHorizontal: 24,
    gap: 24,
    elevation: 2,
  },
  navBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
