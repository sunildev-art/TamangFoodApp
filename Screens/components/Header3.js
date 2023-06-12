import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import { useNavigation } from '@react-navigation/native';

const Header3 = (props) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container_first}>
        <TouchableOpacity
         onPress={() => navigation.goBack()}
         >
          <Image source={props.HeaderImage} style={styles.BackArrowImageStyle} />
        </TouchableOpacity>
       
          <Text style={styles.ForgetButtonTextStyle}>{props.tittle}</Text>
          <Text style={styles.ForgetButtonTextStyle1}>{props.tittle1}</Text>
        
      </View>
  )
}
const styles = ScaledSheet.create({
  container_first: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "20@s",
    marginHorizontal: "20@s",
    alignItems:"center",
    
  },
      BackArrowImageStyle: {
        width: "10@s",
        height: "14@s",
        resizeMode: "contain",
        // tintColor: "black"
      },
      ForgetButtonStyle: {
        flex: 1,
        alignItems: "center",
        // justifyContent:"space-between"
      },
      ForgetButtonTextStyle: {
        color: "#010F07",
        fontWeight: "600",
        fontSize: "15@s",
        textAlign:"center"
      },
      ForgetButtonTextStyle1:{
        color: "#868686",
        fontWeight: "600",
        fontSize: "15@s",
        textAlign:"center"
      }
})

export default Header3
