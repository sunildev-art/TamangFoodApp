import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header2 from './components/Header2';

const Filter = () => {
const [All,setALL] = useState ('4')
const [Deit,setDiet] = useState ('1')
const [doller,setDoller] = useState ('1')

    const array=[
        {
            id:1,
            text:"$"
        },
        {
            id:2,
            text:"$$"
        },
        {
            id:3,
            text:"$$$"
        },
        {
            id:4,
            text:"$$$$"
        },
        {
            id:5,
            text:"$$$$$"
        },
        {
            id:6,
            text:"$$$$$$"
        },
    ]

  return (
    <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
      <Header2 
        HeaderImage={global.ASSETS.BackArrow}
        tittle="Filters"
      />
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:18,
        marginVertical:5,
        
      }}>
        <Text style={styles.CATEGORIES_Text_Style}>CATEGORIES</Text>
       <TouchableOpacity >
       <Text style={styles.Clear_Text_Style}>CLEAR ALL</Text>
       </TouchableOpacity>
      </View>
      <View style={styles.button_Container_First}>
      <TouchableOpacity onPress={() => setALL("1")}>
      <Text style={[styles.ALL_Text_Style,{
        backgroundColor:All ==="1" ? "#EEA734" : "#F1F1F1",
        color:All == "1" ? "white" :"#868686"
      }]}>ALL</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => setALL("2")}>
      <Text style={[styles.BRUNCH_Text_Style,{
         backgroundColor:All ==="2" ? "#EEA734" : "#F1F1F1",
        color:All == "2" ? "white" :"#868686"
      }]}>BRUNCH</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => setALL("3")}>
     <Text style={[styles.Dinners_Text_Style,{
         backgroundColor:All ==="3" ? "#EEA734" : "#F1F1F1",
        color:All == "3" ? "white" :"#868686"
     }]}>DINNER</Text>
     </TouchableOpacity>
      
      </View>
      <View style={styles.button_Container_Second}>
      <TouchableOpacity onPress={() => setALL("4")}>
      <Text style={[styles.BURGER_Text_Style,{
         backgroundColor:All ==="4" ? "#EEA734" : "#F1F1F1",
        color:All == "4" ? "white" :"#868686"
      }]}>BURGER</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setALL("5")}>
      <Text style={[styles.CHINESE_Text_Style,{
         backgroundColor:All ==="5" ? "#EEA734" : "#F1F1F1",
        color:All == "5" ? "white" :"#868686"
      }]}>CHINESE</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => setALL("6")}>
     <Text style={[styles.PIZZA_Text_Style,{
        backgroundColor:All ==="6" ? "#EEA734" : "#F1F1F1",
        color:All == "6" ? "white" :"#868686"
     }]}>PIZZA</Text>
     </TouchableOpacity>
      
      </View>
      <View style={styles.button_Container_Third}>
      <TouchableOpacity  onPress={() => setALL("7")}>
      <Text style={[styles.BURGER_Text_Style,{
          backgroundColor:All ==="7" ? "#EEA734" : "#F1F1F1",
        color:All == "7" ? "white" :"#868686"
      }]}>SALADS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setALL("8")}>
      <Text style={[styles.CHINESE_Text_Style,{
         backgroundColor:All ==="8" ? "#EEA734" : "#F1F1F1",
        color:All == "8" ? "white" :"#868686"
      }]}>SOUPS</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => setALL("9")}>
     <Text style={[styles.PIZZA_Text_Style,{
         backgroundColor:All ==="9" ? "#EEA734" : "#F1F1F1",
        color:All == "9" ? "white" :"#868686"
     }]}>BREAKFAST</Text>
     </TouchableOpacity>
      
      </View>
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:18,
        marginVertical:5,
        
      }}>
        <Text style={styles.Deitry_Text_Style}>DIETRY</Text>
       <TouchableOpacity>
       <Text style={[styles.Clear_Text_Style]}>CLEAR ALL</Text>
       </TouchableOpacity>
      </View>
      <View style={styles.button_Container_FIFTH}>
      <TouchableOpacity onPress={() => setDiet("1")}>
      <Text style={[styles.ALL_Text_Style,{
        backgroundColor:Deit ==="1" ? "#EEA734" : "#F1F1F1",
        color:Deit == "1" ? "white" :"#868686"
      }]}>ANY</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDiet("2")}>
      <Text style={[styles.BRUNCH_Text_Style,{
        backgroundColor:Deit ==="2" ? "#EEA734" : "#F1F1F1",
        color:Deit == "2" ? "white" :"#868686"
      }]}>VEGETARIAN</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => setDiet("3")}>
     <Text style={[styles.Dinners_Text_Style,{
         backgroundColor:Deit ==="3" ? "#EEA734" : "#F1F1F1",
        color:Deit == "3" ? "white" :"#868686"
     }]}>VEGAN</Text>
     </TouchableOpacity>
      
      </View>
      <View style={styles.button_Container_Fourth}>
      <TouchableOpacity onPress={() => setDiet("4")}>
      <Text style={[styles.GLUTEN_Text_Style,{
         backgroundColor:Deit ==="4" ? "#EEA734" : "#F1F1F1",
        color:Deit == "4" ? "white" :"#868686"
      }]}>GLUTEN FREE</Text>
      </TouchableOpacity>
     
      </View>
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:18,
        marginVertical:5,
        
      }}>
        <Text style={styles.Deitry_Text_Style}>PRICE RANGE</Text>
       <TouchableOpacity >
       <Text style={styles.Clear_Text_Style}>CLEAR ALL</Text>
       </TouchableOpacity>
      </View>
    <FlatList 
        data={array}
        horizontal={true}
        keyExtractor={index=>index.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
            return(
                <View style={styles.FlatList_Container}>
                 <TouchableOpacity onPress={() =>setDoller(item.id)}>
                 <Text style={[styles.FlatList_Text_Style,{
                    backgroundColor:doller === item.id ? "#EEA734" : "#F1F1F1",
                    color:doller=== item.id ? "white" :"#868686"
                 }]}>{item.text}</Text>
                 </TouchableOpacity>
                </View>
            )
        }}
    />
    <View style={{marginTop:60}}>
    <TouchableOpacity style={styles.ADD_To_Order_Button_Style}>
                <Text style={styles.ADD_To_Order_Button_Text_Style}>APPLY FILTERS</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
  )
}

export default Filter

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    CATEGORIES_Text_Style:{
        fontSize:"16@s",
        fontWeight:"600",
        fontFamily:global.FONT.MEDIUM,
        color:"#868686",
        marginHorizontal:"8@s"
    },
    Clear_Text_Style:{
        fontSize:"12@s",
        fontWeight:"300",
        fontFamily:global.FONT.REGULAR,
        color:"#868686",
        right:"8@s",
      
    },
    button_Container_First:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginHorizontal:"20@s",
        marginTop:"10@s",
        right:5
    },
    ALL_Text_Style:{
        height:"38@s",
        width:"80@s",
        // backgroundColor:All ==="1" ? "#orange" :"F1F1F1",
        textAlign:"center",
        alignSelf:"center",
        paddingTop:"10@s",
        borderRadius:"8@s",
        color:"#868686"
    },
  BRUNCH_Text_Style:{
    height:"38@s",
    width:"100@s",
    backgroundColor:"#F1F1F1",
    textAlign:"center",
    alignSelf:"center",
    paddingTop:"10@s",
    borderRadius:"8@s",
    color:"#868686"
  },
  Dinners_Text_Style:{
    height:"38@s",
    width:"100@s",
    backgroundColor:"#F1F1F1",
    textAlign:"center",
    alignSelf:"center",
    paddingTop:"10@s",
    borderRadius:"8@s",
    color:"#868686"
  },
  button_Container_Second:{
    flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginHorizontal:"10@s",
        marginTop:"10@s",
        left:"4@s"
  },
  BURGER_Text_Style:{
    height:"38@s",
        width:"100@s",
        backgroundColor:"#F1F1F1",
        textAlign:"center",
        alignSelf:"center",
        paddingTop:"10@s",
        borderRadius:"8@s",
        color:"#868686"
  },
  CHINESE_Text_Style:{
    height:"38@s",
        width:"95@s",
        backgroundColor:"#F1F1F1",
        textAlign:"center",
        alignSelf:"center",
        paddingTop:"10@s",
        borderRadius:"8@s",
        color:"#868686"
  },
  PIZZA_Text_Style:{
    height:"38@s",
        width:"95@s",
        backgroundColor:"#F1F1F1",
        textAlign:"center",
        alignSelf:"center",
        paddingTop:"10@s",
        borderRadius:"8@s",
        color:"#868686"
  },
  button_Container_Third:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginHorizontal:"15@s",
    marginTop:"10@s",
    left:"4@s"
  },
  Deitry_Text_Style:{
    fontSize:"16@s",
    fontWeight:"600",
    fontFamily:global.FONT.MEDIUM,
    color:"#868686",
    marginTop:"18@s",
    marginHorizontal:"8@s"
  },
  button_Container_Fourth:{
    flexDirection:"row",
    // justifyContent:"space-around",
    alignItems:"center",
    marginHorizontal:"15@s",
    marginTop:"15@s",
    left:"4@s"
  },
  GLUTEN_Text_Style:{
    height:"39@s",
    width:"120@s",
    backgroundColor:"#F1F1F1",
    textAlign:"center",
    alignSelf:"center",
    paddingTop:"10@s",
    borderRadius:"8@s",
    color:"#868686"
  },
  button_Container_FIFTH:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginHorizontal:"20@s",
    marginTop:"15@s",
    right:"5@s"
  },
  FlatList_Container:{
  marginLeft:"22@s",
  justifyContent:"center",
  alignItems:"center",
  alignSelf:"center",

  },
  FlatList_Text_Style:{
    height:"64@s",
    width:"64@s",
    backgroundColor:"#F8F8F8",
    textAlign:"center",
    paddingTop:"20@s",
   borderRadius:"40@s",
   fontSize:"14@s",
   color:"#010F07"
  },
  ADD_To_Order_Button_Style: {
    backgroundColor: "#EEA734",
    height: "52@s",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "18@s",
    borderRadius: "10@s",
    marginTop:"30@s",
    marginBottom:"18@s"
},
ADD_To_Order_Button_Text_Style: {
    fontSize: "14@s",
    fontWeight: "700",
    fontFamily: global.FONT.MEDIUM,
    color: "#FFFFFF",
    // letterSpacing:"1@s"
},
})