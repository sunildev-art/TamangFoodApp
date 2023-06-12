import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Swiper from 'react-native-swiper'
import { StatusBar } from 'react-native';




const Favorite = ({ navigation }) => {
    const [value, setValue] = useState("")

    const swiperef = useRef(null)

    const handlersubmit = index => {
        setValue(index)
    }
    // console.log(value)
    return (
        <ScrollView style={styles.container}>
             <StatusBar
        animated={true}
        backgroundColor="gray"
        
       
       
      />
            <View style={styles.container_first}>
                <Image source={global.ASSETS.LOGO} style={styles.LogoStyle} />
                <Text style={styles.logoTextStyle}>Tamang {'\n'} FoodService</Text>
            </View>

            <View style={styles.wrapper} >

                <Swiper
                    onIndexChanged={t => handlersubmit(t)}
                    ref={swiperef}
                    loop={false}
                    activeDot={
                        <View
                            style={{
                                backgroundColor: '#22A45D',
                                width: 15,
                                height: 8,
                                borderRadius: 8,
                                marginLeft: 3,
                                marginRight: 3,
                            }}
                        />
                    }
                    dot={
                        <View
                            style={{
                                backgroundColor: 'rgba(0,0,0,.2)',
                                width: 10,
                                height: 8,
                                borderRadius: 8,
                                marginLeft: 3,
                                marginRight: 3,
                            }}
                        />
                    }

                >


                    <View style={styles.slide1}>
                        <Image source={global.ASSETS.PLAT_ITEM} style={styles.PLAT_ITEM_style} />
                        <Text style={styles.FavoriteTextStyle}>All your favorites</Text>
                        <Text style={styles.FavoriteBioStyle}>Order from the best local restaurants {'\n'} with easy, on demand delivery.</Text>
                    </View>
                    <View style={styles.slide2}>

                        <Image source={global.ASSETS.BIKE} style={styles.bikeImageStyle} />
                        <Text style={styles.BikeTextStyle}>Free delivery offers</Text>
                        <Text style={styles.BikeBioStyle}>free delivery for new customers via Apple Pay {'\n'} and other payment mathods.</Text>

                    </View>
                    <View style={styles.slide3}>
                        <Image source={global.ASSETS.PEZZAITEM} style={styles.pizzaImageStyle} />
                        <Text style={styles.pizzaTextStyle}>Choose your food</Text>
                        <Text style={styles.pizzaBioStyle}>Easily find your type of food craving and you'll  {'\n'} get delivery in wide range.</Text>

                    </View>
                </Swiper>
            </View>



            <TouchableOpacity
                onPress={() => {
                    value == "2" ?
                        navigation.navigate('SignUp')
                        : swiperef.current?.scrollBy(1)
                }}
                style={styles.buttonContainer}

            >
                <Text style={styles.buttonTextStyle}>GET STARTED</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginBottom:"15@s"
    },
    container_first: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: '40@s',
        marginHorizontal: "25@s",
        justifyContent: "space-around"
    },
    LogoStyle: {
        height: "65@s",
        width: "65@s",

    },
    logoTextStyle: {
        color: "#000000",
        fontSize: "32@s",
        fontWeight: "700",
        textAlign: "center",
        marginHorizontal: "10@s"

    },
    container_second: {
        justifyContent: "center",
        alignItems: "center",

    },
    PLAT_ITEM_style: {
        height: "300@s",
        width: '350@s',
        resizeMode: "contain",
        transform: [{ rotate: "-5deg" }],
        alignSelf: "center"


    },
    FavoriteTextStyle: {
        fontSize: "26@s",
        color: "#3A3A3A",
        fontFamily: global.FONT.BOLD,
        fontWeight: "700",
        marginTop: "20@s",
        textAlign: "center"

    },
    FavoriteBioStyle: {
        color: "#868686",
        textAlign: "center",
        marginTop: "20@s",
        fontSize: "13@s",
        lineHeight: "18@s",
        fontFamily: global.FONT.REGULAR,

    },
    buttonContainer: {
        backgroundColor: "#EEA734",
        height: "45@s",
        width: "320@s",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10@s",
        alignSelf: "center",
        // position: 'absolute',
        // bottom: "25@s"
    },
    buttonTextStyle: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: "12@s",
        fontWeight: "700",
        fontFamily: global.FONT.BOLD
    },
    wrapper: {
        width: "350@s",
        height: "480@s"
    },
    slide2: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "35@s"
    },
    bikeImageStyle: {
        height: "270@s",
        width: '320@s',
        resizeMode: "contain",
        alignSelf: "center"
    },
    BikeTextStyle: {
        fontSize: "26@s",
        color: "#3A3A3A",
        fontFamily: global.FONT.BOLD,
        fontWeight: "700",
        marginTop: "20@s",
        textAlign: "center"
    },
    BikeBioStyle: {
        color: "#868686",
        textAlign: "center",
        marginTop: "20@s",
        fontSize: "13@s",
        lineHeight: "18@s",
        fontFamily: global.FONT.REGULAR,
    },
    slide3: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "35@s"
    },
    pizzaImageStyle: {
        height: "270@s",
        width: '320@s',
        resizeMode: "contain",
        alignSelf: "center"
    },
    pizzaTextStyle: {
        fontSize: "26@s",
        color: "#3A3A3A",
        fontFamily: global.FONT.BOLD,
        fontWeight: "700",
        marginTop: "20@s",
        textAlign: "center"
    },
    pizzaBioStyle: {
        color: "#868686",
        textAlign: "center",
        marginTop: "20@s",
        fontSize: "12@s",
        lineHeight: "18@s",
        fontFamily: global.FONT.REGULAR,
    }


})
export default Favorite

