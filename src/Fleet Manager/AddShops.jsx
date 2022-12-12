// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   useWindowDimensions,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import HeaderComp from "../Rider/components/HeaderComp";
// import { colors, sizes } from "../Rider/components/theme";
// import { TextInput } from "react-native-paper";
// import {
//   MaterialCommunityIcons,
//   MaterialIcons,
//   FontAwesome5,
//   FontAwesome,
//   Ionicons,
//   Feather,
//   Entypo,
// } from "@expo/vector-icons";
// import { shopCategoryData, Weeks } from "../Data/data";
// import * as ImagePicker from "expo-image-picker";
// import { TimePicker, ValueMap } from "react-native-simple-time-picker";
// import { WeekdaysInput } from "react-weekdays-input";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import moment from "moment";
// import Modal from "react-native-modal";
// import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import SelectMultipleButton from "react-native-selectmultiple-button/libraries/SelectMultipleButton";
// import { useNavigation } from "@react-navigation/native";

// const Inp = ({ labelName, value, setValue }) => {
//   return (
//     <View style={{ paddingVertical: 10 }}>
//       <TextInput
//         label={labelName}
//         placeholder={labelName}
//         value={value}
//         onChangeText={(text) => setValue(text)}
//         style={{ height: 50 }}
//         mode="outlined"
//         activeOutlineColor={colors.primary}
//         keyboardType=""
//         outlineStyle={{ borderWidth: 1 }}
//         outlineColor={colors.textPrimary}
//         dense={true}
//         placeholderTextColor={"grey"}
//       />
//     </View>
//   );
// };

// const AddShops = () => {
//   const { fontScale } = useWindowDimensions();
//   const navigation = useNavigation();

//   const [shopkeeperName, setshopkeeperName] = useState("");
//   const [shopName, setshopName] = useState("");
//   const [shopEmail, setshopEmail] = useState("");
//   const [shopMobile, setshopMobile] = useState("");
//   const [shopMobile2, setshopMobile2] = useState("");
//   const [furtherShopkeeperName, setfurtherShopkeeperName] = useState("");
//   const [shopSince, setshopSince] = useState("");
//   const [desc, setdesc] = useState("");

//   const [shopCategory, setshopCategory] = useState("");
//   const [shopSelect, setshopSelect] = useState(0);

//   const [closeDay, setcloseDay] = useState("");
//   const [closeDaySelect, setcloseDaySelect] = useState(false);

//   const onSubmit = () => {};

//   const [weekDays, setweekDays] = useState([
//     { key: 1, text: "Sat", isChecked: false },
//     { key: 2, text: "Sun", isChecked: false },
//     { key: 3, text: "Mon", isChecked: false },
//     { key: 4, text: "Tue", isChecked: false },
//     { key: 5, text: "Wed", isChecked: false },
//     { key: 6, text: "Thu", isChecked: false },
//     { key: 7, text: "Fri", isChecked: false },
//   ]);
//   const handlePress = (item, id) => {
//     setshopCategory(item.text);
//   };

//   const handleCloseDaySelect = (item, id) => {
//     setcloseDay(item.text);
//     setcloseDaySelect(id);
//   };

//   const handle = (id) => {
//     if (id === weekDays.key) {
//       setweekDays({ ...product, isChecked: !product.isChecked });
//     }
//   };

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     console.log(result);

//     // let imageUri = result.uri;

//     // const newImageUri = "file:/" + imageUri.split("file:/").join("");

//     // if (!result.cancelled) {
//     //   data.append("image", {
//     //     uri: result.uri,
//     //     type: "image/jpeg",
//     //     name: newImageUri.split("/").pop(),
//     //   });

//     // }
//   };

//   const [value, setValue] = useState({
//     hours: 1,
//     minutes: 0,
//     seconds: 0,
//   });
//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };
//   const [daysAsString, setDaysAsString] = useState("0010010"); //Wednesday and saturday active
//   const [daysAsObject, setDaysAsObject] = useState([0, 0, 1, 0, 0, 1, 0]); //Wednesday and saturday active

//   const [openingTimeState, setopeningTimeState] = useState(false);
//   const [closingTimeState, setclosingTimeState] = useState(false);
//   const [openingTime, setopeningTime] = useState("");
//   const [closingTime, setclosingTime] = useState("");

//   const showOpeningTimePicker = () => {
//     setopeningTimeState(!openingTimeState);
//   };
//   const showClosingTimePicker = () => {
//     setclosingTimeState(!closingTimeState);
//   };

//   const hideOpenTimePicker = () => {
//     setopeningTimeState(false);
//   };
//   const hideCloseTimePicker = () => {
//     setclosingTimeState(false);
//   };

//   const handleOpenTime = (time) => {
//     setopeningTime(time);
//   };
//   const handleCloseTime = (time) => {
//     setclosingTime(time);
//   };

//   const [modalState, setmodalState] = useState(false);

//   const isModalVisible = () => {
//     setmodalState(!modalState);
//   };

//   const [location, setLocation] = useState({
//     latitude: 24.926295,
//     latitudeDelta: 0.04166,
//     longitude: 67.130499,
//     longitudeDelta: 0.0456,
//   });

//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <MaterialIcons
//             name={"arrow-back"}
//             size={28}
//             color={colors.textPrimary}
//           />
//         </TouchableOpacity>
//         <Text
//           style={[
//             styles.headerTitle,
//             {
//               fontSize: 18 / fontScale,
//             },
//           ]}
//         >
//           Add Shops
//         </Text>
//         <TouchableOpacity style={{ height: 30, width: 30 }}></TouchableOpacity>
//       </View>
//       <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
//         <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
//           <Inp
//             labelName={"Shopkeeper Name"}
//             value={shopkeeperName}
//             setValue={setshopkeeperName}
//           />
//           <Inp
//             labelName={"Shop Name"}
//             value={shopName}
//             setValue={setshopName}
//           />
//           <Inp
//             labelName={"Mobile"}
//             value={shopMobile}
//             setValue={setshopMobile}
//           />
//           <Inp
//             labelName={"Second Mobile (Optional)"}
//             value={shopMobile2}
//             setValue={setshopMobile2}
//           />
//           <Inp labelName={"Email"} value={shopEmail} setValue={setshopEmail} />
//           <Inp
//             labelName={"Further Shopkeeper Name (Optional)"}
//             value={furtherShopkeeperName}
//             setValue={setfurtherShopkeeperName}
//           />
//           <Inp
//             labelName={"Shop Category"}
//             value={shopCategory}
//             setValue={setshopCategory}
//           />
//           <View style={{ paddingVertical: 10 }}>
//             <TextInput
//               label={"Shop Since"}
//               placeholder={"Shop Since"}
//               value={shopSince}
//               defaultValue={"Year: "}
//               onChangeText={(text) => setshopSince(text)}
//               style={{ height: 50 }}
//               mode="outlined"
//               activeOutlineColor={colors.primary}
//               keyboardType="numeric"
//               outlineStyle={{ borderWidth: 1 }}
//               outlineColor={colors.textPrimary}
//               dense={true}
//               maxLength={4}
//             />
//           </View>
//           <View style={{ paddingVertical: 10 }}>
//             <TextInput
//               label={"Description"}
//               placeholder={"Description"}
//               value={desc}
//               onChangeText={(text) => setdesc(text)}
//               style={{
//                 height: 80,
//               }}
//               mode="outlined"
//               activeOutlineColor={colors.primary}
//               keyboardType="default"
//               outlineStyle={{ borderWidth: 1 }}
//               outlineColor={colors.textPrimary}
//               dense={true}
//               multiline={true}
//             />
//           </View>
//           <TouchableOpacity onPress={isModalVisible}>
//             <Text
//               style={{
//                 marginVertical: 5,
//                 fontSize: 18 / fontScale,
//                 fontWeight: sizes.bold,
//                 color: colors.textPrimary,
//                 marginTop: 10,
//               }}
//             >
//               Select Pin Location
//             </Text>
//           </TouchableOpacity>
//           <Modal
//             testID={"modal"}
//             isVisible={modalState}
//             backdropColor="#B4B3DB"
//             backdropOpacity={0.8}
//             animationInTiming={600}
//             animationOutTiming={600}
//             backdropTransitionInTiming={800}
//             backdropTransitionOutTiming={800}
//             onBackdropPress={() => setmodalState(false)}
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <MapView
//               provider={PROVIDER_GOOGLE}
//               style={StyleSheet.absoluteFillObject}
//               initialRegion={location}
//               region={location}
//               showsUserLocation={true}
//             ></MapView>
//           </Modal>
//           {/* <Text
//             style={{
//               marginVertical: 5,
//               fontSize: 18 / fontScale,
//               fontWeight: sizes.bold,
//               color: colors.textPrimary,
//               marginTop: 10,
//             }}
//           >
//             Shop Category
//           </Text> */}
//           {/* <View
//             style={{
//               flexDirection: "row",
//               flexWrap: "wrap",
//               paddingVertical: 0,
//               alignItems: "center",
//             }}
//           >
//             {shopCategoryData.map((item, i) => {
//               return (
//                 <TouchableOpacity
//                   key={item.key}
//                   onPress={() => handlePress(item, i + 1)}
//                   style={{
//                     width: "48%",
//                     height: 50,
//                     marginVertical: 5,
//                     marginRight: i % 2 === 0 ? 5 : 0,
//                     marginLeft: i % 2 !== 0 ? 5 : 0,
//                     borderRadius: 10,
//                     borderWidth: 1,
//                     borderColor:
//                       item.key === shopSelect
//                         ? colors.primary
//                         : colors.borderGrey,
//                     backgroundColor:
//                       item.key === shopSelect
//                         ? "rgba(25, 145, 113, 0.02)"
//                         : colors.white,
//                     flexDirection: "row",
//                     alignItems: "center",
//                     paddingLeft: 12.5,
//                   }}
//                 >
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <Ionicons
//                       name={
//                         item.key === shopSelect
//                           ? "radio-button-on"
//                           : "radio-button-off"
//                       }
//                       size={15}
//                       color={item.key === shopSelect ? colors.primary : "#000"}
//                     />
//                   </View>
//                   <Text
//                     style={{
//                       maxWidth: "77.5%",
//                       color:
//                         item.key === shopSelect
//                           ? colors.textPrimary
//                           : colors.textSecondary,
//                       fontSize: 16 / fontScale,
//                       fontWeight: sizes.semiBold,
//                       paddingLeft: 8,
//                     }}
//                   >
//                     {item.text}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View> */}

//           <Text
//             style={{
//               marginVertical: 5,
//               fontSize: 18 / fontScale,
//               fontWeight: sizes.bold,
//               color: colors.textPrimary,
//               marginTop: 10,
//             }}
//           >
//             Shopkeeper Image
//           </Text>
//           <TouchableOpacity
//             onPress={pickImage}
//             style={{
//               width: "100%",
//               height: 100,
//               alignItems: "center",
//               justifyContent: "center",
//               borderWidth: 0.5,
//               borderColor: colors.borderGrey,
//               borderRadius: 12,
//               flexDirection: "row",
//               //   justifyContent: "space-between",
//             }}
//           >
//             <Entypo
//               name="upload-to-cloud"
//               size={24}
//               color={colors.primary}
//               style={{ paddingRight: 20 }}
//             />
//             <Text
//               style={{
//                 color: colors.textPrimary,
//                 fontSize: 16,
//                 fontWeight: sizes.semiBold,
//               }}
//             >
//               Upload Shopkeeper photo
//               <Text
//                 style={{
//                   color: colors.textSecondary,
//                   fontSize: 12,
//                   fontWeight: "400",
//                 }}
//               >
//                 {"\n"}e.g. PNG, JPE, JPEG are allowed
//               </Text>{" "}
//             </Text>
//           </TouchableOpacity>
//           <Text
//             style={{
//               marginVertical: 5,
//               fontSize: 18 / fontScale,
//               fontWeight: sizes.bold,
//               color: colors.textPrimary,
//               marginTop: 10,
//             }}
//           >
//             Shop Image
//           </Text>
//           <TouchableOpacity
//             onPress={pickImage}
//             style={{
//               width: "100%",
//               height: 100,
//               alignItems: "center",
//               justifyContent: "center",
//               borderWidth: 0.5,
//               borderColor: colors.borderGrey,
//               borderRadius: 12,
//               flexDirection: "row",
//               //   justifyContent: "space-between",
//             }}
//           >
//             <Entypo
//               name="upload-to-cloud"
//               size={24}
//               color={colors.primary}
//               style={{ paddingRight: 20 }}
//             />
//             <Text
//               style={{
//                 color: colors.textPrimary,
//                 fontSize: 16,
//                 fontWeight: sizes.semiBold,
//               }}
//             >
//               Upload Shop photo
//               <Text
//                 style={{
//                   color: colors.textSecondary,
//                   fontSize: 12,
//                   fontWeight: "400",
//                 }}
//               >
//                 {"\n"}e.g. PNG, JPE, JPEG are allowed
//               </Text>{" "}
//             </Text>
//           </TouchableOpacity>

//           <Text
//             style={{
//               marginVertical: 5,
//               fontSize: 18 / fontScale,
//               fontWeight: sizes.bold,
//               color: colors.textPrimary,
//               marginTop: 10,
//             }}
//           >
//             Shop Time
//           </Text>
//           {/* <TimePicker
//             value={value}
//             onChange={handleChange}
//             // itemStyle={styles.itemStyle}
//             pickerShows={["hours", "minutes", "seconds"]}
//             isAmpm
//           /> */}
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-between" }}
//           >
//             <TouchableOpacity
//               style={styles.timeInputStyles}
//               onPress={showOpeningTimePicker}
//             >
//               <Text>
//                 {openingTime === ""
//                   ? "Opening Time"
//                   : `${moment(openingTime).format("LT")}`}
//               </Text>
//             </TouchableOpacity>
//             <View style={{ justifyContent: "center", alignItems: "center" }}>
//               <Text style={{ fontSize: 30 }}>-</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.timeInputStyles}
//               onPress={showClosingTimePicker}
//             >
//               <Text>
//                 {closingTime === ""
//                   ? "Closing Time"
//                   : `${moment(closingTime).format("LT")}`}
//               </Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={openingTimeState}
//               mode="time"
//               onConfirm={handleOpenTime}
//               onCancel={hideOpenTimePicker}
//             />
//             <DateTimePickerModal
//               isVisible={closingTimeState}
//               mode="time"
//               onConfirm={handleCloseTime}
//               onCancel={hideCloseTimePicker}
//             />
//           </View>

//           <Text
//             style={{
//               marginVertical: 5,
//               fontSize: 18 / fontScale,
//               fontWeight: sizes.bold,
//               color: colors.textPrimary,
//               marginTop: 10,
//             }}
//           >
//             Closed Days
//           </Text>

//           {/* <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-around",
//               paddingVertical: 0,
//               alignItems: "center",
//             }}
//           >
//             {weekDays.map((item, i) => {
//               return (
//                 <View
//                   key={item.key}
//                   style={{
//                     height: 60,
//                     width: 50,
//                     flexDirection: "column",
//                     justifyContent: "space-evenly",
//                     // alignItems: "center",
//                     paddingTop: 10,
//                   }}
//                 >
//                   <View style={{ paddingBottom: 5 }}>
//                     <Text style={{ textAlign: "justify" }}>{item.text}</Text>
//                   </View>
//                   <TouchableOpacity
//                     onPress={() => {
//                       item.isChecked;
//                     }}
//                     style={{
//                       height: 30,
//                       width: 30,
//                       borderRadius: 15,
//                       backgroundColor: colors.borderColor,
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <MaterialIcons
//                       name={
//                         item.isChecked ? "check" : "check-box-outline-blank"
//                       }
//                       size={20}
//                       color={item.isChecked ? colors.primary : "transparent"}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               );
//             })}
//           </View> */}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default AddShops;

// const styles = StyleSheet.create({
//   textInputStyles: {
//     width: "100%",
//     height: 50,
//     backgroundColor: colors.white,
//     borderRadius: 12,
//     borderWidth: 0,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 8,
//     borderColor: colors.borderGrey,
//     borderWidth: 1,
//   },
//   timeInputStyles: {
//     width: "45%",
//     height: 50,
//     backgroundColor: colors.white,
//     borderRadius: 12,
//     borderWidth: 0,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 12,
//     borderColor: colors.borderGrey,
//     borderWidth: 1,
//   },
//   itemStyle: {
//     margin: 24,
//   },
//   header: {
//     paddingTop: "10%",
//     backgroundColor: colors.white,
//     height: "15%",
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     borderBottomColor: colors.grey2,
//     borderBottomWidth: 1,
//     elevation: 5,
//   },
//   headerTitle: {
//     fontWeight: sizes.semiBold,
//     color: colors.textPrimary,
//   },
// });
