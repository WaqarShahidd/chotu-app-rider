import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, sizes } from "../components/theme";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Modalize } from "react-native-modalize";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "react-native-paper";
import HeaderComp from "../components/HeaderComp";

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

const RiderMarker = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../../assets/map_marker.png")}
        style={{ height: 30, width: 30 }}
      />
    </View>
  );
};

const Status = () => {
  const { fontScale } = useWindowDimensions();

  const navigation = useNavigation();

  const modalRef = useRef(null);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if (!isSwitchOn) {
      modalRef.current?.open();
    } else if (isSwitchOn) {
      modalRef.current?.close();
    }
  };

  const [location, setLocation] = useState({
    latitude: 24.926295,
    latitudeDelta: 0.04166,
    longitude: 67.130499,
    longitudeDelta: 0.0456,
  });
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}

      <View
        style={{
          position: "absolute",
          top: 0,
          zIndex: 999,
          paddingTop: "10%",
          backgroundColor: colors.white,
          height: "15%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <MaterialIcons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: sizes.semiBold,
            fontSize: 18 / fontScale,
            color: colors.textPrimary,
          }}
        >
          Rider Name
        </Text>
        <MaterialIcons name="search" size={28} color="black" />
      </View>

      <View
        style={{
          position: "absolute",
          top: "15%",
          zIndex: 999,
          margin: 20,
          width: "90%",
          height: 90,
        }}
      >
        {/* <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 18,
            height: 50,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1 }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 18,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
            }}
            onPress={() => modalRef.current?.open()}
          >
            <Text style={{ fontSize: 16, color: colors.white }}>Start</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      {/* Maps */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={location}
        region={location}
        showsUserLocation={true}
      >
        <Marker
          coordinate={location}
          // image={require("../../../assets/marker.jpg")}
        >
          <RiderMarker />
        </Marker>
      </MapView>

      <View style={{ height: 70, width: "100%" }}>
        <Text>fsf</Text>
      </View>

      <View
        style={{
          height: 75,
          width: "100%",
          alignItems: "center",
          paddingHorizontal: 15,
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1 }}
          />
          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={{
                fontWeight: sizes.semiBold,
                fontSize: 14,
                color: colors.textPrimary,
              }}
            >
              William Marshal
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 12,
                color: "rgba(19,26,46,0.6)",
              }}
            >
              Current Status
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              // justifyContent: "center",
              alignItems: "center",
              height: 25,
              width: 80,
              borderRadius: 4,
              borderColor: isSwitchOn ? colors.primary : colors.borderColor,
              flexDirection: "row",
              marginRight: 5,
            }}
          >
            <Entypo
              name="dot-single"
              size={24}
              color={isSwitchOn ? colors.primary : colors.borderColor}
            />
            <Text
              style={{
                fontWeight: sizes.semiBold,
                color: isSwitchOn ? colors.primary : colors.borderColor,
              }}
            >
              {isSwitchOn ? "Online" : "Offline"}
            </Text>
          </View>
          <Switch
            color={colors.primary}
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
          />
        </View>
      </View>

      <Modalize
        ref={modalRef}
        snapPoint={400}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
              modalRef.current?.close();
            }}
          />
        </View>
      </Modalize>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
