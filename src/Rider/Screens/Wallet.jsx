import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import HeaderComp from "../components/HeaderComp";
import { LineChart, PieChart, ProgressChart } from "react-native-chart-kit";
import { colors, sizes } from "../components/theme";

const Wallet = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComp title={"Wallet"} rightIconName={""} leftIconName={"menu"} />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
