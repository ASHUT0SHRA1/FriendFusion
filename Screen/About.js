import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Footer from '../Menus/Footer'
import { AuthContext } from '../context/authcontext';

const About = () => {
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

export default About

const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        justifyContent : "space-between",
        marginTop : 10 , 
        margin : 1
      }
})