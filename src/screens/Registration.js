import { View, Text,Linking } from 'react-native'
import React  from 'react'
import { TextInput ,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'

const Registration = ({navigation}) => {
  return (
    <View style={{margin:20, flex: 1,}}>
        <Text style={styles.text}>Create Account!</Text>
        <Text style={{color:'#00b4d8', paddingBottom:10}}>Please provide the following details to create your account and start investing</Text>
      <TextInput
      
      placeholder='Full Name'
      style={styles.input}
      
      />
      <TextInput
      placeholder='Father Name'
      style={styles.input}
      />
      <TextInput
      placeholder='C.N.I.C(384033XXXXXXX)'
      style={styles.input}
      />
      <TextInput
      placeholder='Postel Address'
      style={styles.postelAdress}
      multiline={true}
      />
     <View style={{flexDirection:'row'}}>
      <CheckBox
        />
      <Text>Agree with <Text style={{color:'#00b4d8',textDecorationLine:'underline'}} onPress={() => Linking.openURL('http://google.com')}>Term and Conditions</Text></Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
      <View style={{paddingTop:30, paddingHorizontal:100}}><Text>Already Registered? <TouchableOpacity><Text style={{color:'#00b4d8', textDecorationLine:'underline'}} onPress={()=>{navigation.navigate('Login')}}>Login</Text></TouchableOpacity> </Text></View>
    </View>
  )
}

const styles=StyleSheet.create({
    input:{
        height: 60,
    margin:5,
    borderWidth: 1,
    borderRadius:15,
    padding: 10,
    borderColor:'black',
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
        backgroundColor:'green',
        borderWidth: 0,
        borderRadius:15,
        paddingTop:14,
        textAlign:'center',
        fontSize:22,
        marginTop:20,
        color:'white'
    
      },
    
})

export default Registration