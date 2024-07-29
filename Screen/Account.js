import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authcontext';
import Footer from '../Menus/Footer';

import UserImg from '../Assets/user.png'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
const Account = () => {
    const [state, setstate] = useContext(AuthContext);
    const {user , token} = state;
    const [loading, setloading] = useState(false);
    const [name, setname] = useState(user?.name);
    const [email] = useState(user?.email);
    const [password, setpassword] = useState(user?.password);
    const handleUpdate = async() => {
        try {
            setloading(true);
            const upadteUser = {name,email,  password}; 
            const {data} = await axios.put('/auth/update', upadteUser, {
                // headers   :{

                    // Authorization :  `Bearer ${token && token}`,
                // },            
            } );
            
            setloading(false);
            let UD = JSON.stringify(data); 
            console.log(token);
            setstate({...state , user: UD?.upadteUser})
            // console.log(data);

            // Alert.alert(name , password);
        } catch (error) {
            console.log(error);
            console.log(token)
            Alert.alert(error.response.data.message);
            setloading(false )  
        }
    }
    return (
        <View style={styles.container}>
            {/* <Headermenu/> */}
            <ScrollView>
            <View>
                <View style={{ alignItems: "center", marginTop: 50 }}>
                    <Image source={UserImg} style={{ height: 140, width: 140, borderRadius: 70 }} />
                </View>

                <View style={{margin  : 20}}>
                    <View style={styles.inpContainer} >
                        <Text style={styles.textt}>
                            Name
                        </Text>
                        <TextInput onChangeText={(text)=>{setname(text)}}  value={name}  style={styles.textinp}/>
                    </View>

                    <View style={styles.inpContainer}>
                        <Text style={styles.textt}>
                            Email
                        </Text>
                        <TextInput value={state?.user.email}  style={styles.textinp} 
                        editable={false}/>
                    </View>

                    <View style={styles.inpContainer}>
                        <Text style={styles.textt}>
                            password
                        </Text>
                        <TextInput secureTextEntry={true} onChangeText={(text)=>{setpassword(text)}}  value={password} style={styles.textinp} />

                    </View>

                </View>
                <View style={{ alignItems : 'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
                        <Text style={{color : 'white' ,fontSize : 16, textAlign : 'center'}}>
                          {!loading  ? "Update Profile" : "please wait"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            </ScrollView>

            <Footer />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 10,
        margin: 1
    },

    inpContainer : {
        marginTop : 10 , 
        flexDirection :"row", 
        justifyContent : 'center', 
        alignItems : 'center', 
        justifyContent : 'space-between'
    },
    textt :{
        fontSize: 16, 
        fontWeight : '700', 
    }, 
    textinp : {
        borderColor : 'black', 
        marginLeft : 10 , 
        fontSize : 14 ,
        paddingLeft : 20 , 
        borderRadius : 10 , 
        width : 250 , 
        backgroundColor : 'white'
    }, 
    btn:{
        backgroundColor : 'black',
        height : 40 , 
        width : 200 ,
        borderRadius  : 15, 
        marginTop : 15, 
        justifyContent : 'center'
        
    }
    
})
export default Account; 