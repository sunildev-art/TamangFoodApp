import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import Header2 from './Header2';

const Button_Container = (props) => {
  return (
    <View style={styles.main_container}>
    
      <View style={styles.button_Container_First}>
      <TouchableOpacity>
      <Text style={styles.ALL_Text_Style}>{props.title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.BRUNCH_Text_Style}>{props.title2}</Text>
      </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.Dinners_Text_Style}>{props.title3}</Text>
     </TouchableOpacity>
      
      </View>
      
    </View>
  )
}

export default Button_Container

const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    CATEGORIES_Text_Style:{
        fontSize:"16@s",
        fontWeight:"600",
        fontFamily:global.FONT.MEDIUM,
        color:"#868686"
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
        marginHorizontal:"10@s",
        marginTop:"10@s"
    },
    ALL_Text_Style:{
        height:"38@s",
        width:"80@s",
        backgroundColor:"#F1F1F1",
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
  }
})