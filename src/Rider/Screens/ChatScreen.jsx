import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors, sizes } from "../components/theme";

const ChatScreen = ({ route }) => {
  const navigation = useNavigation();
  const [input, setinput] = useState("");
  const { fontScale } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  const [conversation, setconversation] = useState([]);
  const [newMessage, setnewMessage] = useState([]);

  // const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   getConversation();
  // }, [input]);

  const scrollViewRef = useRef(null);

  // const getConversation = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://dotexx.herokuapp.com/api/messages/6373d8fc51fd75ca94cc50b1"
  //     );
  //     setconversation(res.data);
  //     // console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   setinput("");
  //   const message = {
  //     sender: user._id,
  //     text: input,
  //     conversationId: "6373d8fc51fd75ca94cc50b1",
  //   };
  //   try {
  //     const res = await axios.post(
  //       "http://dotexx.herokuapp.com/api/messages",
  //       message
  //     );
  //     if (res.status === 200) {
  //       getConversation();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <SafeAreaView style={[styles.container]}>
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("OrderDetail", { title: route.params.title })
          }
        >
          <MaterialIcons name="local-mall" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() =>
                scrollViewRef.current?.scrollToEnd({ animated: true })
              }
              contentContainerStyle={{ paddingTop: 15 }}
            >
              {/* {conversation.map((chat, index) => {
                return (
                  <>
                    {chat.sender === user._id ? (
                      <>
                        <View style={styles.reciever}>
                          <Text style={styles.recieverText}>{chat.text}</Text>
                        </View>
                        <View style={styles.recieverTime}>
                          <Text>
                            {moment(chat.createdAt).startOf("LTS").fromNow()}
                          </Text>
                        </View>
                      </>
                    ) : (
                      <>
                        <View style={styles.sender}>
                          <Text style={styles.senderText}>{chat.text}</Text>
                        </View>
                        <View style={styles.senderTime}>
                          <Text>
                            {moment(chat.createdAt).startOf("LTS").fromNow()}
                          </Text>
                        </View>
                      </>
                    )}
                  </>
                );
              })} */}
            </ScrollView>
            <View style={styles.footer}>
              <TouchableOpacity style={{ marginRight: 5 }}>
                <Ionicons name="add" size={24} color={colors.primary} />
              </TouchableOpacity>
              <View style={styles.textInput}>
                <TextInput
                  value={input}
                  onChangeText={(text) => setinput(text)}
                  placeholder="Send Message"
                  style={{
                    width: "85%",
                  }}
                />
                <TouchableOpacity
                  style={{
                    height: 24,
                    width: 24,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name={"mic"} size={24} color={"#B9B9B9"} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => console.log(yay)}>
                <Ionicons name="send" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  reciever: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    maxWidth: "80%",
    position: "relative",
  },
  recieverText: {
    color: "black",
    fontWeight: "600",
    // marginLeft: 10,
  },
  recieverTime: {
    padding: 15,
    paddingTop: 5,
    alignSelf: "flex-end",
    marginRight: 7.5,
    marginBottom: 10,
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "blue",
    alignSelf: "flex-start",
    borderRadius: 20,
    marginLeft: 15,
    maxWidth: "80%",
    position: "relative",
    marginBottom: 0,
  },
  senderText: {
    color: "white",
    fontWeight: "600",
    // marginLeft: 10,
  },
  senderTime: {
    padding: 15,
    paddingTop: 5,
    alignSelf: "flex-start",
    marginLeft: 7.5,
    position: "relative",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    elevation: 5,
    borderTopWidth: 0.5,
    borderTopColor: colors.borderColor,
    // flex: 1,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ECECEC",
    padding: 10,
    paddingLeft: 20,
    color: "grey",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: "5%",
    alignItems: "center",
  },
  headerTitle: {
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 14,
    height: 55,
    alignItems: "center",
  },
  headerButton: {
    backgroundColor: "white",
    width: "33%",
    padding: 10,
    height: "100%",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
  headerButtonText: {
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  fill: {
    flex: 1,
    marginHorizontal: 10,
  },
  button: {
    marginHorizontal: 10,
  },
});
export default ChatScreen;
