import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header from './components/Header';
// import PhoneInput from 'react-native-phone-number-input';
// import PhoneInput from 'react-phone-number-input'
import PhoneInput from 'react-native-phone-number-input'


const GetStartedWithFoodly = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [country, setCountry] = useState()

  // const submitted=()=>{
  //   if(phoneNumber ==="" ){
  //     alert("Enter correct phone Number ")

  //   }else{
  //     // navigation.navigate("OtpScreen")

  //   }
  // }

  return (
    <View style={styles.main_container}>
      <StatusBar
        animated={true}
        backgroundColor="gray"
      />
      <Header
        tittle="Login To Tamang Food"
        tittle1="Service"
      />
      <View style={styles.Text_Container}>
        <Text style={styles.Text_Style}>Get started with Foodly</Text>
        <Text style={styles.Text_Style1}>Enter your Phone number to use foodly and {'\n'} enjoy your food :)</Text>
      </View>
      <View style={styles.phone_Text_Input_Style}>
        <Text style={styles.phoneTextStyle}>PHONE NUMBER</Text>

        <PhoneInput

          containerStyle={styles.PhoneInput_Style}
          textContainerStyle={styles.textContainerStyle}
          defaultCountry="IN"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          onChangeCountry={(country) => setCountry(country)}
        />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 10 }} />

     
    <TouchableOpacity  onPress={() => {
        phoneNumber === "" ?
          alert("enter valid number") : navigation.navigate('OtpScreen', {
            phoneNumber: phoneNumber
          })
      }} 
      style={styles.SignUp_Button_Style}>
        <Text style={styles.SignUp_Button_Text_style}>SIGN UP</Text>
      </TouchableOpacity>
     

    </View>
    
  )
}
const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    // marginTop: "5@s",
    backgroundColor: "white",
  },
  Text_Container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30@s",
    marginHorizontal: "10@s"
  },
  Text_Style: {
    fontSize: "22@s",
    color: "#010F07",
    fontWeight: "600",
    fontFamily: global.FONT.MEDIUM,
    textAlign: "center"
  },
  Text_Style1: {
    fontSize: "12@s",
    color: "#868686",
    fontWeight: "400",
    fontFamily: global.FONT.REGULAR,
    textAlign: "center",
    marginTop: "5@s"
  },
  phone_Text_Input_Style: {
    marginTop: "30@s",
    marginHorizontal: "15@s",
  },
  phoneTextStyle: {
    fontSize: "12@s",
    color: "#868686",
    fontWeight: "300",
    fontFamily: global.FONT.REGULAR,
    marginLeft: "1@s"

  },
  SignUp_Button_Style: {
    backgroundColor: "#EEA734",
    height: 52,
    // marginTop: "150@s",
    justifyContent: "center",
    alignItems: "center",
    // width:"335@s",
    marginHorizontal: 14,
    borderRadius: 10,
    position:"absolute",
    alignSelf:"center",
    width:"90%",
    bottom:20,
    
  },
  SignUp_Button_Text_style: {
    fontSize: "14@s",
    fontWeight: "700",
    fontFamily: global.FONT.MEDIUM,
    color: "#FFFFFF",
    // letterSpacing:"1@s"
  },
  PhoneInput_Style: {

    backgroundColor: "#fff",

    backgroundColor: "white",
    paddingTop: "12@s",
    textAlign: "center"

  },
  textContainerStyle: {
    backgroundColor: "white",


  }
})
export default GetStartedWithFoodly

