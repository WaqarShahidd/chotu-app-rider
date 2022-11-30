import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { Modalize } from "react-native-modalize";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { sizes, colors } from "../components/theme";

const Rating = ({ rating }) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={{ flexDirection: "row" }}>
      {maxRating.map((item, key) => {
        return (
          <View key={item} style={{ marginBottom: 0 }}>
            <FontAwesome
              name={item <= rating ? "star" : "star-o"}
              size={18}
              color="#F1BE08"
            />
          </View>
        );
      })}
    </View>
  );
};

const MapModal = () => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Modalize
      alwaysOpen={400}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      panGestureEnabled={false}
      disableScrollIfPossible={true}
      HeaderComponent={
        <>
          <Text></Text>
        </>
      }
      withHandle={false}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 48,
            width: 48,
            borderWidth: 1.5,
            borderColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 360,
            marginBottom: 10,
          }}
        >
          <MaterialIcons
            name="electric-bike"
            color={colors.primary}
            size={22}
          />
        </View>
        <Text
          style={{
            fontWeight: sizes.bold,
            color: colors.textPrimary,
            fontSize: 20 / fontScale,
          }}
        >
          Start Today’s Shift
        </Text>
      </View>
      <View style={{ paddingHorizontal: 22, paddingVertical: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "rgba(19,26,46,0.6)",
            }}
          >
            Today’s date:
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              color: colors.textPrimary,
            }}
          >
            Aug 8, 2022 2:45 PM
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.borderColor,
            marginVertical: 15,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "rgba(19,26,46,0.6)",
            }}
          >
            Activity Hour
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              color: colors.textPrimary,
            }}
          >
            5h Shift
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.borderColor,
            marginVertical: 15,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "rgba(19,26,46,0.6)",
            }}
          >
            Working Zone Area
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              color: colors.textPrimary,
              maxWidth: "50%",
              textAlign: "right",
            }}
          >
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.borderColor,
            marginVertical: 15,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          margin: 20,
          marginTop: 0,
        }}
      >
        <CustomButton
          title="Let’s Start"
          onPress={() => {
            navigation.navigate("");
          }}
        />
      </View>
    </Modalize>
  );
};

export default MapModal;

const styles = StyleSheet.create({});
