import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput, Linking } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';
import Button_Container from './components/Button_Container';
import SwiperComponent from './components/SwiperComponent';
import LottieFile from './LottieFiles'

const BrowseFood = () => {
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
  return (
    <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
      <Header3 
     HeaderImage={global.ASSETS.BackArrow}
     tittle="Browse Food"
    />
    <View style={styles.Container_First}>
    <SwiperComponent 
            ImageProp={global.ASSETS.ALL_EAG}
            ImageProp2={global.ASSETS.FOOD_IMG}
            ImageProp3={global.ASSETS.ALL_FOOD}
            ImageProp4={global.ASSETS.RESTAURANTS}
            title="Rich Table"
           />
     
    </View>
    <View style={{height:1,backgroundColor:"#ccc",marginTop:50}}/>   
    <View style={[styles.Container_First,{marginTop:15}]}>
    <SwiperComponent 
            ImageProp={global.ASSETS.ALL_FOOD}
            ImageProp2={global.ASSETS.FOOD_IMG}
            ImageProp3={global.ASSETS.ALL_FOOD}
            ImageProp4={global.ASSETS.RESTAURANTS}
            title="Nithai Kitchen"
           />
     
    </View>
    <View style={{height:1,backgroundColor:"#ccc",marginTop:50}}/> 
    <View style={[styles.Container_First,{marginTop:15}]}>
    <SwiperComponent 
            ImageProp={global.ASSETS.BAKERY_CAFE}
            ImageProp2={global.ASSETS.FOOD_IMG}
            ImageProp3={global.ASSETS.ALL_FOOD}
            ImageProp4={global.ASSETS.RESTAURANTS}
            title="Mayfeild Bakery & Cafe"
           />
     
    </View>
    <View style={{height:1,backgroundColor:"#ccc",marginTop:50}}/> 
    <View style={[styles.Container_First,{marginTop:15}]}>
    <SwiperComponent 
            ImageProp={global.ASSETS.ORANGE_BG}
            ImageProp2={global.ASSETS.FOOD_IMG}
            ImageProp3={global.ASSETS.ALL_FOOD}
            ImageProp4={global.ASSETS.RESTAURANTS}
            title="Orange Slices"
           />
     
    </View>
    <View style={{height:1,backgroundColor:"#ccc",marginTop:50}}/> 
    
    </ScrollView>
  
  )
}

export default BrowseFood

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
},
Container_First: {
    marginTop: "15@s",
    // marginHorizontal: "15@s",
    // backgroundColor:'red',
   width:"100%",
   height:"247@s",
  
},
})