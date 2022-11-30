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
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import { Modalize } from "react-native-modalize";

const ModalRow = ({ title, textColor, onPress }) => {
  const { fontScale } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
        paddingHorizontal: 24,
      }}
    >
      <Text
        style={{
          fontSize: 16 / fontScale,
          fontWeight: sizes.semiBold,
          color: textColor,
          paddingLeft: 15,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const OrderDetail = ({ route }) => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();

  const modalRef = useRef();
  const mainModalRef = useRef();
  const [isFocus, setisFocus] = useState(false);

  const [price, setPrice] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
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
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: sizes.semiBold,
            fontSize: 18 / fontScale,
            color: colors.textPrimary,
          }}
        >
          {route.params.title}
        </Text>
        <TouchableOpacity onPress={() => mainModalRef.current.open()}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={28}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <List.Section titleStyle={{ textAlign: "center" }} title="Today">
        <List.Accordion
          style={{
            backgroundColor: colors.grey,
          }}
          title="Shop 1"
          titleStyle={{
            fontSize: 16 / fontScale,
            color: colors.textPrimary,
            fontWeight: sizes.bold,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: colors.grey,
              borderRadius: 12,
              padding: 15,
              margin: 14,
            }}
          >
            <Text
              style={{
                color: colors.textPrimary,
                fontWeight: sizes.bold,
                fontSize: 16 / fontScale,
                paddingBottom: 20,
              }}
            >
              Housekeeping & cleaning service
            </Text>
            <CustomButton
              title={"Add Amount"}
              onPress={() => modalRef?.current.open()}
            />
          </View>
        </List.Accordion>
      </List.Section>

      <Modalize
        ref={modalRef}
        snapPoint={175}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        HeaderComponent={
          <>
            <Text></Text>
          </>
        }
      >
        <View style={{ alignItems: "center", flex: 1, padding: 15 }}>
          <View
            style={{
              borderWidth: isFocus ? 2 : 1,
              width: "100%",
              height: 50,
              borderRadius: 12,
              borderColor: isFocus ? colors.primary : colors.grey,
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Add Amount"
              value={price}
              onChangeText={(text) => setPrice(text)}
              onFocus={() => setisFocus(true)}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ paddingTop: 10, width: "100%" }}>
            <CustomButton
              title={"Add Amount"}
              onPress={() => modalRef?.current.close()}
            />
          </View>
        </View>
      </Modalize>
      <Modalize
        ref={mainModalRef}
        snapPoint={250}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        HeaderComponent={
          <>
            <Text></Text>
          </>
        }
      >
        <View style={{ padding: 0 }}>
          <ModalRow
            title={"Check User Information"}
            textColor={colors.textPrimary}
            onPress={() => mainModalRef?.current.close()}
          />
          <ModalRow
            title={"Mark as Complete Order"}
            textColor={colors.textPrimary}
          />
          <ModalRow title={"Create Shop"} textColor={colors.textPrimary} />
          <ModalRow title={"Cancel Shop"} textColor={"red"} />
        </View>
      </Modalize>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({});
