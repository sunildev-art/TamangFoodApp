import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, unstable_batchedUpdates } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';


const AddToOrder = ({ route, navigation }) => {
    const [value, setValue] = useState("")
    const [value1, setValue1] = useState("")
    const [increament, setIncreament] = useState(1)
    const [order, setOrder] = useState('11.98')
    // const [Decreament,setDecreament] = useState("0")

    const { user, title } = route.params || {};


    const data = [{
        id: 1,
        value: "Chocolate Chip",
    },
    {
        id: "2",
        value: "Cookies and Cream",
    },
    {
        id: "3",
        value: "Funfetti",
    },
    {
        id: "4",
        value: "Red Velvet",
    },
    {
        id: "5",
        value: "Peanut Butter",
    },
    {
        id: "6",
        value: "Snickerdoodle",
    },
    {
        id: "7",
        value: "White Chocolate MacaDamia",
    },
    {
        id: "8",
        value: "M and M",
    },
    ]


    const data1 = [{
        id: 1,
        value: "Chocolate Chip",
    },
    {
        id: "2",
        value: "Cookies and Cream",
    },
    {
        id: "3",
        value: "Funfetti",
    },
    {
        id: "4",
        value: "Red Velvet",
    },
    {
        id: "5",
        value: "Peanut Butter",
    },
    {
        id: "6",
        value: "Snickerdoodle",
    },
    {
        id: "7",
        value: "White Chocolate MacaDamia",
    },
    {
        id: "8",
        value: "M and M",
    },
    ]
    

    return (
        <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
            <ImageBackground source={user} style={styles.ImageBackground_Style}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={global.ASSETS.CLOSE_IMG} style={styles.CLOSE_IMG_Style} />
                </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.title_Text_Style}>{title}</Text>
            <Text style={styles.subTitle_Text_Style}>Shortbread,chocolate turtle cookies, and red{'\n'}velvet 8 ounces cream cheese,softened.</Text>
            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-around",
                marginVertical: 10,
                marginHorizontal: 30,
                right: 22
            }}>
                <Text style={styles.doller_Image_Style}>$$</Text>
                <Image source={global.ASSETS.oval} style={styles.oval_Image_Style} />
                <Text style={styles.doller_Image_Style}>Chinese</Text>
                <Image source={global.ASSETS.oval} style={styles.oval_Image_Style} />
                <Text style={styles.doller_Image_Style}>American</Text>
                <Image source={global.ASSETS.oval} style={styles.oval_Image_Style} />
                <Text style={styles.doller_Image_Style}>Desi Food</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8, marginHorizontal: 22 }}>
                <Text style={{
                    fontSize: 20, color: "#010F07",
                    // marginLeft:15,
                    fontWeight: "400",
                    bottom: 2
                }}>Choice of Top Cookie</Text>
                <TouchableOpacity style={styles.Button_Container}>
                    <Text style={styles.Button_Text_Style}>REQUIRED</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={index => index.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginVertical: 4, }}>
                            <View style={styles.radio_Container}>
                                <TouchableOpacity onPress={() => setValue1(item.id)}>
                                    <Image source={value1 === item.id ? global.ASSETS.RADIO_BUTTON : global.ASSETS.RADIO_CIRCLE} style={styles.Radio_Image_Style} />
                                </TouchableOpacity>
                                <Text style={styles.Radio_Text_Style}>{item.value}</Text>
                            </View>
                            <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 5, marginHorizontal: 28, }} />
                        </View>
                    )
                }}
            />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8, marginHorizontal: 22, marginBottom: 2 }}>
                <Text style={{
                    fontSize: 19, color: "#010F07",
                    // marginLeft:15,
                    fontWeight: "400",
                    bottom: 2
                }}>Choice of Bottom Coockie</Text>
                <TouchableOpacity style={styles.Button_Container}>
                    <Text style={styles.Button_Text_Style}>REQUIRED</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data1}
                keyExtractor={index => index.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginVertical: 4, }}>
                            <View style={styles.radio_Container1}>
                                <TouchableOpacity onPress={() => setValue(item.id)}>
                                    <Image source={value === item.id ? global.ASSETS.RADIO_BUTTON : global.ASSETS.RADIO_CIRCLE} style={styles.Radio_Image_Style1} />
                                </TouchableOpacity>
                                <Text style={styles.Radio_Text_Style1}>{item.value}</Text>
                            </View>
                            <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 5, marginHorizontal: 28, }} />
                        </View>
                    )
                }}
            />
            <View style={styles.Add_Container}>
                <Text style={styles.Add_Container_Text_Style}>Add Special instructions</Text>
                <TouchableOpacity>
                    <Image source={global.ASSETS.BackRight} style={styles.BackArrow_Image_Style} />
                </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 5, marginHorizontal: 28, }} />
            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15, marginHorizontal: 45, justifyContent: "space-evenly" }}>
                <TouchableOpacity style={styles.minus_Button_Style} onPress={()=>{
                    if(increament > 1){
                        setIncreament(increament -1)
                    }
                }}>
                    <Text style={styles.minus_Button_Text_Style}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "300", color: "#010F07" }}>{increament}</Text>
                <TouchableOpacity style={styles.plus_Button_Style} onPress={() => setIncreament(increament + 1)}>
                    <Text style={styles.plus_Button_Text_Style}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.ADD_To_Order_Button_Style} onPress={() =>navigation.navigate("YourOrder") }>
                <Text style={styles.ADD_To_Order_Button_Text_Style}>Add to order (${`${order * increament}`})</Text>
            </TouchableOpacity>
        </ScrollView>                                  
    )
}
const styles = ScaledSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    ImageBackground_Style: {
        height: "280@s",
        width: "352@s"

    },
    CLOSE_IMG_Style: {
        height: "34@s",
        width: "34@s",  
        marginTop: "35@s",
        marginHorizontal: "20@s",
        resizeMode: "contain",
    },
    title_Text_Style: {
        fontSize: "24@s",
        margin: "12@s",
        color: "#010F07",
        fontWeight: "600",
        // fontFamily:global.FONT.MEDIUM
    },
    subTitle_Text_Style: {
        fontSize: "13@s",
        // marginLeft:"16@s",
        color: "#868686",
        letterSpacing: "0.4@s",
        marginHorizontal: "28@s",
        bottom: "4@s",
        right: "12@s"
    },
    doller_Image_Style: {
        fontSize: "13@s",
        color: "#868686",
        fontWeight: "400",
    },
    oval_Image_Style: {
        height: "4@s",
        width: "4@s",
        tintColor: "#868686"
    },
    Button_Container: {
        width: "90@s",
        height: "32@s",
        backgroundColor: "#F8B64C",
        borderRadius: "5@s",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: "10@s",
        bottom: "5@s",
        // marginRight:"@s",

    },
    Button_Text_Style: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "300",
        fontSize: "10@s"

    },
    radio_Container: {
        flexDirection: "row",
        // justifyContent:"space-evenly",
        alignItems: "center",
        marginHorizontal: "22@s",
        marginVertical: "7@s",

    },
    Radio_Text_Style: {
        fontSize: "16@s",
        fontWeight: "400",
        color: "#010F07",
        marginLeft: "15@s"
    },
    Radio_Image_Style: {
        height: "22@s",
        width: "22@s",
        resizeMode: "contain"
    },
    Add_Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "22@s",
        marginVertical: "8@s"
    },
    Add_Container_Text_Style: {
        fontSize: "16@s",
        fontWeight: "400",
        color: "#010F07",
        letterSpacing: "0.4@s"
    },
    BackArrow_Image_Style: {
        height: "12@s",
        width: "14@s",
        resizeMode: "contain",
        marginRight: "2@s"
    },
    minus_Button_Style: {
        width: "54@s",
        height: "54@s",
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "27@s",
        left: 18
    },
    plus_Button_Style: {
        width: "54@s",
        height: "54@s",
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "27@s",
        borderRadius: "27@s",
        right: 18
    },
    minus_Button_Text_Style: {
        fontSize: "30@s",
        //    textAlign:"center" 
        color: "#010F07",
        fontWeight: "300"
    },
    plus_Button_Text_Style: {
        fontSize: "25@s",
        //    textAlign:"center" 
        color: "#010F07",
        fontWeight: "300"
    },
    ADD_To_Order_Button_Style: {
        backgroundColor: "#EEA734",
        height: "52@s",
        // marginTop: "150@s",
        justifyContent: "center",
        alignItems: "center",
        // width:"335@s",
        marginHorizontal: "22@s",
        borderRadius: "10@s",
        marginBottom: "15@s"
    },
    ADD_To_Order_Button_Text_Style: {
        fontSize: "14@s",
        fontWeight: "700",
        fontFamily: global.FONT.MEDIUM,
        color: "#FFFFFF",
        // letterSpacing:"1@s"
    },
    radio_Container1: {
        flexDirection: "row",
        // justifyContent:"space-evenly",
        alignItems: "center",
        marginHorizontal: "22@s",
        marginVertical: "7@s",

    },
    Radio_Text_Style1: {
        fontSize: "16@s",
        fontWeight: "400",
        color: "#010F07",
        marginLeft: "15@s"
    },
    Radio_Image_Style1: {
        height: "22@s",
        width: "22@s",
        resizeMode: "contain"
    },
})
export default AddToOrder

