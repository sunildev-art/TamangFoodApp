import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header2 from './components/Header2';
import Header from './components/Header';

const Payment = ({navigation}) => {
    const [cardNumber, setCardNumber] = useState("4343 4343 4343")
    const [month, setMonth] = useState("")
    const [cvc, setCvc] = useState("")

    const handleCardNumber = (text) => {

        let formattedText = text.split(' ').join('');
       
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        setCardNumber(formattedText);
        

        return formattedText;
    }
    const monthHandle= (t) => {
        let formattedText = t.split(" ").join('');
        console.log(formattedText)
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp('.{1,2}', 'g')).join(" ");
        }
        setMonth(formattedText);
        console.log(formattedText)
        
        return formattedText;
    }

    return (
        <ScrollView style={styles.main_container}>
            <Header

            />
            <Text style={styles.payment_Text_Style}>Add your payment methods</Text>
            <Text style={styles.subtitle_Text_Style}>This card will only be charged when {'\n'} you place an order.</Text>
            <View style={styles.payment_Input_Container}>
                <Image source={global.ASSETS.cardB} style={styles.cardB_Style} />
                <TextInput placeholder='4343 4343 4343 4343'
                    placeholderTextColor="#868686"
                    style={styles.TextInput_Style}
                    keyboardType="numeric"
                    maxLength={19}
                    value={cardNumber}
                    onChangeText={(text) => handleCardNumber(text)}
                />
            </View>
            <View style={styles.payment_Input_Container2}>
                <TextInput style={styles.month_Text_Style}
                value={month}
                keyboardType="numeric"
                placeholder='MM/YY'
                placeholderTextColor="#868686"
                maxLength={5}
                onChangeText={(t)=>monthHandle(t)}
                 />
                <TextInput style={styles.cvc_Text_Style}
                value={cvc}
                keyboardType="numeric"
                placeholder='CVC'
                placeholderTextColor="#868686" 
                maxLength={3}
                onChangeText={(t)=>setCvc(t)}
                />
            </View>
            <View style={{marginTop:210}}>
            <TouchableOpacity style={styles.ADD_To_Order_Button_Style} onPress={()=>navigation.navigate("Filter")}>
                <Text style={styles.ADD_To_Order_Button_Text_Style}>ADD CARD</Text>
            </TouchableOpacity>
            </View>
         <View style={{flexDirection:"row",alignItems:"center",
         height:58,
         width:365,
         marginTop:5,
        //  backgroundColor:" #F2E6E6",
        //  elevation:1,
         borderWidth:1,
         borderColor:"gray",
         alignSelf:"center",
         borderRadius:8,
         marginBottom:15,
         justifyContent:"center"
         }}>
            <Image source={global.ASSETS.camera} style={styles.camera_Image_Style}/>
            <Text style={styles.Scan_Text_Style}>SCAN CARD</Text>
         </View>
        </ScrollView>
    )
}

export default Payment

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    payment_Text_Style: {
        fontSize: "22@s",
        color: "#010F07",
        fontWeight: "600",
        marginLeft: "18@s"
        // marginHorizontal:"10@s"


    },
    subtitle_Text_Style: {
        fontSize: "14@s",
        color: "#868686",
        textAlign: "center",
        marginVertical: "10@s",
        fontWeight: "400",
        marginRight: "28@s"
    },
    payment_Input_Container: {
        flexDirection: "row",
        alignItems: "center",
        height: "54@s",
        // width:"335@s",
        backgroundColor: "#FBFBFB",
        marginHorizontal: "18@s",
        elevation: "1@s",
        marginTop: "25@s",
        borderRadius: "9@s",
        borderColor: "#868686",
        marginBottom: "10@s"

    },
    cardB_Style: {
        height: "24@s",
        width: "34@s",
        marginHorizontal: "15@s",

    },
    TextInput_Style: {
        color: "#010F07",
        fontSize: "14@s"
    },
    payment_Input_Container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "20@s",
        marginVertical: "15@s",
        elevation:"5@s"
    },
    month_Text_Style: {
        height: "54@s",
        backgroundColor:"#FBFBFB",
        width:"160@s",
        borderRadius:"9@s",
        paddingHorizontal:"15@s",
        // textAlign:"center",
        // elevation:"1@s"
        elevation:"1@s",
        fontSize:"14@s",
        color:"#010F07"
    },
    cvc_Text_Style: {
        height: "54@s",
        backgroundColor:"#FBFBFB",
        width:"120@s",
        borderRadius:"9@s",
        paddingHorizontal:"15@s",
        elevation:"1@s",
        fontSize:"14@s",
        color:"#010F07"
    },
    ADD_To_Order_Button_Style: {
        backgroundColor: "#EEA734",
        height: "52@s",
        // marginTop: "250@s",
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
    camera_Image_Style:{
     width:"18@s",
     height:"18@s",
     resizeMode:"contain",
     marginHorizontal:"8@s"
    },
    Scan_Text_Style:{
        fontSize:"13@s",
        fontWeight:"600",
        letterSpacing:"0.4@s",
        color:"#010F07",
    }
   
})