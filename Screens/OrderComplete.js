import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import crossImage from '../assets/Image/x-cross.jpg'
import Header2 from './components/Header2';

const OrderComplete = ({ navigation }) => {
    return (
        <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
            <View style={{
                flexDirection: "row",
                //   justifyContent:"space-around",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 25,
                marginBottom: 20,


            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={global.ASSETS.BackArrow} style={{
                        height: 17,
                        width: 17,
                        resizeMode: "contain",
                        tintColor: "#010F07",
                        left: 2
                    }} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "300",
                    textAlign: "center",
                    color: "#868686",
                    flex: 1

                }}>McDonald's</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 10 }}>
                <Text style={styles.One_Text_Style}>1</Text>
                <Text style={styles.Coockie_Text_Style}>Cookie Sandwich</Text>
                <Text style={styles.AUD_Text_Style}>AUD$10</Text>
            </View>
            <Text style={styles.Subtitle_Text_Style}>Shortbread,Chocolate turtle {'\n'}cookies,and red velvet.</Text>
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 22, marginVertical: 20, elevation: 1 }} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 10 }}>
                <Text style={styles.One_Text_Style}>1</Text>
                <Text style={styles.Coockie_Text_Style}>Combo Burger</Text>
                <Text style={styles.AUD_Text_Style}>AUD$10</Text>
            </View>
            <Text style={styles.Subtitle_Text_Style}>Shortbread,Chocolate turtle {'\n'}cookies,and red velvet.</Text>
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 22, marginVertical: 20, elevation: 1 }} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 10 }}>
                <Text style={styles.One_Text_Style}>1</Text>
                <Text style={styles.Coockie_Text_Style}>Oyster Dish</Text>
                <Text style={styles.AUD_Text_Style}>AUD$10</Text>
            </View>
            <Text style={styles.Subtitle_Text_Style}>Shortbread,Chocolate turtle {'\n'}cookies,and red velvet.</Text>
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 22, marginVertical: 20, elevation: 1 }} />
            <View style={styles.container_Second}>
            <View style={styles.checkbox_Container}>
             <Image source={global.ASSETS.checkArrow} style={styles.checkArrow_Image_Style}/>
            </View>
            <Text style={styles.placeorder_Text_Style}>You Place the Order {'\n'} Successfully</Text>
            <Text style={styles.placeorder1_Text_Style}>You Place the Order Successfully. You will get{'\n'} your food within 25 minutes. Thanks for using{'\n'}our services.Enjoy your food :) </Text>
           
            <Text style={styles.KEEP_Text_Style}>KEEP BROWSING</Text>
            
            </View>

        </ScrollView>
    )
}

export default OrderComplete

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    One_Text_Style: {
        height: "24@s",
        width: "24@s",
        textAlign: "center",
        paddingTop: 4,
        color: "#F8B64C",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#868686",
        fontSize: "13@s",
        fontWeight: "400",
        right: 2
    },
    Coockie_Text_Style: {
        fontSize: "18@s",
        fontWeight: "300",
        letterSpacing: "0.4@s",
        color: "#010F07",
        right: "27@s"

    },
    AUD_Text_Style: {
        color: "#F8B64C",
        fontSize: "14@s",
        fontWeight: "600",
        // right:"4@s"
    },
    Subtitle_Text_Style: {
        fontSize: "15@s",
        fontWeight: "400",
        color: "#868686",
        letterSpacing: "0.4@s",
        marginVertical: "5@s",
        left: "62@s"
    },
    subtotal_Text_Style: {
        fontSize: "14@s",
        color: "#010F07",
        fontWeight: "400",

    },
    container_Second: {
        height: "310@s",
        width: "320@s",
        backgroundColor:"#F8EDDD",
        marginTop:"10@s",
        borderRadius:"18@s",
        marginHorizontal: 18,
        marginBottom:"25@s"
    },
    checkbox_Container:{
        alignItems:"center",
        alignSelf:"center",
        width:"75@s",
        height:"76@s",
        backgroundColor:"#F8B64C",
        borderRadius:"50@s",
        bottom:55
    },
    checkArrow_Image_Style:{
        width:"17@s",
        height:"14@s",
        resizeMode:"contain",
        tintColor:"#FFFFFF",
        alignSelf:"center",
        flex:1
    },
    placeorder_Text_Style:{
        textAlign:"center",
        fontSize:"18@s",
        fontWeight:"300",
        color:"#010F07",

    },
    placeorder1_Text_Style:{
        fontSize:"12@s",
        color:"#868686",
        textAlign:"center",
        marginTop:"30@s",
        lineHeight:"20@s",
        fontWeight:"400",
        letterSpacing:"0.4@s"
    },
    KEEP_Text_Style:{
    fontSize:"12@s",
    fontWeight:"600",
    color:"#EEA734",
    textAlign:"center",
    marginTop:"35@s",
  // width:"120@s",
   textShadowColor: '#898181',
   textShadowOffset: {width: -2, height: 5},
   textShadowRadius: 10
//  backgroundColor:"transparent"
    },
    
})