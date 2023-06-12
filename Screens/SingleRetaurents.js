import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react';

import global from '../global';
import { ScaledSheet } from 'react-native-size-matters';
import Swiper from 'react-native-swiper'
import CommonScreen from './components/CommonScreen';


const SingleRetaurents = ({navigation,route}) => {
    const [value, setValue] = useState("Most Populers")
 
    const {title,image} = route.params || {};

    const array = [
        {
            id: 1,
            image: global.ASSETS.SAND_WICH,
            title: "Cookie Sandwich",
            subtitle: "St Georgece Terrace,Perth",
            rating: 4.5,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery",
            type1: "Chinese",
            onpress:()=>navigation.navigate("AddToOrder",{
                user:global.ASSETS.SAND_WICH,
                title:"Coockie Sandwich"
            })
        },
        {
            id: 2,
            image: global.ASSETS.CHOW_IMG,
            title: "Chow Fun",
            subtitle: "St Georgece Terrace,Perth",
            rating: 4.5,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery",
            type1: "Chinese",
            onpress:()=>navigation.navigate("AddToOrder",{
                user:global.ASSETS.CHOW_IMG,
                title:"Chow Fun"
            })
        },
        {
            id: 3,
            image: global.ASSETS.DESE_IMG,
            title: "Dim Suip world",
            subtitle: "Dim Suip world",
            rating: 4.5,
            timing: "25min",
            image1: global.ASSETS.oval,
            charge: "Free delivery",
            type1: "Chinese",
            onpress:()=>navigation.navigate("AddToOrder",{
                user:global.ASSETS.DESE_IMG,
                title:"Dim Suip world"
            })
        },
    ]
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}
        showsVerticalScrollIndicator={false}>
            <View style={styles.swiperView}>
                <Swiper
                    autoplay={false}
                    activeDot={<View style={{
                        backgroundColor: '#FFFFFF',
                        width: 10,
                        height: 6,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                        left: 125,
                    }} />}
                    dot={<View style={{
                        backgroundColor: '#FFFFFF4D',
                        width: 10,
                        height: 6,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                        left: 125
                    }} />

                    }
                    style={styles.wrapper} showsButtons={false}>

                    <View style={styles.slide1}>
                        <Image style={styles.foodImg}
                            source={image} />
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.foodImg}
                            source={global.ASSETS.THE_HALAL} />
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.foodImg}
                            source={global.ASSETS.EAT_IMG} />
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.foodImg}
                            source={global.ASSETS.FAST_FOOD} />
                    </View>
                </Swiper>
            </View>

            <View style={styles.backsearchView}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.bachImg}
                        source={global.ASSETS.BackArrow} />
                </TouchableOpacity>
                <View style={styles.shereView}>
                    <Image style={styles.shereImg}
                        source={global.ASSETS.SHARE_IMG} />
                    <Image style={styles.searchImg}
                        source={global.ASSETS.SEARCH_TAB} />
                </View>
            </View>
            <Text style={styles.mayfieldText}>{title}</Text>
            <View style={styles.fortextView}>
                <Text style={styles.chineseText}>$$</Text>
                <Image style={styles.dotImg}
                    source={global.ASSETS.oval} />
                <Text style={styles.chineseText}>Chinese</Text>
                <Image style={styles.dotImg}
                    source={global.ASSETS.oval} />
                <Text style={styles.chineseText}>American</Text>
                <Image style={styles.dotImg}
                    source={global.ASSETS.oval} />
                <Text style={styles.chineseText}>Deshi food</Text>
            </View>
            <View style={styles.threetextView}>
                <Text style={styles.ratingText}>4.3</Text>
                <Image style={styles.starImg}
                    source={global.ASSETS.Star} />
                <Text style={styles.ratingText}>200+ Ratings</Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",


                marginTop: 20,
                marginHorizontal: 15
            }}>
                <Image source={global.ASSETS.DOLLAR_IMG} style={styles.Doller_Image} />
                <Text style={styles.Free_Text}>Free</Text>
                <Image source={global.ASSETS.YELLOW_TIMER} style={styles.Doller_Image} />
                <Text style={styles.Free_Text}>25</Text>
                <TouchableOpacity style={styles.Button_Conatiner}>
                    <Text style={styles.Button_Text_Style}>TAKE AWAY</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row", alignItems: "center",
                justifyContent: "space-around",
                right: 27,
                // marginBottom:15
            }}>
                <Text style={styles.common_Text}>Delivery</Text>
                <Text style={styles.common_Text1}>Minute</Text>
            </View>
            <Text style={{
                fontSize: 20,
                color: "#868686",
                marginHorizontal: 25,
                fontWeight: "400"
            }}>Feature Items</Text>
            <FlatList
                data={array}
                keyExtractor={index => index.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.FlatList_Container_Style}>
                           <TouchableOpacity onPress={item.onpress}>
                           <Image style={styles.image_style} source={item.image} />
                           </TouchableOpacity>
                            <Text style={styles.title_Text_Style}>{item.title}</Text>

                            <View style={styles.FlatList_Container_Second}>
                                {/* <Text style={styles.rating_style}>{item.rating}</Text> */}
                                <Text style={styles.timing_Style}>$$</Text>
                                <Image style={styles.image1_Style} source={item.image1} />
                                <Text style={styles.charge_Style}>{item.type1}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <ScrollView horizontal={true} style={{ marginBottom: 20 }} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.Button1_Conatiner} onPress={(text) => setValue("Chikan & Lamb")}>
                    <Text style={styles.Button1_Conatiner_Text_Style}>
                        Chikan & Lamb
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button1_Conatiner} onPress={() => setValue("Seafood")}>
                    <Text style={styles.Button1_Conatiner_Text_Style}>
                        Seafood
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button1_Conatiner} onPress={() => setValue("Appetizers")}>
                    <Text style={styles.Button1_Conatiner_Text_Style}>
                        Appetizers
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button1_Conatiner} onPress={() => setValue("Dim sum")}>
                    <Text style={styles.Button1_Conatiner_Text_Style}>
                        Dim sum
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <Text style={styles.mostPopuler_Style}>{value}</Text>
            <CommonScreen
                imageprop={global.ASSETS.SAND_WICH}
                Title="Cookie Sandwich"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 12, marginBottom: 10, left: 5,elevation:1 }} />

            <CommonScreen
                imageprop={global.ASSETS.BARGERS_IMG}
                Title="Combo Burger"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 12, marginBottom: 10, left: 5,elevation:1 }} />
            <CommonScreen
                imageprop={global.ASSETS.COMBO_IMG}
                Title="Combo Sandwich"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
            <Text style={{fontSize:22,
            color:"#010F07",
            marginTop:5,
            fontWeight:"300",
            marginBottom:15,
            marginLeft:25
            
            }}>Sea Food</Text>
            <CommonScreen
                imageprop={global.ASSETS.EAT_IMG}
                Title="Oyster Dish"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 12, marginBottom: 10, left: 5,elevation:1 }} />
            <CommonScreen
                imageprop={global.ASSETS.OYSTER_IMG}
                Title="Oyster On Ice"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 12, marginBottom: 10, left: 5,elevation:1 }} />
            <CommonScreen
                imageprop={global.ASSETS.YERBA_IMG}
                Title="Fried Rice On Pot"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
            <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 12, marginBottom: 10, left: 5,elevation:1 }} />
            
        </ScrollView>
    )
}

export default SingleRetaurents

const styles = ScaledSheet.create({
    swiperView: {
        height: '280@s',

    },
    foodImg: {
        width: '350@s',
        height: '280@s',

    },
    backsearchView: {
        flexDirection: 'row',
        width: '320@s',
        position: 'absolute',
        marginTop: '50@s',
        marginHorizontal: '20@s',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bachImg: {
        height: '15@s',
        width: '15@s',
        tintColor: '#FFFFFF',
        resizeMode: "contain"
    },

    shereView: {
        flexDirection: 'row',
        width: '60@s',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    shereImg: {
        height: '30@s',
        width: '18@s'
    },
    searchImg: {
        height: '30@s',
        width: '25@s',
        tintColor: 'white'
    },
    mayfieldText: {
        fontSize: '24@s',
        color: 'black',
        marginHorizontal: 20,
        width: '200@s',
    },
    fortextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '250@s',
        marginHorizontal: '20@s',

    },
    dotImg: {
        height: '5@s',
        width: '5@s',
        tintColor: "#868686"
    },
    threetextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '120@s',
        marginHorizontal: '20@s',
        marginTop: '10@s'
    },
    ratingText: {
        fontSize: '12@s',
        // marginHorizontal:"5@s",
        color: "#868686",

    },
    starImg: {
        width: '10@s',
        height: '11@s',
        resizeMode: 'contain',

    },
    chineseText: {
        color: "#868686",
        fontSize: "13@s",
        fontWeight: "400"
    },
    Doller_Image: {
        height: "16@s",
        width: "16@s",
        tintColor: "#EEA734",
        resizeMode: "contain",
        marginLeft: "18@s",
        right: "18@s",
        bottom: "14@s"
    },
    Free_Text: {
        fontSize: "16@s",
        color: "#868686",
        marginRight: "30@s",
        fontWeight: "400",
        marginRight: "18@s",
        right: "18@s",

        bottom: "14@s"

    },
    YELLOW_Image: {
        height: "11@s",
        width: "10@s",
        tintColor: "#EEA734",
        resizeMode: "contain",
        marginRight: "14@s",
        right: "18@s",

    },
    Button_Conatiner: {
        height: "38@s",
        width: "113@s",
        borderWidth: "1@s",
        borderColor: "#EEA734",
        borderRadius: "8@s",
        marginRight: "18@s",
        alignItems: "center",
        justifyContent: "center",
        left: "20@s",
        bottom: "8@s"
    },
    Button_Text_Style: {
        color: "#EEA734",
        fontSize: "12@s",
        fontWeight: "600",
        fontFamily: global.FONT.MEDIUM
    },
    common_Text: {
        fontSize: "12@s",
        color: "#868686",
        bottom: "20@s",
        fontWeight: "400",
        bottom: "22@s",
        right: "2@s"
    },
    common_Text1: {
        fontSize: "12@s",
        color: "#868686",
        bottom: "20@s",
        fontWeight: "400",
        bottom: "22@s",
        right: "82@s"
    },
    FlatList_Container_Style: {
        marginHorizontal: "15@s",
        marginBottom: "20@s",
        marginTop: "15@s"


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
        justifyContent: "space-evenly",
        marginTop: "5@s",
        right: "27@s"
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
        resizeMode: "contain",
        right: "15@s"
    },
    charge_Style: {
        color: "#868686",
        fontSize: "12@s",
        fontWeight: "400",
        right: "30@s"
    },
    Button1_Conatiner: {
        //    height:"32@s",
        //    width:"120@s",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "15@s",
        marginBottom: "10@s"
    },
    Button1_Conatiner_Text_Style: {
        fontSize: "24@s",
        color: "#868686",
        fontWeight: "600",
        // color:text ? "red" :"white"

    },
    mostPopuler_Style: {
        fontSize: "20@s",
        color: "#010F07",
        marginHorizontal: "15@s",
        bottom: "10@s",
        fontWeight: "300",
        marginBottom: "5@s"
    },
    Cookie_Sandwich_Image_Style: {
        height: "110@s",
        width: "110@s",
        resizeMode: "contain",
        // borderRadius:"8@s"
    }

})