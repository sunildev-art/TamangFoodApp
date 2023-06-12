import { StyleSheet, Text, View,ScrollView,TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header from './components/Header';
import OTPTextView from 'react-native-otp-textinput';

const OtpScreen = ({navigation,route}) => {
    const [otp, setOtp] = useState("")

    const {phoneNumber} = route.params || {};

const HandleSubmit=()=>{
    if(otp!==""){
navigation.navigate("Address")
    }else{
        alert('incorrect otp')
    }
}

  return (
    <ScrollView style={styles.main_container}>      
     <StatusBar
        animated={true}
        backgroundColor="gray"
        />
        <Header tittle="Login to Foodly"/>
        <View style={styles.Text_Container}>
            <Text style={styles.Text_Style}>Verify phone number</Text>
            <Text style={styles.Text_Style1}>Enter the 4-Digit code sent to you at {'\n'}{phoneNumber}</Text>
           
        </View>
        <View style={styles.otpContainer}>
            <OTPTextView 
            inputCount={4}
            tintColor="green"
            offTintColor="#868686"
            containerStyle={styles.otpStyle}
            textInputStyle={styles.textInputStyle}
            activeTintColor="green"
            handleTextChange={(t)=>setOtp(t)}
          
            />
        </View>
        <TouchableOpacity style={styles.Continue_Button_Style} onPress={(text)=>HandleSubmit(text)}>
          <Text style={styles.Continue_Button_text_Style}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.resendContainer}>
            <Text style={styles.receive_code_text_style}>Didn't receive code?</Text>
            <TouchableOpacity >
                <Text style={styles.resend_code_text_style}>Resend Again</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.terms_Text_Style}>By signing up you agree to our Terms {'\n'} Condition & Privacy policy</Text>
    </ScrollView>
  )
}

export default OtpScreen

const styles = ScaledSheet.create({
    main_container:{
        flex:1,
        marginTop:"5@s",
        backgroundColor:"white"
      },
      Text_Container:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"30@s",
        marginHorizontal:"10@s"
      },
      Text_Style:{
        fontSize:"22@s",
        color:"#010F07",
        fontWeight:"600",
        fontFamily:global.FONT.MEDIUM,
        textAlign:"center"
      },
      Text_Style1:{
        fontSize:"12@s",
        color:"#868686",
        fontWeight:"400",
        fontFamily:global.FONT.REGULAR,
        textAlign:"center",
        marginTop:"5@s"
      },
      otpContainer:{
        marginTop:"45@s",
        marginHorizontal:"50@s",
        alignItems:"center"
      },
    //   otpStyle:{
    //     alignItems:"center",
    //     marginHorizontal:"10@s"s
        
    //   },
      textInputStyle:{
        backgroundColor:"#FFFFFF",
        height:"55@s",
        width:"55@s",
        elevation:2,
        marginHorizontal:"10@s"
      },
      Continue_Button_Style:{
        backgroundColor:"#EEA734",
        height:"42@s",
        marginTop:"30@s",
        justifyContent:"center",
        alignItems:"center",
        // width:"335@s",
        marginHorizontal:"14@s",
        borderRadius:"10@s"
      },
      Continue_Button_text_Style:{
        fontSize:"12@s",
        fontWeight:"700",
        fontFamily:global.FONT.MEDIUM,
        color:"#FFFFFF",
        // letterSpacing:"1@s"
      },
      resendContainer:{
        justifyContent:"space-evenly",
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:"10@s",
        marginTop:"18@s"
      },
      receive_code_text_style:{
        fontSize:"12@s",
        fontWeight:"300",
        fontFamily:global.FONT.REGULAR,
        color:"#010F07"
      },
      resend_code_text_style:{
        color:"#EEA734",
        fontSize:"14@s",
        fontWeight:"300",
        fontFamily:global.FONT.REGULAR,
      },
      terms_Text_Style:{
        textAlign:"center",
        marginTop:"25@s",
        fontSize:"16@s",
        color:"#868686",
        letterSpacing:0.2
      }
})