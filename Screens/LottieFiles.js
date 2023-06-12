import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";
import global from "../global";
import { ScaledSheet } from 'react-native-size-matters';
export default function SimpleLottie() {
    return (
        <View style={styles.main_Container}>
            <LottieView
                source={require("../assets/processing_Food.json")}
                style={styles.animation}
                autoPlay={true}
            />
            <Text style={styles.LoaderTextStyle}>Please wait Data is loading...</Text>
        </View>
    );
}
const styles = ScaledSheet.create({
    animation: {
        width: "400@s",
        height: "400@s",
        resizeMode: "contain",

    },
    main_Container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    LoaderTextStyle: {
        color: "#EEA734", bottom: "100@s", fontSize: "14@s",
        fontWeight: "400",
        fontFamily: global.FONT.REGULAR
    }
});