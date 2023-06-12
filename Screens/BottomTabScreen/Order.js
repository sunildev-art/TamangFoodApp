import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import Header3 from '../components/Header3';
import CommonScreen from '../components/CommonScreen';
import RepeatScreen from '../components/RepeatScreen';


const Order = ({navigation}) => {
  return (
    <View style={styles.main_container}>
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
      <View style={{ marginVertical: 5,marginHorizontal:25 }}>
        <Header3 
          tittle="Your Orders"
        />
        <View style={{flexDirection:"row",alignItems:"center",
        justifyContent:"space-between",
        marginTop:30,
        marginBottom:15}}>
          <Text style={styles.UPCOMING_Text_Style}>UPCOMING ORDERS</Text>
          <Text style={styles.Clear_Text_Style}>CLEAR ALL</Text>
        </View>
        <RepeatScreen
                imageprop={global.ASSETS.RED_POP}
                Title="McDonald's"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
             <RepeatScreen
                imageprop={global.ASSETS.UNCLE_BOY}
                Title="Uncle's Boy"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
             <RepeatScreen
                imageprop={global.ASSETS.THE_HALALC_IMG}
                Title="The Halal Guys"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
           <TouchableOpacity onPress={()=>navigation.navigate("ConfirmOrder",{
            
           })}>
           <Text style={styles.proceet_Text_Style}>Proceed payment</Text>
           </TouchableOpacity>
            <View style={{flexDirection:"row",alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        marginBottom:15}}>
          <Text style={styles.UPCOMING_Text_Style}>PAST ORDERS</Text>
          <Text style={styles.Clear_Text_Style}>CLEAR ALL</Text>
        </View>
      
        <RepeatScreen
                imageprop={global.ASSETS.MEXI_IMG}
                Title="The Halal Guys"
                SubTitle="Shortbrea,chocolate turtle cookies,and red velvet."
                Doller="$$"
                imageprop1={global.ASSETS.oval}
                Chinese="Chinese"
                Aud="AUD$10"
            />
            </View>
     
      </ScrollView>
    </View>
  )
}

export default Order

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

},
UPCOMING_Text_Style:{
  fontSize:"15@s",
  fontWeight:"300",
  color:"#868686",
//  fontFamily:global.FONT.REGULAR
},
Clear_Text_Style:{
  fontSize:"12@s",
  color:"#868686",
  
},
proceet_Text_Style:{
  textAlign:"right",
  color:"#F8B64C",
  fontSize:"16@s",
  fontWeight:"600",
  marginVertical:"10@s",
  fontFamily:global.FONT.MEDIUM
}
})