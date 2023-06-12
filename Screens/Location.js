import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';

const Location = () => {
    const [address, setAddress] = useState("")
    return (
        <View style={styles.main_container}>
            <Header3
                HeaderImage={global.ASSETS.BackArrow}
                tittle="Location"
            />
            <View style={styles.Container_First}>
                <View style={styles.TextInputContainer}>
                    <Image source={global.ASSETS.marker} style={styles.marker_Img_Style} />
                    <TextInput
                        placeholder='Search new address'
                        placeholderTextColor="#868686"
                        style={styles.TextInput_Style}
                        value={address}
                        onChange={(t) => setAddress(t)}
                        maxLength={50}
                        keyboardType="visible-password"
                    />
                </View>
                <View style={styles.recente_Address_Container}>
                    <Text style={styles.normal_Text_Style}>RECENT ADDRESS</Text>
                    <Text style={styles.normal_Text_Style2}>CLEAR ALL</Text>
                </View>
                <View style={styles.searchResultContainer}>
                 <Image source={global.ASSETS.marker} style={styles.marker_Img_Style1}/>
                 <Text style={styles.result_Text_Style}>Hay Street, Perth</Text>
                </View>
                <View style={styles.searchResultContainer}>
                 <Image source={global.ASSETS.marker} style={styles.marker_Img_Style1}/>
                 <Text style={styles.result_Text_Style}>Zoo, Perth</Text>
                </View>
                <View style={styles.searchResultContainer}>
                 <Image source={global.ASSETS.marker} style={styles.marker_Img_Style1}/>
                 <Text style={styles.result_Text_Style}>Murray Street, Perth</Text>
                </View>
                <View style={styles.searchResultContainer}>
                 <Image source={global.ASSETS.marker} style={styles.marker_Img_Style1}/>
                 <Text style={styles.result_Text_Style}>St Georgace Terrace Street, Perth</Text>
                </View>
               
            </View>
        </View>
    )
}

export default Location

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    Container_First: {
        marginTop: "20@s",
        marginHorizontal: "20@s",
        // backgroundColor:'red',
        flex: 1
    },
    TextInputContainer: {
        height: "48@s",
        backgroundColor: "#FBFBFB",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: "10@s",

    },
    marker_Img_Style: {
        height: "18@s",
        width: "18@s",
        resizeMode: "contain",
        marginHorizontal: "10@s",
        left: "10@s"
    },
    TextInput_Style: {
        fontSize: "16@s",
        color: "#868686",
        fontWeight: "400",
        // marginHorizontal:"15@s"
        paddingHorizontal: "15@s",

    },
    recente_Address_Container: {
        flexDirection: "row",
        alignItems: "center",
       justifyContent:"space-between",
       marginTop:"30@s",
       marginHorizontal:"3@s"
    },
    normal_Text_Style: {
        fontSize: "16@s",
        fontWeight: "300",
        lineHeight: "24@s",
        color: "#868686"
    },
    normal_Text_Style2: {
        fontSize: "12@s",
        fontWeight: "300",
        lineHeight: "24@s",
        color: "#010F07",

    },
    searchResultContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:"30@s"
    },
    marker_Img_Style1:{
        height:"18@s",
        width:"18@s",
        resizeMode:"contain",
        marginRight:"15@s",
        tintColor:"#868686"
    },
    result_Text_Style:{
        fontSize:"16@s",
        color:"#010F07",
        fontWeight:"400",
        letterSpacing:"0.4@s"
    }
})