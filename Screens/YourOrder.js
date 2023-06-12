import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import crossImage from '../assets/Image/x-cross.jpg'
import Header2 from './components/Header2';

const YourOrder = ({navigation}) => {
  return (
<ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
    <Header2 
    HeaderImage={crossImage}
    tittle="Your Order"
    />
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginVertical:10}}>
        <Text style={styles.One_Text_Style}>1</Text>
        <Text style={styles.Coockie_Text_Style}>Cookie Sandwich</Text>
        <Text style={styles.AUD_Text_Style}>AUD$10</Text>
    </View>
    <Text style={styles.Subtitle_Text_Style}>Shortbread,Chocolate turtle {'\n'}cookies,and red velvet.</Text>
    <View style={{height:1,backgroundColor:"#ccc",marginHorizontal:22,marginVertical:20,elevation:1}}/>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginVertical:10}}>
        <Text style={styles.One_Text_Style}>1</Text>
        <Text style={styles.Coockie_Text_Style}>Combo Burger</Text>
        <Text style={styles.AUD_Text_Style}>AUD$10</Text>
    </View>
    <Text style={styles.Subtitle_Text_Style}>Shortbread,Chocolate turtle {'\n'}cookies,and red velvet.</Text>
    <View style={{height:1,backgroundColor:"#ccc",marginHorizontal:22,marginVertical:20,elevation:1}}/>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginVertical:10}}>
        <Text style={styles.One_Text_Style}>1</Text>
        <Text style={styles.Coockie_Text_Style}>Oyster Dish</Text>
        <Text style={styles.AUD_Text_Style}>AUD$10</Text>
    </View>
    <Text style={styles.Subtitle_Text_Style}>Shortbread,Chocolate turtle {'\n'}cookies,and red velvet.</Text>
    <View style={{height:1,backgroundColor:"#ccc",marginHorizontal:22,marginVertical:20,elevation:1}}/>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:30}}>
    <Text style={styles.subtotal_Text_Style}>Subtotal</Text>
    <Text style={styles.subtotal_Text_Style}>AUD$30</Text>
    </View>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:30,marginVertical:15}}>
    <Text style={styles.subtotal_Text_Style}>Delivery</Text>
    <Text style={styles.subtotal_Text_Style}>$0</Text>
    </View>
    <Text style={styles.AUD1_Text_Style}>AUD$10</Text>
    <View style={{flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:28,
    marginTop:25}}>
        <Text style={styles.add_more_Text_Style}>Add more items</Text>
        <Image source={global.ASSETS.BackRight} style={styles.BackRight_Image_Style}/>
    </View>
    <View style={{height:1,backgroundColor:"#ccc",marginHorizontal:22,marginVertical:20,elevation:1}}/>
    <View style={{flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:28,
    marginTop:8}}>
        <Text style={styles.add_more_Text_Style}>Add more items</Text>
        <Image source={global.ASSETS.BackRight} style={styles.BackRight_Image_Style}/>
    </View>
    <View style={{height:1,backgroundColor:"#ccc",marginHorizontal:22,marginTop:25,elevation:1,
    marginBottom:10}}/>
<TouchableOpacity style={styles.ADD_To_Order_Button_Style} onPress={()=>navigation.navigate("Payment")}>
                <Text style={styles.ADD_To_Order_Button_Text_Style}>Continue (AUD $30)</Text>
            </TouchableOpacity>
    </ScrollView>
  )
}

export default YourOrder

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    One_Text_Style:{
        height:"24@s",
        width:"24@s",
        textAlign:"center",
        paddingTop:4,
        color:"#F8B64C",
        borderRadius:4,
        borderWidth:1,
        borderColor:"#868686",
        fontSize:"13@s",
        fontWeight:"400",
        right:2
    },
    Coockie_Text_Style:{
        fontSize:"18@s",
        fontWeight:"300",
        letterSpacing:"0.4@s",
        color:"#010F07",
        right:"27@s"
       
    },
    AUD_Text_Style:{
        color:"#F8B64C",
        fontSize:"14@s",
        fontWeight:"600",
        // right:"4@s"
    },
    Subtitle_Text_Style:{
        fontSize:"15@s",
        fontWeight:"400",
        color:"#868686",
        letterSpacing:"0.4@s",
        marginVertical:"5@s",
        left:"62@s"
    },
    subtotal_Text_Style:{
        fontSize:"14@s",
        color:"#010F07",
        fontWeight:"400",

    },
    AUD1_Text_Style:{
        color:"#F8B64C",
        fontSize:"14@s",
        fontWeight:"600",
        // right:"4@s",
        left:320
    },
    add_more_Text_Style:{
        fontSize:"16@s",
        fontWeight:"300",
        color:"#F8B64C"
    },
    ADD_To_Order_Button_Style: {
        backgroundColor: "#EEA734",
        height: "52@s",
        // marginTop: "150@s",
        justifyContent: "center",
        alignItems: "center",
        // width:"335@s",
        marginHorizontal: "18@s",
        borderRadius: "10@s",
        marginTop:"30@s",
        marginBottom:"15@s"
    },
    ADD_To_Order_Button_Text_Style: {
        fontSize: "14@s",
        fontWeight: "700",
        fontFamily: global.FONT.MEDIUM,
        color: "#FFFFFF",
        // letterSpacing:"1@s"
    },
})