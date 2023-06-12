import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container_first}>
        <TouchableOpacity
         onPress={() => navigation.goBack()}
         >
          <Image source={global.ASSETS.BackArrow} style={styles.BackArrowImageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ForgetButtonStyle}>
          <Text style={styles.ForgetButtonTextStyle}>{props.tittle}</Text>
          <Text style={styles.ForgetButtonTextStyle}>{props.tittle1}</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = ScaledSheet.create({
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
        tintColor: "black",
        // left:"10@s"
      },
      ForgetButtonStyle: {
        flex: 1,
        alignItems: "center"
      },
      ForgetButtonTextStyle: {
        color: "#010F07",
        fontWeight: "600",
        fontSize: "15@s",
        textAlign:"center"
      },
})

export default Header
