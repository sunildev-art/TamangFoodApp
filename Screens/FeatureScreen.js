import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header from './components/Header';
import LottieFile from './LottieFiles'

const FeatureScreen = ({navigation}) => {
    const[loader,setLoader] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
      setLoader(false)
      },2000)
      
    },[])
    if(loader){
      return (
      <LottieFile />
      )
    }

    const array3 = [
        {
            id: 1,
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
            onpress:()=>navigation.navigate("SingleRetaurents",{
                title:"Tacos Nanchas",
                image:global.ASSETS.TACOS_IMG
            })
        },
        {
            id: 2,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.barger,
            title: "McDonald's",
            rating: 4.5,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            onpress:()=>navigation.navigate("SingleRetaurents",{
                title:"McDonald's",
                image:global.ASSETS.barger
            })
        },
        {
            id: 3,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.EAG_IMG,
            title: "KFC Foods",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            onpress:()=>navigation.navigate("SingleRetaurents",{
                title:"KFC Foods",
                image:global.ASSETS.EAG_IMG
            })
        },
        {
            id: 4,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.FOODEYS,
            title: "Cafe MayFeild's",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            onpress:()=>navigation.navigate("SingleRetaurents",{
                title:"Cafe MayFeild's \n Cafe",
                image:global.ASSETS.FOODEYS
            })
        },
        {
            id: 5,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.STATE_BIRD,
            title: "Chinese",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            onpress:()=>navigation.navigate("SingleRetaurents",{
                title:"Chinese",
                image:global.ASSETS.STATE_BIRD
            })

        },
        {
            id: 6,
            image2: global.ASSETS.DOLLAR_IMG,
            image: global.ASSETS.COFFE_IMG,
            title: "McDonald's",
            rating: 4.3,
            timing: "25min",
            type1: "Chinese",
            type2: "American",
            charge: "Free",
            clockImage: global.ASSETS.FAST_DELIVERY,
            dotImage: global.ASSETS.oval,
            onpress:()=>navigation.navigate("SingleRetaurents",{
                title:"McDonald's",
                image: global.ASSETS.COFFE_IMG
            })
        },
    ]
    return (
        <View style={styles.main_container}>
            <StatusBar
                animated={true}
                backgroundColor="gray"
            />
            <Header
                tittle="Featured Partners"
            />
            <FlatList
                data={array3}
                keyExtractor={index => index.id}
                // horizontal={true}
                showsVerticalScrollIndicator={false}
                numColumns="2"
                renderItem={({ item }) => {
                    return (
                        <View style={styles.main_container}>
                        <TouchableOpacity onPress={item.onpress}>
                            <ImageBackground source={item.image}
                                borderRadius={20}
                                style={styles.ImageBackground_Style}>
                                <View style={styles.Container_First}>
                                    <Image source={item.clockImage} style={styles.clockImage_Style} />
                                    <Text style={styles.timing_Text_Style}>{item.timing}</Text>
                                </View>
                                <View style={styles.Container_Second}>
                                    <Image source={item.image2} style={styles.DOLLAR_IMG_Style} />
                                    <Text style={styles.charge_Text_Style}>{item.charge}</Text>
                                    <Text style={styles.rating_Text_Style}>{item.rating}</Text>
                                </View>

                            </ImageBackground>
                            </TouchableOpacity>
                            
                            <Text style={styles.title_Style}>{item.title}</Text>
                           
                            <View style={styles.Container_Third}>
                                <Text style={styles.type1_Text_Style}>{item.type1}</Text>
                                <Image source={item.dotImage} style={styles.dotImage_Style} />
                                <Text style={styles.type1_Text_Style}>{item.type2}</Text>
                            </View>

                        </View>

                    )
                }}
            />
        </View>
    )
}

export default FeatureScreen

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    ImageBackground_Style: {
        width: "165@s",
        height: "250@s",
        margin: "5@s",
          },
    Container_First: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "10@s",
        position: "absolute",
        bottom: "36@s"
    },
    clockImage_Style: {
        width: "18@s",
        height: "18@s",
        tintColor: "#FFFFFF",
        resizeMode: "contain"
    },
    timing_Text_Style: {
        fontSize: "12@s",
        color: "#FFFFFF",
        marginLeft: "5@s"
    },
    Container_Second: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "12@s",
        top: "218@s"

    },
    DOLLAR_IMG_Style: {
        width: "15@s",
        height: "15@s",
        tintColor: "#D8D8D8",
        resizeMode: "contain"

    },
    charge_Text_Style: {
        fontSize: "12@s",
        color: "#FFFFFF",
        marginRight: "55@s",
        fontWeight: "400"
    },
    rating_Text_Style: {
        backgroundColor: "#EEA734",
        color: "#FFFFFF",
        height: "18@s",
        width: "28@s",
        textAlign: "center",
        borderRadius: "5@s",
        marginRight: "12@s"

    },
    title_Style: {
        fontSize: "18@s",
        marginLeft: "8@s",
        marginTop: "10@s",
        fontWeight: "300",
        color: "#010F07",
    },
    Container_Third: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginRight: "5@s",
        marginBottom: "10@s",
    },
    type1_Text_Style: {
        fontSize: "15@s",
        fontWeight: "400",
        color: "#868686",
       
    },
    dotImage_Style:{
       tintColor:"#868686",
       width:"4@s",
       height:"4@s"
    }
})