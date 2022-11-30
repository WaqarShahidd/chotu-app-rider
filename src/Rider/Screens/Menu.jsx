import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  SimpleLineIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors, sizes } from "../components/theme";
import Links from "../components/Links";

const MenuItem = ({ iconName, onPress, title, Icon }) => {
  const { fontScale } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        height: 60,
      }}
    >
      <Icon name={iconName} size={24} color={"rgba(19, 26, 46, 0.7)"} />
      <Text
        style={{
          fontSize: 16 / fontScale,
          fontWeight: sizes.semiBold,
          color: colors.textPrimary,
          paddingLeft: 14,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const Menu = () => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>

          <Text style={[styles.title, { fontSize: 16 / fontScale }]}>Menu</Text>
          <TouchableOpacity style={{ height: 30, width: 30 }}>
            {/* <MaterialIcons name="search" size={30} color="black" /> */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
        <View
          style={{
            //   width: "100%",
            height: "10%",
            margin: "6%",
            marginTop: "15%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                marginRight: 12,
              }}
            >
              <Image
                source={require("../../../assets/icon.png")}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 16,
                }}
              />
            </View>
            <View style={{ padding: 9 }}>
              <Text
                style={{
                  fontWeight: sizes.bold,
                  fontSize: 16 / fontScale,
                  marginBottom: 2,
                }}
              >
                Waqar
              </Text>
              <Text
                style={[
                  styles.subTitle,
                  {
                    fontStyle: "normal",
                    color: "rgba(19, 26, 46, 0.5)",
                    // maxWidth: "85%",
                  },
                ]}
              >
                @waqar7
              </Text>
              <Links
                text={"Edit Profile"}
                marginTop={0}
                onPress={() => {
                  console.log("first");
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "10%",
            margin: 25,
            justifyContent: "space-between",
          }}
        >
          <MenuItem
            title="Home"
            iconName="home-outline"
            onPress={() => navigation.navigate("Orders")}
            Icon={MaterialCommunityIcons}
          />
          <MenuItem
            title="My Shifts"
            iconName="weather-sunny"
            Icon={MaterialCommunityIcons}
            onPress={() => navigation.navigate("Shifts")}
          />
          <MenuItem
            title="My Portals"
            iconName="layout"
            Icon={Feather}
            onPress={() => navigation.navigate("Orders")}
          />
          <MenuItem
            title="Notifications"
            iconName="notifications-none"
            Icon={MaterialIcons}
            onPress={() => navigation.navigate("Orders")}
          />
          <MenuItem
            title="Settings"
            iconName="settings"
            Icon={SimpleLineIcons}
            onPress={() => navigation.navigate("Orders")}
          />
          <MenuItem
            title="Reference a friend"
            iconName="people-outline"
            Icon={Ionicons}
            onPress={() => navigation.navigate("Orders")}
          />
          <MenuItem
            title="Change Password"
            iconName="lastpass"
            Icon={MaterialCommunityIcons}
            onPress={() => navigation.navigate("Orders")}
          />
          <MenuItem
            title="Delete My Account"
            iconName="trash-o"
            Icon={FontAwesome}
            onPress={() => navigation.navigate("Orders")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "white",
    height: "12.5%",
    alignItems: "center",
    borderBottomColor: colors.grey2,
    borderBottomWidth: 1,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  headerTitle: {
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: sizes.bold,
    color: colors.textPrimary,
  },

  subTitle: {
    fontWeight: "400",
    color: colors.textSecondary,
    marginBottom: 12.5,
    fontStyle: "italic",
  },
  menuButtonContainer: {
    borderColor: colors.grey2,
    borderWidth: 1,
    width: "48%",
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 14,
    marginRight: 2,
    marginBottom: 12,
    paddingHorizontal: 6,
  },
  menuItem: {
    backgroundColor: "#F3F3F3",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: "400",
    color: colors.textPrimary,
  },
});
