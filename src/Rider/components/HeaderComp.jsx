import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { colors, sizes } from "./theme";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderComp = ({
  rightIconName,
  leftIconOnPress,
  title,
  leftIconName,
  rightIconOnPress,
}) => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <MaterialIcons
          name={leftIconName}
          size={28}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.headerTitle,
          {
            fontSize: 18 / fontScale,
          },
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={rightIconOnPress}>
        <MaterialCommunityIcons
          name={rightIconName}
          size={30}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  header: {
    paddingTop: "10%",
    backgroundColor: colors.white,
    height: "15%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomColor: colors.grey2,
    borderBottomWidth: 1,
    elevation: 5,
  },
  headerTitle: {
    fontWeight: sizes.semiBold,
    color: colors.textPrimary,
  },
});
