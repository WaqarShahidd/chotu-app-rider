import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderComp from "../components/HeaderComp";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { colors, sizes } from "../components/theme";
import { List } from "react-native-paper";
import CustomButton from "../components/CustomButton";
// import CalendarStrip from "react-native-calendar-strip";

const Shifts = () => {
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();

  const [searchFocus, setsearchFocus] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name={"arrow-back"}
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
          Shifts
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={"reload"}
            size={30}
            color={colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.searchContainer,
          {
            borderColor: searchFocus ? colors.primary : colors.grey,
            borderWidth: searchFocus ? 2 : 1,
          },
        ]}
      >
        <Ionicons
          name="search-outline"
          size={24}
          color={searchFocus ? colors.primary : colors.textSecondary}
        />
        <TextInput
          onFocus={() => setsearchFocus(true)}
          onBlur={() => setsearchFocus(false)}
          value={searchInput}
          placeholder="Search"
          onChangeText={(text) => {
            setsearchInput(text);
          }}
          style={styles.textinput}
        />
      </View>

      <List.Section titleStyle={{ textAlign: "center" }} title="Today">
        <List.Accordion
          style={{
            backgroundColor: colors.grey,
          }}
          title="My Shift 1"
          titleStyle={{
            fontSize: 16 / fontScale,
            color: colors.textPrimary,
            fontWeight: sizes.bold,
          }}
        >
          <View style={{ paddingHorizontal: 16.5, paddingVertical: 18.5 }}>
            <Text
              style={[
                styles.uppertext,
                {
                  fontSize: 16 / fontScale,
                },
              ]}
            >
              The Authentic Corner -{" "}
              <Text
                style={[
                  styles.priceText,
                  {
                    fontSize: 16 / fontScale,
                  },
                ]}
              >
                $300
              </Text>
            </Text>
            <Text
              style={[
                styles.time,
                {
                  fontSize: 14 / fontScale,
                },
              ]}
            >
              7 July 2022 3:40 PM
            </Text>
          </View>
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Shifts;

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
  searchContainer: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 15,
  },
  textinput: {
    paddingLeft: 8,
    width: "100%",
  },
  uppertext: {
    fontWeight: "500",
    color: colors.textPrimary,
  },
  priceText: {
    fontWeight: sizes.bold,
    color: colors.textPrimary,
  },
  time: {
    fontWeight: "400",
    color: "rgba(19, 26, 46, 0.5)",
  },
});
