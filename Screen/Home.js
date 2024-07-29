import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authcontext';
import Footer from '../Menus/Footer';
import Headermenu from '../Menus/Headermenu';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const stack = createNativeStackNavigator(); 
const Home = () => {
    const [state , setstate] = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <Headermenu/> */}
      <Text>
        {JSON.stringify(state , null  , 4)}
      </Text>
      

      <Footer/>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1 , 
    justifyContent : "space-between",
    marginTop : 10 , 
    margin : 1
  }
})
export default Home

