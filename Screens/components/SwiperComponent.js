import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import Swiper from 'react-native-swiper'

const SwiperComponent = (props) => {
  return (
    <View style={styles.main_Container}>
    <View style={styles.container}>
       <Swiper style={styles.wrapper} showsButtons={false} 


activeDot={
    <View
        style={{
            backgroundColor: '#FFFFFF',
            width: 13,
            height: 8,
            borderRadius: 20,
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 38,
            left:120
        }}
    />
}
dot={
    <View
        style={{
            backgroundColor: 'gray',
            width: 13,
            height: 8,
            borderRadius: 20,
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 38,
            left:120
           
        }}
    />
}
>
<View style={styles.slide1}>
    <Image source={props.ImageProp} style={styles.FOODEY_IMG_Style} />
</View>
<View style={styles.slide1}>
    <Image source={props.ImageProp2} style={styles.FOODEY_IMG_Style} />
</View>
<View style={styles.slide1}>
    <Image source={props.ImageProp3} style={styles.FOODEY_IMG_Style} />
</View>
<View style={styles.slide1}>
    <Image source={props.ImageProp4} style={styles.FOODEY_IMG_Style} />
</View>
</Swiper>
    </View>
    <Text style={styles.title1_Text_Style}>{props.title}</Text>
            <View style={styles.Container_Fourth}>
                <Text style={styles.doller_Text_Style}>$$</Text>
                <Image source={global.ASSETS.oval} style={[styles.image1_Style, { tintColor: "#868686" }]} />
                <Text style={styles.type_Text_Style}>Chinese</Text>
                <Image source={global.ASSETS.oval} style={[styles.image1_Style, { tintColor: "#868686" }]} />
                <Text style={styles.type_Text_Style}>American</Text>
                <Image source={global.ASSETS.oval} style={[styles.image1_Style, { tintColor: "#868686" }]} />
                <Text style={styles.type_Text_Style}>Desi Food</Text>
            </View>
            <View style={styles.Container_Fifth}>
              <Text style={styles.numberTextStyle}>4.3</Text>
              <Image source={global.ASSETS.Star} style={styles.start_Image_Style}/>
              <Text style={styles.rating_Text_Style}>200+  Ratings</Text>
              <Image source={global.ASSETS.YELLOW_TIMER} style={styles.YELLOW_TIMER_Style}/>
              <Text style={styles.rating_Text_Style}>25 min</Text>
              <Image source={global.ASSETS.oval} style={[styles.image1_Style, { tintColor: "#868686", }]} />
              <Image source={global.ASSETS.DOLLAR_IMG} style={styles.Doller_Image_Style}/>
              <Text style={styles.rating_Text_Style}>Free</Text>
            </View>
            </View>
  )
}
const styles = ScaledSheet.create({
    main_Container:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    container:{
        alignItems: "center",
        height: '225@s',
        
    },
    FOODEY_IMG_Style:{
        width:"350@s",
        height:"180@s",
        resizeMode:"contain",
        marginBottom:"20@s",
        marginTop:"10@s"
    },
    Container_Fourth: {
        marginHorizontal: "35@s",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: "20@s",
        bottom: "25@s",
        marginLeft: "10@s",
    },
    doller_Text_Style: {
        color: "#868686",
        fontSize: "14@s",
        fontWeight: "400",


    },
    type_Text_Style: {
        color: "#868686",
        fontSize: "14@s",
        fontWeight: "400",
        letterSpacing: "0.4@s",
        paddingRight: "5@s"

    },
    title1_Text_Style: {
        fontSize: "18@s",
        fontWeight: "400",
        color: "#010F07",
        // fontFamily:global.FONT.REGULAR,
        marginLeft: "20@s",
        bottom: "25@s",
        marginBottom: "5@s"
    },
    Container_Fifth:{
        // flexDirection:"row",
        // justifyContent:"space-evenly",
        // alignItems:"center",
        // bottom:"30@s"
        marginHorizontal: "45@s",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: "20@s",
        bottom: "40@s",
        marginLeft: "15@s",
    },
    YELLOW_TIMER_Style:{
        height:"10@s",
        width:"10@s",
        resizeMode:"contain",
        tintColor:"#868686"

    },
    Doller_Image_Style:{
        height:"12@s",
        width:"12@s",
        resizeMode:"contain",
        tintColor:"#D8D8D8"
    },
    numberTextStyle:{
        fontSize:"12@s",
        color:"#010F07",
        fontWeight:"300"
    },
    rating_Text_Style:{
        fontSize:"11@s",
        color:"#010F07",
        fontWeight:"300"
    }
})

export default SwiperComponent
