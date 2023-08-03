import { View, Text,Linking ,ScrollView,SafeAreaView} from 'react-native'
import React, { useState }  from 'react'
import { useRef } from 'react'
import { TextInput ,StyleSheet, Button} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { colors } from '../theme/designSystem'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'


const Registration = ({navigation}) => {
  const [checked,setChecked]=useState(false);
  const [fullName,setFullName]=useState('');
  const [fatherName,setFatherName]=useState('');
  const [cnicNo,setCnicNo]=useState('');
  const [postelAddress,setPostelAddress]=useState('');
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

  const handleCheck = ()=>{
    setChecked(!checked);
  }
  const handleLogin = ()=>{
    
    navigation.navigate('Login');
  }

  const handleModal = ()=>{
    setModalVisible(!isModalVisible);
  }
  const handleSetPin = ()=>{
    navigation.navigate('Login')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
    <View style={{margin:20, flex: 1,}}>
        <Text style={styles.text}>
        Create Account!</Text>
        <Text style={{color:colors.accent, paddingBottom:10}}>Please provide the following details to create your account and start investing</Text>
      <TextInput
      placeholder='Full Name'
      style={styles.input}
      onChangeText={(text)=>setFullName(text)}
      />
      <TextInput
      placeholder='Father Name'
      style={styles.input}
      onChangeText={(text)=>setFatherName(text)}
      />
      <TextInput
      placeholder='C.N.I.C(384033XXXXXXX)'
      style={styles.input}
      keyboardType="numeric"
      onChangeText={(text)=>setCnicNo(text)}
      />
      <TextInput
      placeholder='Postel Address'
      style={styles.postelAdress}
      onChangeText={(text)=>setPostelAddress(text)}
      multiline={true}
      />
     <View style={{flexDirection:'row'}}>
     <TouchableOpacity onPress={handleCheck} style={styles.checkbox}>
        {checked ? (
          <Icon name="check-square-o" size={30} color="green" />
        ) : (
          <Icon name="square-o" size={30} color="gray" />
        )}
      </TouchableOpacity>
      <Text>{checked ? '' : 'Not '}</Text>
      <Text>Agree with <Text style={{color:colors.accent,textDecorationLine:'underline'}} onPress={() => Linking.openURL('http://google.com')}>Term and Conditions</Text></Text>
      </View>
      <TouchableOpacity onPress={handleModal}>
        <Text style={styles.button}>Next  <Icon name="angle-right" size={23} color="white"  /></Text>
      </TouchableOpacity>
      <View style={{paddingTop:30, paddingHorizontal:100}}><Text>Already Registered? <TouchableOpacity><Text style={{color:'#00b4d8', textDecorationLine:'underline'}} onPress={()=>{navigation.navigate('Login')}}>Login</Text></TouchableOpacity> </Text></View>
      
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={{fontSize:20}}>Enter New 6-Digits Pin !</Text>
          <Text style={{color:colors.accent}}>Set 6-digit code for your account and transactions. So, you can login and access all the feature</Text>
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
          <TouchableOpacity onPress={handleSetPin} ><Text style={styles.pinBtn} >SET PIN   <Icon name="angle-right" size={23} color="white"  />
          
          
          
          
          
          
          </Text></TouchableOpacity>
        </View>
      </Modal>
      
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  pinBtn:{
    height:50,
    backgroundColor:colors.primary,
    borderWidth: 0,
    borderRadius:10,
    textAlignVertical:'center',
    textAlign:'center',
    fontSize:20,
    marginTop:35,
    color:'white'
  },  
  
  input:{
        height: 60,
    margin:5,
    borderWidth: 1,
    borderRadius:15,
    padding: 10,
    borderColor:'black',
    },
    TextInputView:{
      flexDirection:'row',
      height:60,
      width:300,
      justifyContent:'center',
      alignContent:'center',
      marginTop:25
      
      
    },
    TextInputText:{
      fontSize:25,
      textAlign:'center',
      backgroundColor:'white',
      margin:2,
      borderRadius:7,
      flex:1,
    },
    postelAdress:{
        height: 130,
        margin:5,
        borderWidth: 1,
        borderRadius:15,
        paddingLeft: 10,
        borderColor:'black',
        textAlign:'left',
    },
    text:{
        textAlign:'center',
        fontSize:25,
        marginBottom:20
    },
    button:{
        height:60,
        backgroundColor:colors.primary,
        borderWidth: 0,
        borderRadius:15,
        paddingTop:14,
        textAlign:'center',
        fontSize:22,
        marginTop:20,
        color:'white'
    
      },
      checkbox:{
        marginRight: 10,
      },
      modal:{
        height:300,
        backgroundColor:colors.secondary, 
        margin:20 ,
        padding:20,
        borderRadius:10,
      

      }
    
})

export default Registration