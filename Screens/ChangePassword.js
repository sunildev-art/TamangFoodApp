import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';

const ChangePassword = () => {
  const [hide, setHide] = useState(true)
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(true)
  const [Password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
    <View style={styles.main_container}>
      <Header3
        HeaderImage={global.ASSETS.BackArrow}
        tittle="Profile Setting"
      />
      <View style={styles.Container_First}>
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>

          {Password !== "" ? (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

              <Text style={styles.CommonTextStyle}>PASSWORD</Text>
              {/* <TouchableOpacity onPress={() => setHide(!hide)}>
            <Image source={hide ? global.ASSETS.EYE_HIDE : global.ASSETS.EYE_SHOW} style={styles.EYE_HIDE_Image_Style} />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => setHide(!hide)}>
            <Image source={hide ? global.ASSETS.EYE_HIDE : global.ASSETS.EYE_SHOW} style={styles.EYE_HIDE_Image_Style} />
          </TouchableOpacity>
            </View>
          ) :
            null
          }

          <TextInput placeholder='Password' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07", right: 5 }}
            value={Password}
            onChangeText={text => setPassword(text)}
            keyboardType="numeric"
           secureTextEntry={hide}
          // returnKeyType="next"
          />


          <View style={{ height: 1, backgroundColor: "#ccc", elevation: 1, marginTop: 5, marginBottom: 10 }} />
          {newPassword !== "" ? (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

              <Text style={styles.CommonTextStyle}>NEW PASSWORD</Text>
              <TouchableOpacity onPress={() => setShow1(!show1)}>
                <Image source={show1 ? global.ASSETS.EYE_HIDE : global.ASSETS.EYE_SHOW} style={styles.EYE_HIDE_Image_Style} />
              </TouchableOpacity>
            </View>
          ) :
            null
          }

          <TextInput placeholder='New Password' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07", right: 5 }}
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
            keyboardType="numeric"
            secureTextEntry={show1}
          // returnKeyType="next"
          />


          <View style={{ height: 1, backgroundColor: "#ccc", elevation: 1, marginTop: 5, marginBottom: 10 }} />
          {confirmPassword !== "" ? (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

              <Text style={styles.CommonTextStyle}>CONFIRM PASSWORD</Text>
              <TouchableOpacity onPress={() => setShow2(!show2)}>
                <Image source={show2 ? global.ASSETS.EYE_HIDE : global.ASSETS.EYE_SHOW} style={styles.EYE_HIDE_Image_Style} />
              </TouchableOpacity>
            </View>
          ) :
            null
          }

          <TextInput placeholder='Confirm Password' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07", right: 5 }}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
           keyboardType="numeric"
            secureTextEntry={show2}
          // returnKeyType="next"
          />

          <View style={{ height: 1, backgroundColor: "#ccc", elevation: 1, marginTop: 5, marginBottom: 10 }} />
        </ScrollView>

      </View>

    
      <TouchableOpacity style={styles.ChangePassword_Button}>
      <Text style={styles.Button_Text_Style}>CHANGE PASSWORD</Text>
      </TouchableOpacity>
      </View>

   
  )
}

export default ChangePassword

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
  Name_Text_Style: {
    fontSize: "12@s",
    color: "#868686",
    fontWeight: "300",
    marginTop: "20@s"
  },
  EYE_HIDE_Image_Style: {
    height: "18@s",
    width: "18@s",
    resizeMode: "contain",
    marginRight: "5@s",
    tintColor:"#868686"
  },
  Button_Text_Style:{
    textAlign:"center",
    fontSize:"13@s",
    color:"#FFFFFF",
    fontWeight:"700",
    letterSpacing:"1@s"
  },
  CommonTextStyle:{
    textAlign:"center",
    fontSize:"13@s",
    color:"#868686",
    fontWeight:"400",
    letterSpacing:"1@s"
  },
  ChangePassword_Button:{
    position: 'absolute', bottom: 10, backgroundColor: 'orange', 
    width: '90%', height: 54, justifyContent: 'center', alignItems: 'center', alignSelf: "center",borderRadius:10,marginBottom:10
  }
 
})