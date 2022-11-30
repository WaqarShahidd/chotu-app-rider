import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Status from "../Rider/Screens/Status";
import Delivery from "../Rider/Screens/Delivery";
import History from "../Rider/Screens/History";
import Wallet from "../Rider/Screens/Wallet";
import { colors, sizes } from "../Rider/components/theme";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import Shops from "../Fleet Manager/Shops";
import Services from "../Fleet Manager/Services";
import Account from "../Fleet Manager/Account";

const BottomTabs = createBottomTabNavigator();

const IconComponent = ({ focused, iconName, title }) => {
  const { fontScale } = useWindowDimensions();
  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          height: 50,
          width: 50,
        }}
      >
        <MaterialIcons
          name={iconName}
          size={26}
          color={focused ? colors.primary : colors.textPrimary}
        />
      </View>
      <Text
        style={{
          fontWeight: focused ? "900" : "500",
          fontSize: 14 / fontScale,
          color: focused ? colors.primary : colors.textPrimary,
        }}
      >
        {title}
      </Text>
    </>
  );
};

const FleetManagerNavigator = () => {
  const { fontScale } = useWindowDimensions();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: sizes.height * 0.1,
          width: "100%",
          backgroundColor: "white",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 10,
          borderTopWidth: 1,
          borderTopColor: colors.grey,
          elevation: 7,
        },
      }}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <IconComponent
              focused={focused}
              iconName="store"
              title={"Grocery"}
            />
          ),
        }}
        name="Status"
        component={Shops}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <IconComponent
              focused={focused}
              iconName={"home-repair-service"}
              title={"Services"}
            />
          ),
        }}
        name="Delivery"
        component={Services}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <IconComponent
              focused={focused}
              iconName={"person"}
              title={"Account"}
            />
          ),
        }}
        name="History"
        component={Account}
      />
    </BottomTabs.Navigator>
  );
};

export default FleetManagerNavigator;

const styles = StyleSheet.create({});
