import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header from './components/Header';
import downBack from '../assets/Image/downBack.png'
import Swiper from 'react-native-swiper'
import SwiperComponent from './components/SwiperComponent';

const Homapage = ({navigation}) => {

    const array = [
        {
            id: 1,
            image: global.ASSETS.BG_IMG,
            title: "Krispy Creme",
            subtitle: "St Georgece Terrace,Perth",
            rating: 4.5,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery"
        },
        {
            id: 2,
            image: global.ASSETS.CHOW_IMG,
            title: "Mario Italiano",
            subtitle: "Hey Street ,Perth city",
            rating: 4.3,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery"
        },

    ]

    const array2 = [
        {
            id: 1,
            image: global.ASSETS.RED_POP,
            title: "Krispy Creme",
            subtitle: "St Georgece Terrace,Perth",
            rating: 4.5,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery"
        },
        {
            id: 2,
            image: global.ASSETS.BARGER_IMG,
            title: "Mario Italiano",
            subtitle: "Hey Street ,Perth city",
            rating: 4.3,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery"
        },

    ]
    const array3 = [
        {
            id: 1,
            image2: global.ASSETS.DOLLAR_IMG,
            title: "McDonald's",
            rating: 4.3,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery",
            type1: "Chinese",
            type2: "American",
            type3: "Desi food",
            rating1: "200+ Rating",
            charge1: "Free",
            starImage: global.ASSETS.Star,
            clockImage: global.ASSETS.YELLOW_TIMER,
            image: global.ASSETS.RESTAURANTS
        },
        {
            id: 2,
            image2: global.ASSETS.DOLLAR_IMG,
            title: "Cafe Brichor's",
            rating: 4.3,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery",
            type1: "Chinese",
            type2: "American",
            type3: "Desi food",
            rating1: "200+ Rating",
            charge1: "Free",
            starImage: global.ASSETS.Star,
            clockImage: global.ASSETS.YELLOW_TIMER,
            image: global.ASSETS.ORANGE_BG
        },

        {
            id: 3,
            image2: global.ASSETS.DOLLAR_IMG,
            title: "Burger Farm",
            rating: 4.3,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery",
            type1: "Chinese",
            type2: "American",
            type3: "Desi food",
            rating1: "200+ Rating",
            charge1: "Free",
            starImage: global.ASSETS.Star,
            clockImage: global.ASSETS.YELLOW_TIMER,
            image: global.ASSETS.FOODEY_IMG
        },
    ]

    return (
        <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
            <StatusBar
                animated={true}
                backgroundColor="gray"
            />
            <Text style={styles.normalText}>DELIVERY TO </Text>
            <View style={styles.Header_Container}>
               <TouchableOpacity onPress={()=>navigation.navigate("SearchLocationResult")}>
               <Text style={styles.normalText1}>HeyStreet,Perth</Text>
               </TouchableOpacity>
                <Image source={downBack} style={styles.downBackImageStyle} />
              <TouchableOpacity onPress={()=>navigation.navigate("Filter")}>
              <Text style={styles.filterTextStyle}>Filter</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 5, marginTop: 10 }} />

            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}


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
                            left: 120
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
                            left: 120
                        }}
                    />
                }
            >
                <View style={styles.slide1}>
                    <Image source={global.ASSETS.FOOD_IMG} style={styles.FOODEY_IMG_Style} />
                </View>
                <View style={styles.slide1}>
                    <Image source={global.ASSETS.FOOD_IMG} style={styles.FOODEY_IMG_Style} />
                </View>
                <View style={styles.slide1}>
                    <Image source={global.ASSETS.FOOD_IMG} style={styles.FOODEY_IMG_Style} />
                </View>
                <View style={styles.slide1}>
                    <Image source={global.ASSETS.FOOD_IMG} style={styles.FOODEY_IMG_Style} />
                </View>
            </Swiper>
            <Text style={styles.feature_Container_Text}>Featured </Text>
            <View style={styles.feature_Container}>

                <Text style={styles.partner_Container_Text}>Partners</Text>
                <TouchableOpacity onPress={() =>navigation.navigate("FeatureScreen")}>
                    <Text style={styles.ButtonTextStyle}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={array}
                keyExtractor={index => index.id}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.FlatList_Container_Style}>
                            <Image style={styles.image_style} source={item.image} />
                            <Text style={styles.title_Text_Style}>{item.title}</Text>
                            <Text style={styles.subtitle_Style}>{item.subtitle}</Text>
                            <View style={styles.FlatList_Container_Second}>
                                <Text style={styles.rating_style}>{item.rating}</Text>
                                <Text style={styles.timing_Style}>{item.timing}</Text>
                                <Image style={styles.image1_Style} source={item.image1} />
                                <Text style={styles.charge_Style}>{item.charge}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Image source={global.ASSETS.BANNER_IMG} style={styles.Banner_Style} />
            <Text style={[styles.feature_Container_Text, { marginTop: 25, fontWeight: "600" }]}>Best Picks </Text>
            <Text style={[styles.feature_Container_Text, { bottom: 25 }]}>Restaurant by </Text>
            <View style={styles.feature_Container}>


                <Text style={[styles.partner_Container_Text, { bottom: 30 }]}>Team</Text>
                <TouchableOpacity>
                    <Text style={[styles.ButtonTextStyle, { marginBottom: 10 }]}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={array2}
                keyExtractor={index => index.id}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.FlatList_Container_Style}>
                            <Image style={styles.image_style} source={item.image} />
                            <Text style={styles.title_Text_Style}>{item.title}</Text>
                            <Text style={styles.subtitle_Style}>{item.subtitle}</Text>
                            <View style={styles.FlatList_Container_Second}>
                                <Text style={styles.rating_style}>{item.rating}</Text>
                                <Text style={styles.timing_Style}>{item.timing}</Text>
                                <Image style={styles.image1_Style} source={item.image1} />
                                <Text style={styles.charge_Style}>{item.charge}</Text>
                            </View>
                        </View>
                    )
                }}
            />

            <View style={styles.container_Third}>
                <Text style={styles.container_Third_Text_Style}>All restaurants</Text>
                <TouchableOpacity onPress={() =>navigation.navigate("BrowseFood")}>
                    <Text style={styles.container_Third_Button_Style}>See all</Text>
                </TouchableOpacity>

            </View>
            {/* <FlatList
                data={array3}
                keyExtractor={index => index.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.array3_Container}>
                            <Image source={item.image} style={styles.array3_Image_Style} />
                            <Text style={styles.array3_Text_Style}>{item.title}</Text>
                            <View style={styles.array3_Container2}>
                            <Text style={styles.doller_Style}>$$</Text>
                            <Image source={item.image1} style={[styles.image1_Style,{tintColor:"#868686"}]}/>
                            <Text style={styles.type_Text_Style}>{item.type1}</Text>
                            <Image source={item.image1} style={[styles.image1_Style,{tintColor:"#868686"}]}/>
                            <Text style={styles.type_Text_Style}>{item.type2}</Text>
                            <Image source={item.image1} style={[styles.image1_Style,{tintColor:"#868686"}]}/>
                            <Text style={styles.type_Text_Style}>{item.type3}</Text>
                            </View>
                        </View>
                    )
                }}
            /> */}
           <View style={{marginBottom:-55}}> 
           <SwiperComponent 
            ImageProp={global.ASSETS.RESTAURANTS}
            ImageProp2={global.ASSETS.FOOD_IMG}
            ImageProp3={global.ASSETS.ALL_FOOD}
            ImageProp4={global.ASSETS.RESTAURANTS}
            title="McDonalds's"
           />
           </View>
           
           <View style={{marginBottom:-55}}> 
           <SwiperComponent 
             ImageProp={global.ASSETS.ORANGE_BG}
             ImageProp2={global.ASSETS.FOOD_IMG}
            ImageProp3={global.ASSETS.ALL_FOOD}
            ImageProp4={global.ASSETS.RESTAURANTS}
            title="Cafe Brichor's"
           />
           </View>
           <View style={{marginBottom:-50}}> 
           <SwiperComponent 
             ImageProp={global.ASSETS.FOODEY_IMG}
             ImageProp2={global.ASSETS.FOOD_IMG}
            ImageProp3={global.ASSETS.ALL_FOOD}
            ImageProp4={global.ASSETS.RESTAURANTS}
            title="Burger Farm"
           />
           </View>
            
        </ScrollView>

    )
}
const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        marginTop: "5@s",
        backgroundColor: "#FFFFFF",
    },
    normalText: {
        textAlign: "center",
        color: "#EEA734",
        marginTop: "10@s",
        fontSize: "10@s",
        fontFamily: global.FONT.REGULAR
    },
    Header_Container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "5@s",
        justifyContent: "space-evenly"
    },
    normalText1: {
        fontSize: "18@s",
        fontWeight: "300",
        color: "#010F07",
        // fontFamily:global.FONT.REGULAR,
        letterSpacing: "0.4@s",
        marginLeft: "70@s"
    },
    downBackImageStyle: {
        height: "12@s",
        width: "12@s",
        resizeMode: "contain",
        marginHorizontal: "4@s",
        // marginRight:"30@s",
        right: "20@s"
    },
    filterTextStyle: {
        color: "#010F07",
        fontSize: "14@s",
        fontWeight: "400",
        letterSpacing: "0.4@s"
    },
    wrapper: {
        alignItems: "center",
        height: '235@s',

    },
    slide1: {
        alignItems: "center",
        margin: "10@s",
        marginHorizontal: "20@s",
        bottom: "20@s"

    },
    FOODEY_IMG_Style: {
        height: "240@s",
        width: "330@s",
        resizeMode: "contain",
        // marginHorizontal:"10@s",
    },
    feature_Container_Text: {
        fontSize: "20@s",
        fontWeight: "600",
        fontFamily: global.FONT.MEDIUM,
        bottom: 20,
        color: "#010F07",
        marginHorizontal: "20@s"
    },
    feature_Container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "20@s"
    },

    ButtonTextStyle: {
        fontSize: "14@s",
        color: "#F8B64C",
        bottom: 50,
        fontWeight: "400",
        fontFamily: global.FONT.REGULAR
    },
    partner_Container_Text: {
        fontSize: "20@s",
        fontWeight: "600",
        fontFamily: global.FONT.MEDIUM,
        bottom: 28,
        color: "#010F07",

    },
    FlatList_Container_Style: {
        marginHorizontal: "15@s",
        marginBottom: "20@s",


    },
    image_style: {
        width: "200@s",
        height: "160@s",
        borderRadius: "10@s",
        // resizeMode:"contain",
        aspectRatio: "1@s",

    },
    title_Text_Style: {
        fontSize: "18@s",
        fontWeight: "300",
        marginLeft: "2@s",
        color: "#010F07",
        // fontFamily:global.FONT.REGULAR,
        marginTop: "5@s"

    },
    subtitle_Style: {
        marginLeft: "2@s",
        color: "#868686",
        fontSize: "14@s",
        fontWeight: "400",
        letterSpacing: "0.4@s"
    },
    FlatList_Container_Second: {
        marginLeft: "2@s",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10@s",
    },
    rating_style: {
        backgroundColor: "#EEA734",
        height: "23@s",
        width: "35@s",
        textAlign: "center",
        borderRadius: "5@s",
        color: "#FFFFFF",
        fontSize: "12@s",
        paddingTop: "5@s",
        fontWeight: "600"
    },
    timing_Style: {
        color: "#868686",
        fontSize: "13@s",
        fontWeight: "400"
    },
    image1_Style: {
        tintColor: "#868686",
        height: "4@s",
        width: "4@s",
        resizeMode: "contain"
    },
    charge_Style: {
        color: "#868686",
        fontSize: "12@s",
        fontWeight: "400",

    },
    Banner_Style: {
        height: "160@s",
        width: "320@s",
        marginTop: "8@s",
        alignSelf: "center",
        marginBottom: "10@s",

    },
    container_Third: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "18@s",
        // marginBottom: "10@s"
    },
    container_Third_Text_Style: {
        fontSize: "20@s",
        fontWeight: "600",
        fontFamily: global.FONT.MEDIUM,
        color: "#010F07",
    },
    container_Third_Button_Style: {
        fontSize: "14@s",
        color: "#F8B64C",
        fontWeight: "400",
        fontFamily: global.FONT.REGULAR,
        marginTop: "5@s"
    },
   

})

export default Homapage
