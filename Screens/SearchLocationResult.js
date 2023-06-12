import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput, Linking, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';
import Button_Container from './components/Button_Container';
import BottomSheet from 'react-native-simple-bottom-sheet';

const SearchLocationResult = () => {
  const [value,setValue] = useState("0")
const [imageChange,setImageChange] = useState(0)

  const array = [
    {
      id: 1,
      image: global.ASSETS.KITCHAN_IMG,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      customImage: global.ASSETS.STATE_BIRD,
      title: "Nethai Kitchen",
      Status:"1",
      customTitle:"State Bird",

    },
    {
      id: 2,
      image: global.ASSETS.LAZY_IMG,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      customImage:global.ASSETS.PETIT_CREEN,
      title: "Lazy Bear",
      Status:"1",
      customTitle:"Petit Cream"
    },
    {
      id: 3,
      image: global.ASSETS.STATE_BIRD,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "State Bird",
      Status:"2",
      customImage: global.ASSETS.KITCHAN_IMG,
      customTitle:"Nathia Kitchen"
    },
    {
      id: 4,
      image: global.ASSETS.PETIT_CREEN,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "Petit Cream",
      Status:"2",
      customImage: global.ASSETS.LAZY_IMG,
      customTitle:"Lazy King"
    },
    {
      id: 5,
      image: global.ASSETS.RICH_TABLE,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "Rich Table",
      Status:"3",
      customImage:global.ASSETS.RICH_TABLE,
    },
    {
      id: 6,
      image: global.ASSETS.Cotogna,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "Cotogna",
      Status:"3",
      customImage:global.ASSETS.Cotogna,
    },

  ]
  const array2 = [
  {
      id: 1,
      image: global.ASSETS.RICH_TABLE,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "Rich Table",
      Status:"3",
    },
    {
      id: 2,
      image: global.ASSETS.Cotogna,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "Cotogna",
      Status:"3",
    },
    {
      id: 3,
      image: global.ASSETS.STATE_BIRD,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "State Bird",
      Status:"2",
      customImage: global.ASSETS.KITCHAN_IMG,
      customTitle:"Nathia Kitchen"
    },
    {
      id: 4,
      image: global.ASSETS.PETIT_CREEN,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      title: "Petit Cream",
      Status:"2",
      customImage: global.ASSETS.LAZY_IMG,
      customTitle:"Lazy King"
    },
        {
      id: 5,
      image: global.ASSETS.KITCHAN_IMG,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      customImage: global.ASSETS.STATE_BIRD,
      title: "Nethai Kitchen",
      Status:"1",
      

    },
    {
      id: 6,
      image: global.ASSETS.LAZY_IMG,
      image1: global.ASSETS.oval,
      image2: global.ASSETS.DOLLAR_WHITE,
      image3: global.ASSETS.FAST_DELIVERY,
      customImage:global.ASSETS.PETIT_CREEN,
      title: "Lazy Bear",
      Status:"1",
     
    },

  ]
  return (
    <View style={styles.main_container}>
      <ImageBackground source={global.ASSETS.MAP_IMG} style={styles.ImageBackground_Style}>
        <View style={styles.img_Container}>
          <Image source={global.ASSETS.Backbg} style={styles.backbg_Img_Style} />
          <Image source={global.ASSETS.Searchbg} style={styles.backbg_Img_Style} />
        </View>
      </ImageBackground>

      <BottomSheet
        sliderMinHeight={400}
        sliderMaxHeight={Dimensions.get('window').height * 0.6}
        //  outerContentStyle={1000}
        isOpen>
        <View style={{ flex: 1, }}>
          <Text style={styles.header_Text_Style}>Top Pick Restaurants</Text>
          <View style={styles.Button_Container}>
            <TouchableOpacity style={[styles.Burger_button_style, { width: 110,
             backgroundColor:value==="1" ?  "rgba(240, 186, 76, 0.2)":"rgba(241, 241, 241, 1)"
             }]} onPress={()=>{setValue("1"),setImageChange(0)}}>
              <Text style={[styles.Burger_button_Text_style, {
               color:value==="1" ?  "#EEA734" :"#868686"
              }]}>BURGERS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Burger_button_style,{
               backgroundColor:value==="2" ?  "rgba(240, 186, 76, 0.2)":"rgba(241, 241, 241, 1)"
            }]}  onPress={()=>{setValue("2"),setImageChange(1)}}>
              <Text style={[styles.Burger_button_Text_style, {
                   color:value==="2" ?  "#EEA734" :"#868686"
              }]}>BRUNCH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Burger_button_style, { width: 120,
             backgroundColor:value==="3" ?  "rgba(240, 186, 76, 0.2)":"rgba(241, 241, 241, 1)"
             }]}  onPress={()=>{setValue("3"),setImageChange(2)}}>
              <Text style={[styles.Burger_button_Text_style, {
                color:value==="3" ?  "#EEA734" :"#868686"
              }]}>BREAKFAST</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "#ccc", marginTop: 20, opacity: 0.4 }} />

        </View>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={imageChange === 2 ? array2 : array}
          keyExtractor={index => index.id}
          renderItem={({ item }) => {
           
            return (
              <View style={styles.FlatList_Container}>
                <TouchableOpacity onPress={item.onPress}>
                  <ImageBackground source={imageChange === 1 ?  item.customImage : item.image  } style={styles.main_Image_Style} resizeMode="contain">
                    <View style={styles.FlatList_Container_Second}>
                      <Image source={item.image3} style={styles.timing_Image_Style} />
                      <Text style={styles.Timing_Text_Style}>25min </Text>
                    </View>
                    <View style={[styles.FlatList_Container_Second, { bottom: 30 }]}>
                      <Image source={item.image2} style={[styles.timing_Image_Style, { width: 18, height: 18, left: 3 }]} />
                      <Text style={[styles.Timing_Text_Style, { top: 5, left: 5 }]}>Free </Text>
                      <Text style={styles.rating_Text_Style}>4.5</Text>
                    </View>
                  </ImageBackground>
                  <Text style={styles.title_Style}>{imageChange === 0 ? item.title : item.customTitle}</Text>
                  <View style={[styles.FlatList_Container_Third,{}]}>
                    <Text style={styles.Subtitle_Text_Style}>Chinese</Text>
                    <Image source={item.image1} style={styles.dot_Img_Style} />
                    <Text style={styles.Subtitle_Text_Style}>American</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </BottomSheet>

    </View>
  )
}

export default SearchLocationResult

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  Container_First: {
    marginTop: "20@s",
    marginHorizontal: "120@s",
    backgroundColor: '#FFFFFF',
    flex: 1,
    //   borderTopEndRadius:"20@s",
    //   borderTopStartRadius:"20@s",
    //   bottom:"20@s"
  },
  ImageBackground_Style: {
    width: "350@s",
    height: "335@s"
  },
  backbg_Img_Style: {
    height: "38@s",
    width: "38@s",

  },
  img_Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "20@s",
    marginTop: "25@s"
  },
  header_Text_Style: {
    fontSize: "24@s",
    color: "#101F07",
    fontWeight: "600",

  },
  Button_Container: {
    marginTop: "15@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  Burger_button_style: {
    width: "90@s",
    height: "39@s",
    backgroundColor: "rgba(240, 186, 76, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "19@s",

  },
  Burger_button_Text_style: {
    fontSize: "12@s",
    letterSpacing: "1@s",
    color: "#EEA734",
    fontWeight: "600",

  },
  FlatList_Container: {
    marginTop: "12@s",
    marginHorizontal: "6@s"
  },
  main_Image_Style: {
    width: "143@s",
    height: "220@s",
    resizeMode: "contain"
  },
  FlatList_Container_Second: {
    flexDirection: "row",
    position: "absolute",
    bottom: "50@s",
    marginHorizontal: "10@s",

  },
  timing_Image_Style: {
    width: "20@s",
    height: "20@s",
    marginRight: "5@s",
    resizeMode: "contain"
  },
  Timing_Text_Style: {
    fontSize: "12@s",
    fontWeight: "400",
    color: "#FFFFFF",
    top: "8@s"
  },
  rating_Text_Style: {
    color: "#FFFFFF",
    fontSize: "12@s",
    fontWeight: "600",
    height: "20@s",
    width: "36@s",
    backgroundColor: "#EEA734",
    textAlign: "center",
    borderRadius: 6,
    left: "30@s",
    top: "5@s"
  },
  title_Style: {
    fontSize: "20@s",
    fontWeight: "300",
    color: "#010F07",
    left: "2@s"
  },
  FlatList_Container_Third: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10@s",
    // left:"3@s",
    justifyContent: "space-between",
    // marginBottom:"20@s"
  },
  Subtitle_Text_Style: {
    fontSize: "14@s",
    fontWeight: "400",
    color: "#868686",
    left: 2

  },
  dot_Img_Style:{
    height:"5@s",
    width:"5@s",
    resizeMode:"contain",
    top:5
  }
})












