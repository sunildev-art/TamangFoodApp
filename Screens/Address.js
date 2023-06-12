import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import cross from '../assets/Image/x-cross.jpg'

const Address = ({navigation}) => {
    return (
        <View style={styles.main_container}>
            <StatusBar
                animated={true}
                backgroundColor="gray"
            />
            <TouchableOpacity style={styles.cross_imageContainer}>
                <Image source={cross} style={styles.CLOSE_IMG_Style} />
            </TouchableOpacity>
            <View style={styles.Text_Container}>
                <Text style={styles.Text_Style}>Find restaurants near you</Text>
                <Text style={styles.Text1_Style}>please enter your location or allow access to {'\n'} your location to find restaurants near you.</Text>
            </View>
            <View style={styles.Container_Second}>
                <Image source={global.ASSETS.LocationArrow} style={styles.LocationArrow_Img_Style} />
                <TouchableOpacity>
                    <Text style={styles.ButtonTextStyle}>Use current Location</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container_Third}>
            <Image source={global.ASSETS.marker} style={styles.marker_Img_Style} />
                <TouchableOpacity>
                    <Text style={styles.markerButtonTextStyle}>Enter a new Address</Text>
                </TouchableOpacity>
            </View>
           
            <TouchableOpacity  onPress={()=>navigation.navigate("Homapage")} style={styles.SignUp_Button_Style}>
                                                                       
        <Text style={styles.SignUp_Button_Text_style}>LET'S BEGIN</Text>
      </TouchableOpacity>
      
        </View>
    )
}

export default Address

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        marginTop: "5@s",
        backgroundColor: "white"
    },
    cross_imageContainer: {
        marginTop: "35@s",
        marginHorizontal: "15@s"
    },
    CLOSE_IMG_Style: {
        height: "14@s",
        width: "12@s",
        resizeMode: "contain",
        backgroundColor: "white"
    },
    Text_Container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "35@s",
        marginHorizontal: "10@s"
    },
    Text_Style: {
        fontSize: "20@s",
        color: "#010F07",
        fontWeight: "600",
        fontFamily: global.FONT.MEDIUM,
        letterSpacing: 0.2
    },
    Text1_Style: {
        fontSize: "13@s",
        color: "#868686",
        textAlign: "center",
        marginTop: "00@s"
    },
    Container_Second: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // width:"325@s",
        height: "55@s",
        borderWidth: "1@s",
        borderColor: "#EEA734",
        marginHorizontal: "18@s",
        marginTop: "35@s",
        borderRadius: "10@s",
       

    },
    LocationArrow_Img_Style: {
        height: "14@s",
        width: "14@s",

    },
    ButtonTextStyle: {
        color: "#EEA734",
        fontSize:"13@s",
        fontWeight:"400",
        // fontFamily:global.FONT.REGULAR
        paddingHorizontal:"15@s"
    },
    container_Third:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // width:"325@s",
        height: "50@s",
        // borderWidth: "1@s",
        // borderColor: "#EEA734",
        marginHorizontal: "16@s",
        marginTop: "30@s",
        borderRadius: "10@s",
        backgroundColor:"#8686861A"
        
    },
    markerButtonTextStyle:{
        color: "#868686",
        fontSize:"13@s",
        fontWeight:"400",
        // fontFamily:global.FONT.REGULAR
        paddingHorizontal:"15@s"
    },
    SignUp_Button_Style: {
        // backgroundColor: "#EEA734",
        // height: "52@s",
        // marginTop: "150@s",
        // justifyContent: "center",
        // alignItems: "center",
        // // width:"335@s",
        // marginHorizontal: "14@s",
        // borderRadius: "10@s"
        backgroundColor: "#EEA734",
        height: 52,
        // marginTop: "150@s",
        justifyContent: "center",
        alignItems: "center",
        // width:"335@s",
        marginHorizontal: 14,
        borderRadius: 10,
        position:"absolute",
        alignSelf:"center",
        width:"90%",
        bottom:20,
      },
      SignUp_Button_Text_style: {
        fontSize: "14@s",
        fontWeight: "700",
        fontFamily: global.FONT.MEDIUM,
        color: "#FFFFFF",
        // letterSpacing:"1@s"
      },
})