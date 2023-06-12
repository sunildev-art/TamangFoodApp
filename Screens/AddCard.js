import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';

const AddCard = () => {
  return (
    <View style={styles.main_container}>
    <Header3
      HeaderImage={global.ASSETS.BackArrow}
      tittle="Payment Mathods"
    />
    <View style={styles.Container_First}>
    <View style={styles.PayPal_Container}>
        <Image source={global.ASSETS.PAY_CARD} style={styles.PAY_CARD_Style}/>
           <TouchableOpacity style={styles.buttonContainer}>
           <Text style={styles.Text1}>PayPal</Text>
            <Text style={styles.Text2}>default Payment</Text>
           </TouchableOpacity>
                <Image source={global.ASSETS.BackRight}  style={styles.backRight_Style}/>
    </View>
    <View style={{height:1,backgroundColor:"#ccc",left:90,width:400,marginTop:15}}/>
    <View style={styles.PayPal_Container}>
        <Image source={global.ASSETS.MASTER_CARD} style={styles.PAY_CARD_Style}/>
           <TouchableOpacity style={styles.buttonContainer2}>
           <Text style={styles.Text1}>Master Card</Text>
            <Text style={styles.Text2}>Not default</Text>
           </TouchableOpacity>
                <Image source={global.ASSETS.BackRight}  style={styles.backRight_Style}/>
    </View>
    <View style={{height:1,backgroundColor:"#ccc",left:90,width:400,marginTop:15}}/>
    <View style={styles.PayPal_Container}>
        <Image source={global.ASSETS.VISA_CARD} style={styles.PAY_CARD_Style}/>
           <TouchableOpacity style={styles.buttonContainer1}>
           <Text style={styles.Text1}>Visa</Text>
            <Text style={styles.Text2}>Not default</Text>
           </TouchableOpacity>
                <Image source={global.ASSETS.BackRight}  style={styles.backRight_Style}/>
    </View>
    <View style={{height:1,backgroundColor:"#ccc",left:90,width:400,marginTop:15}}/>
  
    </View>
    </View>
  )
}

export default AddCard

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
      Container_First: {
        marginTop: "20@s",
        marginHorizontal: "20@s",
        // backgroundColor:'red',
        flex: 1
      },
      PayPal_Container:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:"35@s",
        justifyContent:"space-between",
        marginHorizontal:"10@s"
      },
      PAY_CARD_Style:{
        height:"50@s",
        width:"50@s",
        resizeMode:"contain",
        marginRight:"15@s",
        right:"15@s"
      },
      backRight_Style:{
        width:"15@s",
        height:"15@s",
        resizeMode:"contain",
        tintColor:"#010F07",
        
      },
      buttonContainer:{
        right:"55@s"
      },
      Text1:{
        fontSize:"16@s",
        fontWeight:"300",
        color:"#010F07",
        bottom:4
      },
      Text2:{
        fontSize:"14@s",
        fontWeight:"400",
        color:"#868686",
        bottom:4,
        marginTop:"5@s"
      },
      buttonContainer2:{
        right:"63@s"
      },
      buttonContainer1:{
        right:"68@s"
      },
      
})