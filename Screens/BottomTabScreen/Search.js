import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import Header2 from '../components/Header2';
const Search = ({navigation}) => {
  const [search,setSearch] = useState("")

  const arrya=[
    {
      id:1,
      image:global.ASSETS.THE_HALAL,
      title:"The Halal Guys",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
    {
      id:2,
      image:global.ASSETS.SAND_WICH,
      title:"Popeyes 1426 Flmst",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
    {
      id:3,
      image:global.ASSETS.YERBA_IMG,
      title:"Mixt-Yerba Buena",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
    {
      id:4,
      image:global.ASSETS.SPLIT_IMG,
      title:"Split Bread-Russian",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
    {
      id:5,
      image:global.ASSETS.THE_HALALC_IMG,
      title:"The Halalc",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
    {
      id:6,
      image:global.ASSETS.UNCLE_BOY,
      title:"The Sandwiches",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
    {
      id:7,
      image:global.ASSETS.MEXI_IMG,
      title:"The Halal Guys",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
    {
      id:8,
      image:global.ASSETS.FAST_FOOD,
      title:"The franch fries",
      doller:"$",
      dot:global.ASSETS.oval,
      type:"Chinese"
    },
  ]
  return (
    <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
   <Text style={styles.search_Text_Style}>Search</Text>
   <View style={styles.search_Container}>
    <Image source={global.ASSETS.SEARCH_TAB} style={styles.search_Image_Style}/>
    <TextInput 
      style={styles.search_input_Style}
      placeholder="Search with foodly"
      placeholderTextColor="#868686"
      value={search}
      onChangeText={(text)=>setSearch(text)}
    />
   </View>
   <Text style={styles.Top_Text_Style}>Top Restaurants</Text>
   <FlatList 
    data={arrya}
    numColumns={2}
    keyExtractor={index=>index.id}
    renderItem={({item})=>{
      return(
        <View style={styles.FlatList_Container}>
        <TouchableOpacity onPress={()=>navigation.navigate("TopCategories")}>
          <Image source={item.image} style={styles.image_Style}/>
          <Text style={styles.title_Text_Style}>{item.title}</Text>
          </TouchableOpacity>
          <View style={styles.FlatList_Container_Second}>
            <Text style={styles.doller_Text_Style}>{item.doller}</Text>
            <Image source={item.dot} style={styles.dot_Image_Style}/>
            <Text style={styles.type_Text_Style}>{item.type}</Text>
          </View>
        </View>
      )
    }}
   />
    </ScrollView>
  )
}

export default Search

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
},
search_Text_Style:{
  fontSize:"26@s",
  fontWeight:"600",
  fontFamily:global.FONT.MEDIUM,
  letterSpacing:"0.18@s",
  color:"#010F07",
  marginHorizontal:"12@s",
  marginTop:"30@s"
},
search_Container:{
  width:"320@s",
  height:"48@s",
  backgroundColor:"#FBFBFB",
  flexDirection:"row",
  alignItems:"center",
  marginTop:"10@s",
  alignSelf:"center",
 elevation:"2@s",
 borderRadius:"10@s",
 marginBottom:"10@s"
},
search_Image_Style:{
  height:"25@s",
  width:"25@s",
  resizeMode:"contain",
  marginLeft:"12@s",
  tintColor:"#868686"
},
search_input_Style:{
  fontSize:"13@s",
  color:"#010F07",
  paddingVertical:"10@s",
 paddingLeft:"5@s"
},
Top_Text_Style:{
  fontSize:"14@s",
  fontWeight:"400",
  fontFamily:global.FONT.REGULAR,
  letterSpacing:"0.18@s",
  color:"#010F07",
  marginHorizontal:"12@s",
  marginTop:"30@s",
  left:"2@s"
},
FlatList_Container:{
  // marginTop:"15@s",
  marginHorizontal:"12@s",
  marginVertical:"5@s"
 
},
image_Style:{
height:"140@s",
width:"150@s",
resizeMode:"contain",
// borderRadius:"10@s"
},
title_Text_Style:{
  fontSize:"14@s",
  marginTop:"10@s",
  color:"#868686",
  fontWeight:"300",
  fontFamily:global.FONT.REGULAR,
marginLeft:"5@s"
},
FlatList_Container_Second:{
  flexDirection:"row",
  alignItems:"center",
  // justifyContent:"space-around",
  marginLeft:"3@s",  
  // marginBottom:"10@s"
},
doller_Text_Style:{
  fontSize:"13@s",
  fontWeight:"400",
  // fontFamily:global.FONT.REGULAR,
marginRight:"13@s",
color:"#868686",
marginLeft:"2@s"
  
},
dot_Image_Style:{
  height:"5@s",
  width:"5@s",
  resizeMode:"contain",
  marginRight:"13@s"
},
type_Text_Style:{
  fontSize:"13@s",
  fontWeight:"400",
  // fontFamily:global.FONT.REGULAR,
marginRight:"13@s",
color:"#868686"
}
})