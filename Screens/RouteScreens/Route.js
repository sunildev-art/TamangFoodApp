import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../Splash';
import Welcome from '../Welcome';
import Favorite from '../Favorite';
import SignUp from '../SignUp';
import GetStartedWithFoodly from '../GetStartedWithFoodly';
import OtpScreen from '../OtpScreen';
import Address from '../Address';
import BottomTab from '../BottomTabScreen/BottomTab';
import Homapage from '../Homapage';
import FeatureScreen from '../FeatureScreen';
import SingleRetaurents from '../SingleRetaurents';
import AddToOrder from '../AddToOrder';
import YourOrder from '../YourOrder';
import Payment from '../Payment';
import Filter from '../Filter';
import TopCategories from '../TopCategories';
import SearchResult from '../SearchResult';
import ConfirmOrder from '../ConfirmOrder';
import OrderComplete from '../OrderComplete';
import ProfileSetting from '../ProfileSetting';
import ChangePassword from '../ChangePassword';
import PaymentMathods from '../PaymentMathods';
import AddSocialAccount from '../AddSocialAccount';
import Refer from '../Refer';
import AddCard from '../AddCard';
import Location from '../Location';
import BrowseFood from '../BrowseFood';
import SearchLocationResult from '../SearchLocationResult';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false,
   
    }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="SignUp" component={SignUp} 
        
      />
      <Stack.Screen name="GetStartedWithFoodly" component={GetStartedWithFoodly}
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
          
        }}
      />
      <Stack.Screen name="OtpScreen" component={OtpScreen}
      options={{
          animation:"fade_from_bottom",
          animationTypeForReplace:"push",
        }} />
      <Stack.Screen name="Address" component={Address} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="Homapage" component={BottomTab} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="FeatureScreen" component={FeatureScreen} 
           options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="SingleRetaurents" component={SingleRetaurents} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="AddToOrder" component={AddToOrder}
       options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }} />
      <Stack.Screen name="YourOrder" component={YourOrder} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="Payment" component={Payment} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="Filter" component={Filter}
       options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }} />
      <Stack.Screen name="SearchResult" component={SearchResult} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="OrderComplete" component={OrderComplete} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="ProfileSetting" component={ProfileSetting} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="PaymentMathods" component={PaymentMathods}
       options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }} />
      <Stack.Screen name="AddSocialAccount" component={AddSocialAccount} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="Refer" component={Refer} 
         options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }}
      />
      <Stack.Screen name="AddCard" component={AddCard}
       options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }} />
      <Stack.Screen name="Location" component={Location}
       options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }} />
      <Stack.Screen name="BrowseFood" component={BrowseFood}
       options={{
          animation:"slide_from_right",
          animationTypeForReplace:"push",
        }} />
      <Stack.Screen name="SearchLocationResult" component={SearchLocationResult} />
       </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Route