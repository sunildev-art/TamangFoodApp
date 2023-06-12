import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';


const ProfileSetting = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <ScrollView style={styles.main_container}>
      <Header3
        HeaderImage={global.ASSETS.BackArrow}
        tittle="Profile Setting"
      />
      <View style={styles.Container_First}>
        {name !== "" ? (
          <Text style={styles.Name_Text_Style}>NAME</Text>
        ) :
          null

        }

        <TextInput placeholder='NAME' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07", right: 2 }}
          value={name}
          onChangeText={text => setName(text)}
          keyboardType="name-phone-pad"
        // returnKeyType="next"
        />
        <View style={{ height: 1, backgroundColor: "#ccc", elevation: 1, marginTop: 10, marginBottom: 10 }} />
        {email !== "" ? (
          <Text style={styles.Name_Text_Style}>EMAIL ADDRESS</Text>
        ) :
          null

        }

        <TextInput placeholder='Email Address' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07", right: 2 }}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="name-phone-pad"
        // returnKeyType="next"
        />
        <View style={{ height: 1, backgroundColor: "#ccc", elevation: 1, marginTop: 5, marginBottom: 10 }} />
        {phoneNumber !== "" ? (
          <Text style={styles.Name_Text_Style}>PHONE NUMBER</Text>
        ) :
          null

        }

        <TextInput placeholder='PHONE NUMBER' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07", right: 2 }}
          value={phoneNumber}

          onChangeText={text => setPhoneNumber(text)}
          keyboardType="numeric"

        // returnKeyType="next"
        />
        <View style={{ height: 1, backgroundColor: "#ccc", elevation: 1, marginTop: 5, marginBottom: 10 }} />
        {Password !== "" ? (
          <Text style={styles.Name_Text_Style}>PASSWORD</Text>
        ) :
          null

        }

        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <TextInput placeholder='PASSWORD' placeholderTextColor="#ccc" style={{ fontSize: 20, color: "#010F07", right: 2 }}
            value={Password}
            onChangeText={text => setPassword(text)}
            keyboardType="numeric"
          // returnKeyType="next"
          />
          <TouchableOpacity onPress={()=>navigation.navigate("ChangePassword")}>
            <Text style={{fontSize:16,color:"#EEA734",fontWeight:"400",right:5}}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 1, backgroundColor: "#ccc", elevation: 1, marginTop: 5, marginBottom: 10 }} />
      
        <TouchableOpacity style={styles.Button_Container}>
          <Text style={styles.Button_Text_Style}>CHANGE SETTING</Text>
        </TouchableOpacity>
        </View>
       
      
    
    </ScrollView>
  )
}

export default ProfileSetting

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",


  },
  Container_First: {
    marginTop: "20@s",
    marginHorizontal: "20@s",
  },
  Name_Text_Style: {
    fontSize: "12@s",
    color: "#868686",
    fontWeight: "300",
    marginTop: "15@s"
  },
  Button_Container:{
   justifyContent:"center",
    height:"48@s",
    backgroundColor:"#EEA734",
    alignItems:"center",
   borderRadius:"10@s",
   marginTop:"200@s",
   marginBottom:"15@s"
  
  },
  Button_Text_Style:{
    textAlign:"center",
    fontSize:"13@s",
    color:"#FFFFFF",
    fontWeight:"700",
   
  }
})