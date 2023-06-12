import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef,useEffect } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import LottieFile from './LottieFiles'


const TopCategories = ({navigation}) => {
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


  const arrya=[
    {
      id:1,
      image:global.ASSETS.FAST_FOOD,
      title:"Fast Food",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.FAST_FOOD,
        title:"Fast Food"
    })
    },
    {
      id:2,
      image:global.ASSETS.BREAK_FAST,
      title:"Breakfast & \n Brunch",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.BREAK_FAST,
        title:"Breakfast & \n Brunch"
    })
    },
    {
      id:3,
      image:global.ASSETS.MEXI_IMG,
      title:"Mexican",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.BAKERY_IMG,
        title:"Mexican"
    })
    },
    {
      id:4,
      image:global.ASSETS.BAKERY_IMG,
      title:"Bakery",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.BAKERY_IMG,
        title:"Bakery"
    })

    },
    {
      id:5,
      image:global.ASSETS.DESE_IMG,
      title:"Deserts",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.DESE_IMG,
        title:"Deserts"
    })
    },
    {
      id:6,
      image:global.ASSETS.BURG_IMG,
      title:"Burgers",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.BURG_IMG,
        title:"Burgers"
    })
    },
    {
      id:7,
      image:global.ASSETS.MEXI_IMG,
      title:"The Halal Guys",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.MEXI_IMG,
        title:"The Halal Guys"
    })
        },
    {
      id:8,
      image:global.ASSETS.FAST_FOOD,
      title:"The franch fries",
      onpress:()=>navigation.navigate("SearchResult",{
        user:global.ASSETS.FAST_FOOD,
        title:"The franch fries"
    })
    },
  ]
  return (
    <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
    <View style={{marginHorizontal:10,flex:1,marginVertical:10}}>
      <View style={styles.search_Container}>
        <Image source={global.ASSETS.SEARCH_TAB} style={styles.search_Image_Style}/>
        <Text style={styles.search_Text_Style}>Search</Text>
      </View>
      <Text style={styles.Top_Text_Style}>Top Categories</Text>
      <FlatList 
        data={arrya}
        numColumns={2}
        keyExtractor={index => index.id}
        renderItem={({item})=>{
          return(
            <View style={styles.FlatList_Container}>
            <TouchableOpacity onPress={item.onpress}>
              <ImageBackground source={item.image}
              borderRadius={10}
               style={styles.ImageBackground_Style}>
                 <Text style={styles.title_Text_Style}>{item.title}</Text>
                 
               </ImageBackground>
               </TouchableOpacity>
            </View>
          )
        }}
      />
      </View>
    </ScrollView>
  )
}

export default TopCategories

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
   
},
search_Container:{
  flexDirection:"row",
  alignItems:"center",
  marginVertical:10,
  marginLeft:"15@s"
},
search_Image_Style:{
  height:"42@s",
  width:"42@s",
  tintColor:"#868686"
},
search_Text_Style:{
  fontSize:"24@s",
  color:"#010F07",
  fontWeight:"600",
  fontFamily:global.FONT.MEDIUM,
  top:"2@s",
  marginLeft:"18@s"
 
},
Top_Text_Style:{
  fontSize:"14@s",
  fontWeight:"400",
  fontFamily:global.FONT.REGULAR,
  letterSpacing:"0.18@s",
  color:"#010F07",
  marginHorizontal:"10@s",
  marginTop:"20@s",
  left:"2@s"
},
FlatList_Container:{
justifyContent:"center",
alignItems:"center",
alignSelf:"center",
marginHorizontal:"10@s",
marginVertical:"10@s"
},
ImageBackground_Style:{
  height:"160@s",
  width:"150@s",
  alignSelf:"center",
  // opacity:"0.2@s",
  justifyContent:"center",
  alignItems:"center"
},
title_Text_Style:{
  fontSize:"15@s",
  fontWeight:"300",
  color:"#FFFFFF",
  textAlign:"center",
  alignSelf:"center",
  
}
})