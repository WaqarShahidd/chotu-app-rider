import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderComp from "../Rider/components/HeaderComp";
import { colors, sizes } from "../Rider/components/theme";
import { shopsData } from "../Data/data";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const groupButtons = [
  { id: 0, title: "Active" },
  { id: 1, title: "Closed" },
];

const Shops = () => {
  const [toggle, settoggle] = useState(0);
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComp title={"Shops"} leftIconName="menu" rightIconName={""} />

      <View style={{ flex: 1, marginTop: "5%" }}>
        <View style={styles.groupButton}>
          {groupButtons.map((_, index) => {
            return (
              <TouchableOpacity
                onPress={() => settoggle(index)}
                style={[
                  styles.toggleButton,
                  { backgroundColor: toggle === index ? "#fff" : "#F2F2F2" },
                ]}
                key={index}
              >
                <Text
                  style={[styles.groupButtonText, { fontSize: 14 / fontScale }]}
                >
                  {_.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView
          style={{ marginHorizontal: 14 }}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {toggle === 0 ? (
            <>
              {shopsData.map((_, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      height: 70,
                      marginTop: 0,
                      borderTopWidth: index === 0 ? 0 : 1,
                      borderBottomWidth: 1,
                      alignItems: "center",
                      borderBottomColor: colors.borderColor,
                      borderTopColor: colors.borderColor,
                    }}
                    key={index}
                  >
                    <View style={{ paddingRight: 10 }}>
                      {/* <Image  /> */}
                      <View
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 14,
                          backgroundColor: "grey",
                        }}
                      />
                    </View>
                    <View style={{ maxWidth: "80%" }}>
                      <Text
                        style={{
                          fontWeight: sizes.semiBold,
                          fontSize: 16 / fontScale,
                          color: colors.textPrimary,
                        }}
                      >
                        {_.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          paddingTop: 5,
                        }}
                      >
                        <MaterialIcons
                          name="place"
                          color={"rgba(19, 26, 46, 0.4)"}
                          size={16}
                        />
                        <Text
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={{
                            fontWeight: "400",
                            color: "rgba(19, 26, 46, 0.4)",
                            fontSize: 14 / fontScale,
                            paddingLeft: 5,
                          }}
                        >
                          {_.address}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </>
          ) : (
            <>
              {shopsData.map((_, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      height: 70,
                      marginTop: 0,
                      borderTopWidth: index === 0 ? 0 : 1,
                      borderBottomWidth: 1,
                      alignItems: "center",
                      borderBottomColor: colors.borderColor,
                      borderTopColor: colors.borderColor,
                    }}
                    key={index}
                  >
                    <View style={{ paddingRight: 10 }}>
                      {/* <Image  /> */}
                      <View
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 14,
                          backgroundColor: "grey",
                        }}
                      />
                    </View>
                    <View style={{ maxWidth: "80%" }}>
                      <Text
                        style={{
                          fontWeight: sizes.semiBold,
                          fontSize: 16 / fontScale,
                          color: colors.textPrimary,
                        }}
                      >
                        {_.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          paddingTop: 5,
                        }}
                      >
                        <MaterialIcons
                          name="place"
                          color={"rgba(19, 26, 46, 0.4)"}
                          size={16}
                        />
                        <Text
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={{
                            fontWeight: "400",
                            color: "rgba(19, 26, 46, 0.4)",
                            fontSize: 14 / fontScale,
                            paddingLeft: 5,
                          }}
                        >
                          {_.address}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </>
          )}
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddShops");
          }}
          style={styles.createButton}
        >
          <MaterialIcons name="add" size={35} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shops;

const styles = StyleSheet.create({
  groupButton: {
    // width: "100%",
    height: "10%",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    marginHorizontal: 14,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggleButton: {
    flex: 1,
    height: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  groupButtonText: {
    fontWeight: sizes.semiBold,
  },
  createButton: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    backgroundColor: colors.primary,
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});
