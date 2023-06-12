import * as React from 'react';
import { View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../BottomTabScreen/Home';
import Search from '../BottomTabScreen/Search';
import Order from '../BottomTabScreen/Order';
import Profile from '../BottomTabScreen/Profile';
import Homapage from '../Homapage';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../../global';
import TopCategories from '../TopCategories';

const Tab = createBottomTabNavigator();
const SearchStack = createNativeStackNavigator();

const SearchScreen = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen name="TopCategories" component={TopCategories}
                options={{ headerShown: false }}

            />

        </SearchStack.Navigator>
    );
};
const BottomTab = () => {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#F8B64C",
            tabBarInactiveTintColor: "#000000",
            tabBarStyle: {
                backgroundColor: "#FFFFFF",
                // marginHorizontal:10,
                height: 70,
                paddingBottom: 10,
                elevation: 10,
                ...styles.shadow,




            }
        }}>
            <Tab.Screen name='Home' component={Homapage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={global.ASSETS.FOODS_TAB}
                                resizeMode="contain"
                                style={{
                                    height: 35,
                                    width: 35,
                                    tintColor: focused ? "#F8B64C" : "#000000",

                                }}

                            />
                            <Text style={{
                                color: focused ? "#F8B64C" : "#000000",
                                fontSize: 11, fontWeight: "300",
                                paddingLeft: 4
                            }}>Home</Text>
                        </View>
                    ),
                }}
            />





            <Tab.Screen name='Search1' component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={global.ASSETS.SEARCH_TAB}
                                resizeMode="contain"
                                style={{
                                    height: 35,
                                    width: 35,
                                    tintColor: focused ? "#F8B64C" : "#000000",

                                }}

                            />
                            <Text style={{
                                color: focused ? "#F8B64C" : "#000000",
                                fontSize: 11, fontWeight: "300",
                                paddingLeft: 4
                            }}>Search</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='Order' component={Order}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={global.ASSETS.ORDER_TAB}
                                resizeMode="contain"
                                style={{
                                    height: 35,
                                    width: 35,
                                    tintColor: focused ? "#F8B64C" : "#000000",

                                }}

                            />
                            <Text style={{
                                color: focused ? "#F8B64C" : "#000000",
                                fontSize: 11, fontWeight: "300",
                                paddingLeft: 4
                            }}>Order</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={global.ASSETS.PROFILE_TAB}
                                resizeMode="contain"
                                style={{
                                    height: 35,
                                    width: 35,
                                    tintColor: focused ? "#F8B64C" : "#000000",

                                }}

                            />
                            <Text style={{
                                color: focused ? "#F8B64C" : "#000000",
                                fontSize: 11, fontWeight: "300",
                                paddingLeft: 4
                            }}>Profile</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

const styles = ScaledSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 2,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default BottomTab
