import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, genericStyles } from '../theme/designSystem'
import Icon from 'react-native-vector-icons/FontAwesome'


const Login = ({navigation}) => {
    const[checked,setChecked]=useState(false);

    const handleCheck = ()=>{
        setChecked(!checked);
    }
    const handleForgetPassword = ()=>{
        alert("Forget Password");
    }

  return (
    <View style={styles.container}>
        <View style={styles.Top}>
            <Image source={require('../assets/logoo.png')} style={{height:300,width:300}} />

        </View>
        <View style={styles.Bottom}>
        </View>
        <View style={styles.Front} >
                <Text style={{textAlign:'center',paddingTop:15,fontSize:20}}>Welcome to Login</Text>
                <TextInput
                    placeholder='C.N.I.C (384033XXXXXXX)'
                    keyboardType="numeric"
                    style={styles.input}
                    />
             <TouchableOpacity onPress={handleCheck} style={styles.checkbox}>
                 {checked ? (
                  <Icon name="check-square-o" size={30} color="green" />
                 ) : (
                <Icon name="square-o" size={30} color="gray" />
                 )}
                 
             </TouchableOpacity>
           
     <Text style={{bottom:28,left:50}}>Remember Me</Text> 
     
     <TouchableOpacity onPress={handleForgetPassword}><Text style={{textAlign:'right',marginRight:20,bottom:48,color:colors.accent,textDecorationLine:'underline'}}>Forget Password?</Text>
     </TouchableOpacity>
     
    <TouchableOpacity>
        <Text style={styles.Button}>Login    <Icon name="angle-right" size={22} color="white"  /></Text>
    </TouchableOpacity>
        </View>
            <Text style={{top:300,textAlign:'center', fontSize:17,paddingRight:4}}>Don't have an account?  
                <Text style={{textDecorationLine:'underline',color:colors.accent}} onPress={()=>{navigation.navigate("Registration")}}> Signup</Text></Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    Button:{
        height:45,
        width:150,
        backgroundColor:colors.primary,
        borderWidth: 0,
        borderRadius:10,
        paddingTop:6,
        textAlign:'center',
        fontSize:22,
        color:'white',
        bottom:15,
        left:200
        },
    Top:{
        backgroundColor:colors.primary,
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal:60,
        position:'absolute'
    },

    Bottom:{
        backgroundColor:colors.secondary,
        position:'absolute'
    },
    Front:{
        height:230,
        backgroundColor:'white', 
        marginHorizontal:20,
        top:220,
        borderRadius:20
    },
    input:{
        height: 60,
    margin:15,
    marginTop:30,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
    borderColor:'black',
    },
    checkbox:{
        marginLeft:19,
    }
})

export default Login