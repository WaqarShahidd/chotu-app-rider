import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";
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
import { useNavigation } from "@react-navigation/native";

const groupButtons = [
  { id: 0, title: "Current" },
  { id: 1, title: "Pending" },
  { id: 2, title: "Completed" },
];

const Delivery = () => {
  const { fontScale } = useWindowDimensions();
  const [expanded, setExpanded] = React.useState(true);
  const [toggle, settoggle] = useState(0);
  const handlePress = () => setExpanded(!expanded);

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View
        style={{
          // position: "absolute",
          // top: 0,
          // zIndex: 999,
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
        <MaterialIcons name="menu" size={28} color="black" />
        <Text
          style={{
            fontWeight: sizes.semiBold,
            fontSize: 18 / fontScale,
            color: colors.textPrimary,
          }}
        >
          Deliveries
        </Text>
        <MaterialIcons name="search" size={28} color="black" />
      </View>

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
              <List.Section titleStyle={{ textAlign: "center" }} title="Today">
                <List.Accordion
                  style={{
                    backgroundColor: colors.grey,
                    borderTopLeftRadius: 11,
                    borderTopRightRadius: 11,
                  }}
                  title="Order #8383"
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
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      padding: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.textPrimary,
                        fontWeight: sizes.bold,
                        fontSize: 16 / fontScale,
                        paddingBottom: 10,
                      }}
                    >
                      Housekeeping & cleaning service
                    </Text>
                    <List.Item
                      titleStyle={{
                        color: "rgba(19, 26, 46, 0.6)",
                        fontSize: 14 / fontScale,
                        fontWeight: "500",
                      }}
                      title="Shop #1"
                      right={(props) => (
                        <Text
                          style={{
                            color: colors.textPrimary,
                            fontWeight: "500",
                            fontSize: 14 / fontScale,
                          }}
                        >
                          $242
                        </Text>
                      )}
                    />
                    <List.Item
                      titleStyle={{
                        color: "rgba(19, 26, 46, 0.6)",
                        fontSize: 14 / fontScale,
                        fontWeight: "500",
                      }}
                      title="Shop #2"
                      right={(props) => (
                        <Text
                          style={{
                            color: colors.textPrimary,
                            fontWeight: "500",
                            fontSize: 14 / fontScale,
                          }}
                        >
                          $222
                        </Text>
                      )}
                    />

                    <List.Item
                      titleStyle={{
                        color: "rgba(19, 26, 46, 0.6)",
                        fontSize: 14 / fontScale,
                        fontWeight: "500",
                      }}
                      title="Total"
                      right={(props) => (
                        <Text
                          style={{
                            color: colors.textPrimary,
                            fontWeight: "500",
                            fontSize: 14 / fontScale,
                          }}
                        >
                          $446
                        </Text>
                      )}
                    />
                    <List.Item
                      title="Address:"
                      titleStyle={{
                        color: colors.textPrimary,
                        fontSize: 14 / fontScale,
                        fontWeight: sizes.bold,
                        paddingBottom: 5,
                      }}
                      description="2972 Westheimer Rd. Santa Ana, Illinois 85486"
                      descriptionStyle={{
                        color: "rgba(19, 26, 46, 0.6)",
                        fontSize: 14 / fontScale,
                        fontWeight: "500",
                      }}
                      right={(props) => (
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("Chat", {
                              title: "Order #8383",
                            })
                          }
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: 60,
                            width: 60,
                            borderRadius: 14,
                            backgroundColor: "#E3FFE2",
                          }}
                        >
                          <MaterialIcons
                            name="directions"
                            color={colors.textPrimary}
                            size={30}
                          />
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                </List.Accordion>
              </List.Section>
            </>
          ) : toggle === 1 ? (
            <List.Section titleStyle={{ textAlign: "center" }} title="Today">
              <List.Accordion
                style={{
                  backgroundColor: colors.grey,
                  borderTopLeftRadius: 11,
                  borderTopRightRadius: 11,
                }}
                title="Order #8383"
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
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    padding: 15,
                  }}
                >
                  <Text
                    style={{
                      color: colors.textPrimary,
                      fontWeight: sizes.bold,
                      fontSize: 16 / fontScale,
                    }}
                  >
                    Housekeeping & cleaning service
                  </Text>
                </View>
              </List.Accordion>
            </List.Section>
          ) : (
            <List.Section titleStyle={{ textAlign: "center" }} title="Today">
              <List.Accordion
                style={{
                  backgroundColor: colors.grey,
                  borderTopLeftRadius: 11,
                  borderTopRightRadius: 11,
                }}
                title="Order #8383"
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
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    padding: 15,
                  }}
                >
                  <Text
                    style={{
                      color: colors.textPrimary,
                      fontWeight: sizes.bold,
                      fontSize: 16 / fontScale,
                    }}
                  >
                    Housekeeping & cleaning service
                  </Text>
                </View>
              </List.Accordion>
            </List.Section>
          )}
        </ScrollView>
      </View>

      {/* <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section> */}
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  groupButton: {
    // width: "100%",
    height: "11.5%",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    marginHorizontal: 14,
    padding: 8,
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
});
