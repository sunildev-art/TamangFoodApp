import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';

const SearchResult = ({ navigation, route }) => {

    const { user, title } = route.params || {};


    const array3 = [
        {
            id: 1,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.BARGERS_IMG,
            title: "McDonald's",
            rating: 4.5,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            Status: 0,
            margin:1

        },
        {
            id: 2,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.TACOS_IMG,
            title: "Tacos Nanchas",
            rating: 4.5,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            Status: 1,
            margin:2
        },
        {
            id: 3,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.BREAK_FAST,
            title: "KFC Foods",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            Status: 0,
            Status1:0,
            margin:3
        },
        {
            id: 4,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.EAG_IMG,
            title: "Cafe MayFeild's",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            // onpress: () => navigation.navigate("SingleRetaurents"),
            Status: 1,
            Status1:1,
            margin:4
        },
        {
            id: 5,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.EAT_IMG,
            title: "Chinese",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            Status: 0,
            Status1:0,
           margin:5

        },
        {
            id: 6,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.STATE_BIRD,
            title: "McDonald's",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            Status: 1,
            Status1:1,
            margin:6
        },
    ]
    return (
        <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
            <View style={{ marginVertical: 10,marginHorizontal:5 }}>
                <Header3
                    HeaderImage={global.ASSETS.BackArrow}
                    tittle={title}
                    tittle1="Filter"
                />
                <View style={{ height: 1, backgroundColor: "#ccc", marginTop: 20, elevation: 1 }} />
                <View style={{ flex: 1, marginVertical: 10, }}>
                    <View style={styles.Search_Again_Button_Container}>
                        <Text style={styles.Subtitle_Text_Style}>we have found 80 results of {'\n'}{title}'s</Text>
                        <TouchableOpacity >
                            <Text style={styles.button_Text_Style}>Search Again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={array3}
                    keyExtractor={index => index.id}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <View style={[styles.FlatList_Container,{
                          
                            }]}>
                                <ImageBackground source={item.image} borderRadius={10} style={{ 
                                     height:item.Status === 0 ? 240 : 290,
                                     width:170,
                                //   alignItems:"baseline",
                                  marginVertical:10,
                                 marginTop:item.Status1 === 0 ? -40 : null,
                                  top:item.margin === 5 && 3 ? -25 : null
                                 }}>
                                    <View style={styles.FlatList_Container_Second}>
                                        <Image source={item.clockImage} style={styles.clockImage_Image_Style}/>
                                        <Text style={styles.timing_Text_Style}>{item.timing}</Text>
                                    </View>
                                    <View style={styles.FlatList_Container_third}>
                                     <Image source={item.image2} style={styles.doller_Image_Style}/>
                                     <Text style={styles.charge_Text_style}>{item.charge}</Text>
                                     <Text style={styles.rating_Text_Style}>{item.rating}</Text>
                                    </View>
                                 </ImageBackground>
                                 <Text style={[styles.title_Text_Style,{
                                      top:item.margin === 5 && 3 ? -25 : null
                                 }]}>{item.title}</Text>
                                 <View style={[styles.FlatList_Container_Fourth,{
                                    top:item.margin === 5 && 3 ? -22 : null
                                 }]}>
                                    <Text style={styles.type1_Text_style}>{item.type1}</Text>
                                    <Image source={item.dotImage} style={styles.dotImage}/>
                                    <Text style={styles.type2_Text_style}>{item.type2}</Text>
                                 </View>
                            </View>
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default SearchResult

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    Search_Again_Button_Container: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15@s",
        marginHorizontal: "15@s"
    },
    Subtitle_Text_Style: {
        fontSize: "13@s",
        fontWeight: "400",
        fontFamily: global.FONT.REGULAR,
        color: "#010F07"
    },
    button_Text_Style: {
        fontSize: "14@s",
        color: "#EEA734",
        fontWeight: "400",
        fontFamily: global.FONT.REGULAR
    },
    FlatList_Container: {
       marginHorizontal:"10@s",
    //    width:"80%"
       
    },
    FlatList_Container_Second:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:"10@s",
        position:"absolute",
        bottom:"40@s"
    },
    clockImage_Image_Style:{
        height:"16@s",
        width:"16@s",
        tintColor:"#FFFFFF",
        resizeMode:"contain",
        marginRight:"5@s"
    },
    timing_Text_Style:{
        fontSize:"12@s",
        color:"#FFFFFF",
        fontWeight:"400",
    },
    FlatList_Container_third:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:"10@s",
        position:"absolute",
        bottom:"15@s"
    },
    doller_Image_Style:{
        height:"16@s",
        width:"16@s",
        tintColor:"#FFFFFF",
        resizeMode:"contain",
        marginRight:"8@s"
    },
    charge_Text_style:{
        fontSize:"12@s",
        color:"#FFFFFF",
        fontWeight:"400",
        
    },
    rating_Text_Style:{
        height:"20@s",
        width:"36@s",
        backgroundColor:"#EEA734",
        textAlign:"center",
        color:"#FFFFFF",
        borderRadius:"6@s",
        paddingTop:"1@s",
        left:"42@s"
    },
    title_Text_Style:{
        fontSize:"20@s",
        fontWeight:"400",
        color:"#010F07",
        marginLeft:"2@s",
        
    },
    FlatList_Container_Fourth:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:"2@s",
        top:"4@s",
        marginBottom:"10@s"
        
    },
    type1_Text_style:{
        fontSize:"14@s",
        color:"#868686",
        fontWeight:"400",
        
    },
    dotImage:{
        height:"5@s",
        width:"5@s",
        resizeMode:"contain",
        marginLeft:"10@s",
       top:"1@s"
       
    },
    type2_Text_style:{
        fontSize:"14@s",
        color:"#868686",
        fontWeight:"400",
        marginLeft:"10@s"
    }
})