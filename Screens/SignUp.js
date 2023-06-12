import { Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
// import { Divider } from '@rneui/themed';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';



const SignUp = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [hide, setHide] = useState(true)

const HandleSubmit=()=>{
  if(name !== "" && email !=="" && Password !== "" ){
    navigation.navigate("GetStartedWithFoodly")
    
  }else{
    Alert.alert("please fill all details to continue ")
  }

}

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="gray"
        
       
       
      />
      <View style={styles.container_first}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={global.ASSETS.BackArrow} style={styles.BackArrowImageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ForgetButtonStyle}>
          <Text style={styles.ForgetButtonTextStyle}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.CreatTextStyle}>
        Creat Account
      </Text>
      <View style={styles.container_second}>

        <Text style={styles.USertextStyle}>Enter Your name,Email and Password {'\n'}for sign Up.</Text>
        <TouchableOpacity style={styles.AccountButtonStyle} onPress={() => navigation.navigate("GetStartedWithFoodly")}>
          <Text style={styles.AccountButtonTextStyle}>Already Have an Account?</Text>
        </TouchableOpacity>
      </View>
      {name !== "" ? (
        <Text style={styles.CommonTextStyle}>NAME</Text>
      ) :
        null

      }
      <View style={styles.inputContainer_first}>
        <TextInput placeholder='Sajin Tamang' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07" }}
          value={name}
          onChangeText={text => setName(text)}
          keyboardType="name-phone-pad"
        // returnKeyType="next"
        />
        {name !== '' ? (
          <Image
            source={global.ASSETS.checkArrow}
            style={styles.checkArrowStyle} />
        ) : null}

      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 15 }} />
      {email !== "" ? (
        <Text style={styles.CommonTextStyle}>EMAIL ADDRESS</Text>
      ) :
        null

      }
      <View style={styles.inputContainer_Second}>
        <TextInput placeholder='Email Address' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07" }}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        // returnKeyType="next"
        />
        {email !== '' ? (
          <Image
            source={global.ASSETS.checkArrow}
            style={styles.checkArrowStyle} />
        ) : null}
      </View>

      <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 15 }} />
      {Password !== ""  ? (
        <View style={styles.passwordContainer}>

          <Text style={styles.CommonTextStyle}>PASSWORD</Text>
          <TouchableOpacity onPress={() => setHide(!hide)}>
            <Image source={hide ? global.ASSETS.EYE_HIDE : global.ASSETS.EYE_SHOW} style={styles.EYE_HIDE_Image_Style} />
          </TouchableOpacity>
        </View>
      ) :
        null
        }
       
     <View style={styles.inputContainer_Second}>
        <TextInput
          placeholder='Password'
          placeholderTextColor="#ccc"
          style={{ fontSize: 20, color: "#010F07" }}
          keyboardType="default"
          secureTextEntry={hide}
          value={Password}
          onChangeText={(text) => setPassword(text)}
        // autoCapitalize="none"
        // autoCorrect={false}
        />
        {Password !== '' ? (
          <Image
            source={global.ASSETS.checkArrow}
            style={styles.checkArrowStyle} />
        ) : null}
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", marginHorizontal: 15 }} />
        <TouchableOpacity style={styles.SignUp_Button_Style} onPress={()=>HandleSubmit()}>
          <Text style={styles.SignUp_Button_Text_style}>SIGN UP</Text>
        </TouchableOpacity>
      <Text style={styles.terms_Text_Style}>By Signing up You Agree to our Terms {'\n'} Condition & Privacy Policy</Text>
      <Text style={styles.terms_Text_Style}>Or</Text>
      <View style={styles.fb_Container}>
      <Image source={global.ASSETS.FACEBOOK} style={styles.fbImageStyle}/>
      <Text style={styles.fb_Text_Style}>CONNECT WITH FACEBOOK</Text>
      </View>
      <View style={styles.google_Container}>
      <Image source={global.ASSETS.GOOGLE} style={styles.googl_ImageStyle}/>
      <Text style={styles.google_Text_Style}>CONNECT WITH GOOGLE</Text>
      </View>

    </ScrollView>
  )
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,

  },
  container_first: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "20@s",
    marginHorizontal: "15@s",
    // alignItems:"center",
  },
  BackArrowImageStyle: {
    width: "10@s",
    height: "14@s",
    resizeMode: "contain",
    tintColor: "black"
  },
  ForgetButtonStyle: {
    flex: 1,
    alignItems: "center"
  },
  ForgetButtonTextStyle: {
    color: "#010F07",
    fontWeight: "600",
    fontSize: "15@s"
  },
  container_second: {
    marginHorizontal: "15@s",
    // marginTop: "35@s",
    flexDirection: "row"

  },
  CreatTextStyle: {
    color: "#010F07",
    fontSize: "32@s",
    // fontFamily:global.FONT.REGULAR,
    fontWeight: "300",
    marginTop: "30@s",
    marginHorizontal: "10@s"

  },
  USertextStyle: {
    color: "#868686",
    marginTop: "10@s",
    fontSize: "14@s",
    lineHeight: "25@s"

  },
  AccountButtonStyle: {
    position: "absolute",
    top: "40@s",
    left: "92@s"
  },
  AccountButtonTextStyle: {
    color: "#EEA734",
    fontSize: "16@s",
    fontWeight: "400",

  },
  inputContainer_first: {
    // marginTop:"20@s",
    marginHorizontal: "10@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  FullNameTextStyle: {
    color: "#868686",
    marginHorizontal: "15@s",
    marginTop: "20@s"
  },
  checkArrowStyle: {
    width: "13@s",
    height: "10@s",
    resizeMode: "contain",
    marginRight: "10@s"
  },
  CommonTextStyle: {
    color: "#868686",
    marginHorizontal: "15@s",
    marginTop: "10@s"
  },
  inputContainer_Second: {
    marginHorizontal: "10@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  PasswordTextStyle: {
    color: "#868686",
    marginHorizontal: "15@s",
    marginTop: "10@s"
  },
  inputContainer_Third: {
    marginHorizontal: "10@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  EYE_HIDE_Image_Style: {
    height: "18@s",
    width: "18@s",
    resizeMode: "contain",
    marginRight: "21@s",
    marginTop: "10@s"
  },
  SignUp_Button_Style:{
    backgroundColor:"#EEA734",
    height:"42@s",
    marginTop:"20@s",
    justifyContent:"center",
    alignItems:"center",
    // width:"335@s",
    marginHorizontal:"14@s",
    borderRadius:"10@s"
  },
  SignUp_Button_Text_style:{
    fontSize:"12@s",
    fontWeight:"700",
    fontFamily:global.FONT.MEDIUM,
    color:"#FFFFFF",
    // letterSpacing:"1@s"
  },
  terms_Text_Style:{
    textAlign:"center",
    marginTop:"20@s",
    color:"#868686",
    fontSize:"12@s",
    fontWeight:"400",
    fontFamily:global.FONT.REGULAR
  },
  fb_Container:{
    backgroundColor:"#395998",
    marginHorizontal:"15@s",
  flexDirection:"row",
  alignItems:"center",
  height:"52@s",
 borderRadius:"10@s",
 marginTop:"25@s"
  
  },
  fbImageStyle:{
    height:"28@s",
    width:"28@s",
    resizeMode:"contain",
    paddingRight:"40@s",
  },
  fb_Text_Style:{
    fontSize:"12@s",
   fontWeight:"500",
   color:"#FFFFFF",
   textAlign:"center",
   paddingLeft:"30@s",
   fontFamily:global.FONT.MEDIUM
  },
  google_Container:{
    backgroundColor:"#4285F4",
    marginHorizontal:"15@s",

    flexDirection:"row",
    height:"50@s",
    // width:"295@s",
    marginTop:"25@s",
    alignItems:"center",
    marginBottom:"15@s",
    borderRadius:"10@s"
  },
  googl_ImageStyle:{
    height:"28@s",
    width:"28@s",
    resizeMode:"contain",
    paddingRight:"40@s",
  },
  google_Text_Style:{
    fontSize:"12@s",
   fontWeight:"500",
   color:"#FFFFFF",
   textAlign:"center",
   paddingLeft:"30@s",
   fontFamily:global.FONT.MEDIUM
  }

})
export default SignUp

