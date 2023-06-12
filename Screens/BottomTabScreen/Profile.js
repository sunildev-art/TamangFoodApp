import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, Image, FlatList, ImageBackground, unstable_batchedUpdates, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import ToggleSwitch from 'toggle-switch-react-native'

const Profile = ({ navigation }) => {
  // const [isOn,setisOn] = useState(false)
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const [isOn,setisOn] = useState(false)
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  // const [isOn,setisOn] = useState(false)
  const [isEnabled2, setIsEnabled2] = useState(true);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
      <View style={{ margin: 20 }}>
        <Text style={styles.Header_Text_Style}>Account Settings</Text>
        <Text style={styles.subtitle_Text_Style}>Update your settings like notification,</Text>
        <Text style={[styles.subtitle_Text_Style, {
          paddingTop: scale
            (3)
        }]}>payments,profile edit etc.</Text>
      </View>
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.PROFILE_TAB} style={styles.PROFILE_TAB_Style} />
        <View style={styles.Container_Second}>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileSetting")}>
            <Text style={styles.Profile_Text_Style}>Profile Information</Text>
            <Text style={styles.change_Text_Style}>Change your account information</Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 330, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.lock} style={styles.PROFILE1_TAB_Style} />
        <View style={styles.Container_Second}>
          <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
            <Text style={styles.Profile_Text_Style}>Change Password</Text>
            <Text style={styles.change_Text_Style}>change your password                  </Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 330, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.cardB} style={styles.PROFILE_TAB_Style1} />
        <View style={styles.Container_Second}>
          <TouchableOpacity onPress={() => navigation.navigate("PaymentMathods")}>
            <Text style={styles.Profile_Text_Style}>Payment Mathods</Text>
            <Text style={styles.change_Text_Style}>Add your credit & debit cards       </Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 330, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.marker} style={styles.PROFILE1_TAB_Style} />
        <View style={styles.Container_Second1}>
          <TouchableOpacity onPress={() => navigation.navigate("Location")}>
            <Text style={styles.Profile_Text_Style}>Locations</Text>
            <Text style={styles.change_Text_Style1}>Add & remove your delivery locations</Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 330, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.FACEBOOK_IMG} style={styles.PROFILE1_TAB_Style} />
        <View style={styles.Container_Second}>
          <TouchableOpacity onPress={() => navigation.navigate("AddSocialAccount")}>
            <Text style={styles.Profile_Text_Style}>Add Social Account</Text>
            <Text style={styles.change_Text_Style}>Add Facebook,Twitter etc              </Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 330, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.SHARE_IMG} style={styles.PROFILE_TAB_Style} />
        <View style={styles.Container_Second}>
          <TouchableOpacity onPress={() => navigation.navigate("Refer")}>
            <Text style={styles.Profile_Text_Style}>Refer to  Friends</Text>
            <Text style={styles.change_Text_Style}>Get 10$ for reffering friends           </Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 330, alignSelf: 'flex-end', marginTop: 20 }} />
      <Text style={styles.notification_Text_style}>NOTIFICATION</Text>
      <View style={styles.Container_First2}>
        <Image source={global.ASSETS.bell} style={styles.bell_TAB_Style} />
        <View style={styles.Container_Second2}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.refer_Text_Style}>Push Notification</Text>
            <Text style={styles.refer_Subtitle_Text_Style}>for daily update you will get it          </Text>
          </TouchableOpacity>
        </View>
        {/* <ToggleSwitch
          isOn={true}
          onColor="#EEA734"
          offColor="lightgray"
          style={styles.pushIcon_Style}
          // labelStyle={{ color: "black", fontWeight: "900",}}
          size="large"
          onToggle={isOn=>setisOn(isOn)}
        /> */}
        <Switch
          trackColor={{ false: 'lightgray', true: '#EEA734' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.pushIcon_Style}
        />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 335, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First2}>
        <Image source={global.ASSETS.bell} style={styles.bell_TAB_Style} />
        <View style={styles.Container_Second2}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.refer_Text_Style}>SMS Notification</Text>
            <Text style={styles.refer_Subtitle_Text_Style}>for daily update you will get it          </Text>
          </TouchableOpacity>
        </View>
        {/* <ToggleSwitch
          isOn={false}
          onColor="#EEA734"
          offColor="lightgray"
          style={styles.pushIcon_Style}
          // labelStyle={{ color: "black", fontWeight: "900",}}
          size="large"
          onToggle={isOn=>setisOn(isOn)}
        /> */}
        <Switch
          trackColor={{ false: 'lightgray', true: '#EEA734' }}
          thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
          style={styles.pushIcon_Style}
        />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 335, alignSelf: 'flex-end', marginTop: 20 }} />

      <View style={styles.Container_First2}>

        <Image source={global.ASSETS.bell} style={styles.bell_TAB_Style} />
        <View style={styles.Container_Second2}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.refer_Text_Style}>Promotional Notification</Text>
            <Text style={styles.refer_Subtitle_Text_Style}>for daily update you will get it          </Text>
          </TouchableOpacity>
        </View>

        {/* <ToggleSwitch
          isOn={true}
          onColor="#EEA734"
          offColor="lightgray"
          style={styles.pushIcon_Style}
          // labelStyle={{ color: "black", fontWeight: "900",}}
          size="large"
          onToggle={isOn=>setisOn(isOn)}
        /> */}
        <Switch
          trackColor={{ false: 'lightgray', true: '#EEA734' }}
          thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
          style={styles.pushIcon_Style}
        />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 335, alignSelf: 'flex-end', marginTop: 20 }} />
      <Text style={styles.more_Text_style}>MORE</Text>
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.Star} style={styles.PROFILE_TAB_Style1} />
        <View style={styles.Container_Second3}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.Rate_Text_Style}>Rate Us</Text>
            <Text style={styles.RateUs_Text_Style}>rate us playstore,appstor              </Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 325, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First}>
        <Image source={global.ASSETS.BOOK_IMG} style={styles.PROFILE1_TAB_Style} />
        <View style={styles.Container_Second3}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.Rate_Text_Style}>FAQ</Text>
            <Text style={styles.RateUs_Text_Style}>Frequently asked question           </Text>
          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>
      <View style={{ height: 1, backgroundColor: "#ccc", width: 325, alignSelf: 'flex-end', marginTop: 20 }} />
      <View style={styles.Container_First3}>
        <Image source={global.ASSETS.SHARE_IMG} style={styles.PROFILE_TAB_Style} />
        <View style={styles.Container_Second3}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.Rate_Text_Style}>LOGOUT                                      </Text>

          </TouchableOpacity>
        </View>
        <Image source={global.ASSETS.BackRight} style={styles.backArrow_TAB_Style} />
      </View>

    </ScrollView>
  )
}


export default Profile

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

  },
  Header_Text_Style: {
    fontSize: "28@s",
    color: "#010F07",
    marginTop: "20@s",
    marginHorizontal: "10@s",
    fontWeight: "600",

  },
  subtitle_Text_Style: {
    fontSize: "16@s",
    color: "#868686",
    fontWeight: "400",
    marginTop: "12@s",

  },
  Container_First: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "15@s",
    marginTop: "15@s",
    left: "5@s"

  },
  PROFILE_TAB_Style: {
    width: "30@s",
    height: "30@s",
    resizeMode: "contain",
    tintColor: 'gray',
    marginLeft: "5@s"
  },
  PROFILE1_TAB_Style: {
    width: "20@s",
    height: "20@s",
    resizeMode: "contain",
    tintColor: 'gray',
    marginLeft: "8@s"
  },
  backArrow_TAB_Style: {
    width: "15@s",
    height: "15@s",
    resizeMode: "contain",
    tintColor: '#010F07',
    right: "5@s"
  },
  Profile_Text_Style: {
    fontSize: "16@s",
    fontWeight: "300",
    color: "#010F07",

    marginBottom: "4@s",

  },
  change_Text_Style: {
    fontSize: "14@s",
    fontWeight: "400",
    color: "#868686",
    // marginHorizontal:"10@s",
    marginTop: "5@s"
  },
  Container_Second: {
    marginRight: "25@s",
    marginHorizontal: "15@s",
  },
  PROFILE_TAB_Style1: {
    width: "22@s",
    height: "22@s",
    resizeMode: "contain",
    // tintColor:'gray',
    marginLeft: "8@s"
  },
  Container_Second1: {
    marginRight: "5@s",
    marginHorizontal: "15@s",
  },
  change_Text_Style1: {
    fontSize: "13.5@s",
    fontWeight: "400",
    color: "#868686",
    // marginHorizontal:"10@s",
    marginTop: "5@s"
  },
  notification_Text_style: {
    fontSize: "16@s",
    fontWeight: "600",
    color: "#010F07",
    margin: "22@s"
  },
  bell_TAB_Style: {
    height: "20@s",
    width: "20@s",
    tintColor: "gray",
    marginLeft: "12@s"
  },
  pushIcon_Style: {
    width: "65@s",
    height: "45@s",
    position: "absolute",
    right: "2@s"
  },
  Container_First2: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
    // marginHorizontal: "5@s",
    marginTop: "15@s",
    marginHorizontal: '15@s'
  },
  Container_Second2: {
    paddingHorizontal: 40
  },
  refer_Text_Style: {
    fontSize: "16@s",
    fontWeight: "300",
    color: "#010F07",
    right: "12@s",
    marginBottom: "4@s",
  },
  refer_Subtitle_Text_Style: {
    fontSize: "14@s",
    fontWeight: "400",
    color: "#868686",
    // marginHorizontal:"10@s",
    marginTop: "5@s",
    right: "12@s",


  },
  Container_Second3: {
    left: "10@s"
  },
  Rate_Text_Style: {
    fontSize: "16@s",
    fontWeight: "300",
    color: "#010F07",
    right: "12@s",
    marginBottom: "4@s",
  },
  RateUs_Text_Style: {
    fontSize: "14@s",
    fontWeight: "400",
    color: "#868686",
    // marginHorizontal:"10@s",
    marginTop: "5@s",
    right: "12@s",
  },
  more_Text_style: {
    fontSize: "16@s",
    fontWeight: "600",
    color: "#010F07",
    marginTop: "25@s",
    marginLeft: "25@s"
  },
  Container_First3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "15@s",
    marginTop: "20@s",
    left: "5@s",
    marginBottom: "20@s"
  }
})