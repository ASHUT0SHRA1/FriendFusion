import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputTextCompo from '../../Component/InputTextCompo'
import SubmitBtn from '../../Component/SubmitBtn';
import axios from 'axios';

const Register = ({navigation}) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);

    const handleSubmit = async() => {
        try {
            setloading(true)
            if(!name || !email || !password){
                Alert.alert("please fill al fields");
                setloading(false)
                return ; 
            }
            setloading(false);
            const {data} = await axios.post('http://192.168.0.160:8080/api/v1/auth/register' , {name , email , password}) ; 
            Alert.alert(data && data.message);
            console.log("Register Data => " , name , email , password)
        } catch (error) {
            Alert.alert(error.response.data.message);
            setloading(false)
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Register</Text>
            <InputTextCompo title={'Name'} secureText={false} keyboardType={'Name'} value={name}
                setvalue={setname}

            />
            <InputTextCompo title={'Email'} secureText={false} keyboardType={'Email Address'} value={email}
                setvalue={setemail}

            />
            <InputTextCompo title={'Password'} secureText={true} keyboardType={'Password'} value={password}
                setvalue={setpassword}

            />
            <SubmitBtn handleSubmit={handleSubmit} title={'Submit'} loading={loading} />
            <Pressable onPress={()=>{
                navigation.navigate('Login')
            }}> 
            <Text style={styles.linkText}>
                Already Register please <Text style={styles.link}>Login</Text>
            </Text>
            </Pressable>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e1d5c9'
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#1e2225',
        marginBottom: 20
    },
    linkText  : {
        textAlign : 'center' , 

    }, 
    link :{
        color : 'red'
    }
})