import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, sizes } from "../components/theme";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";

const History = () => {
  const { fontScale } = useWindowDimensions();

  const [searchFocus, setsearchFocus] = useState(false);
  const [searchInput, setsearchInput] = useState("");

  const MainModal = useRef(null);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerTitle,
            {
              fontSize: 18 / fontScale,
            },
          ]}
        >
          History
        </Text>
        <TouchableOpacity onPress={() => MainModal.current?.open()}>
          <MaterialCommunityIcons
            name="dots-vertical"
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

      <View style={{ marginHorizontal: 10, marginTop: 20 }}>
        <Text
          style={[
            styles.day,
            {
              fontSize: 12 / fontScale,
            },
          ]}
        >
          Yesterday
        </Text>
        <View style={styles.itemContainer}>
          <View>
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
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Modalize
        ref={MainModal}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={150}
        HeaderComponent={
          <>
            <Text></Text>
          </>
        }
        withHandle={false}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalItem}>
            <View style={styles.icon}>
              <MaterialIcons
                name="attach-money"
                size={24}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.modalText,
                {
                  fontSize: 14 / fontScale,
                },
              ]}
            >
              $7k Total earnings
            </Text>
          </View>
          <View style={styles.modalItem}>
            <View style={styles.icon}>
              <MaterialIcons
                name="electric-bike"
                size={24}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.modalText,
                {
                  fontSize: 14 / fontScale,
                },
              ]}
            >
              70 Rides
            </Text>
          </View>
        </View>
      </Modalize>
    </View>
  );
};

export default History;

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
    //   justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,

    margin: 15,
  },
  textinput: {
    paddingLeft: 8,
    width: "100%",
  },
  day: {
    textAlign: "center",
    color: "rgba(19, 26, 46, 0.5)",
    fontWeight: "400",
  },
  itemContainer: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  modalContainer: {
    marginHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalItem: {
    borderRadius: 12,
    width: "45%",
    height: 100,
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  icon: {
    height: 40,
    width: 40,
    borderRadius: 360,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },

  modalText: {
    fontWeight: sizes.semiBold,
    color: colors.textPrimary,
  },
});
