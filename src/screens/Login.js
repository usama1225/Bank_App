import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, genericStyles } from '../theme/designSystem'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import { useRef } from 'react'

const Login = ({navigation}) => {
    const[checked,setChecked]=useState(false);
    const [isModalVisible, setModalVisible]=useState(false);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);

  const handleModal = ()=>{
    setModalVisible(!isModalVisible);
  }
  const handleSetPin = ()=>{
    navigation.navigate('Dashboard')
  }

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
        
        <View style={styles.Front} >
                <Text style={{textAlign:'center',paddingTop:15,fontSize:20}}>Welcome to Login</Text>
                <TextInput
                    placeholder='C.N.I.C (384033XXXXXXX)'
                    keyboardType="numeric"
                    style={styles.input}
                    />
                    <View style={{flexDirection:'row'}}>  
             <TouchableOpacity onPress={handleCheck} style={styles.checkbox}>
                 {checked ? (
                  <Icon name="check-square-o" size={30} color="green" />
                 ) : (
                <Icon name="square-o" size={30} color="gray" />
                 )}
                 
             </TouchableOpacity>
         
     <Text style={{}}>Remember Me</Text> 
     
     <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={{textAlign:'right',color:colors.accent,textDecorationLine:'underline',paddingLeft:90}}>
        Forget Password?
        </Text>
     </TouchableOpacity>
     </View>
    <TouchableOpacity onPress={handleModal}>
        <Text style={styles.Button}>Login    <Icon name="angle-right" size={22} color="white"  /></Text>
    </TouchableOpacity>
        </View>
            <Text style={{top:300,textAlign:'center', fontSize:17,paddingRight:4}}>Don't have an account?  
                <Text style={{textDecorationLine:'underline',color:colors.accent}} onPress={()=>{navigation.navigate("Registration")}}> Signup</Text></Text>
                
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={{fontSize:20}}>Enter Your Pin to Login !</Text>
          <Text style={{color:colors.accent}}>Enter 6-digit code for your account and transactions. So, you can login and access all the feature</Text>
          <View style={styles.TextInputView}>
            <TextInput
            ref={pin1Ref}
            keyboardType='number-pad'
            placeholder='-'
            secureTextEntry={true}
            maxLength={1}
            onChange={(pin1)=>{setPin1(pin1);
            if(pin1!= ""){
              pin2Ref.current.focus()
            }
            }}
            style={styles.TextInputText}
            />
          
          
            <TextInput
            secureTextEntry={true}
            ref={pin2Ref}
            placeholder='-'
            keyboardType='number-pad'
            maxLength={1}
            onChange={(pin2)=>{setPin2(pin2);
              if(pin2!= ""){
                pin3Ref.current.focus()
              }
            }}
            style={styles.TextInputText}
            />
          
          
            <TextInput
            secureTextEntry={true}
            ref={pin3Ref}
            placeholder='-'
            keyboardType='number-pad'
            maxLength={1}
            onChange={(pin3)=>{setPin3(pin3);
              if(pin3!= ""){
                pin4Ref.current.focus()
              }
            }}
            style={styles.TextInputText}
            />
          
            <TextInput
            secureTextEntry={true}
            ref={pin4Ref}
            placeholder='-'
            keyboardType='number-pad'
            maxLength={1}
            onChange={(pin4)=>{setPin4(pin4);
              if(pin4!= ""){
                pin5Ref.current.focus()
              }
            }}
            style={styles.TextInputText}
            />
          
          
            <TextInput
            secureTextEntry={true}
            ref={pin5Ref}
            placeholder='-'
            keyboardType='number-pad'
            maxLength={1}
            onChange={(pin5)=>{setPin5(pin5);
              if(pin5!= ""){
                pin6Ref.current.focus()
              }
            }}
            style={styles.TextInputText}
            />
          
          
            <TextInput
            secureTextEntry={true}
            ref={pin6Ref}
            placeholder='-'
            keyboardType='number-pad'
            maxLength={1}
            onChange={(pin6)=>{setPin6(pin6)}}
            style={styles.TextInputText}
            />
          </View >
          <TouchableOpacity><Text style={{color:'red', textAlign:'right'}} >clear all</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleSetPin} ><Text style={styles.pinBtn} >SET PIN</Text></TouchableOpacity>
        </View>
      </Modal>
    
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
        marginLeft:200,
        marginVertical:35
        },
    Top:{
        backgroundColor:colors.primary,
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal:60,
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
    marginHorizontal:15,
    marginTop:30,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
    borderColor:'black',
    },
    checkbox:{
        marginLeft:19,
        width:30
    },
    modal:{
        height:300,
        backgroundColor:colors.secondary, 
        margin:20 ,
        padding:20,
        borderRadius:10,
      

      },
      TextInputText:{
        fontSize:25,
        textAlign:'center',
        backgroundColor:'white',
        margin:2,
        borderRadius:7,
        flex:1,
      },
      TextInputView:{
        flexDirection:'row',
        height:60,
        width:300,
        justifyContent:'center',
        alignContent:'center',
        marginTop:25
        
        
      },
      pinBtn:{
        height:50,
        backgroundColor:colors.primary,
        borderWidth: 0,
        borderRadius:10,
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:22,
        marginTop:35,
        color:'white'
      }, 

})

export default Login