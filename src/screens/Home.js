import { View, Text, StyleSheet, ScrollView, TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/designSystem'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
const Home = () => {
    const [clicked,setClicked]=useState(false);
    const [clicked2,setClicked2]=useState(false);
    const [clicked3,setClicked3]=useState(false);
    const [clicked4,setClicked4]=useState(false);
    const [clicked5,setClicked5]=useState(false);
    const [clicked6,setClicked6]=useState(false);
    const [clicked7,setClicked7]=useState(false);
    const [phoneNoModal, setPhoneNoModel]= useState(false);
    const [bankModal, setBankModal]= useState(false);
    const [profileModal, setProfileModal]= useState(false);
    const [cnicModal, setCnicModal]=useState(false);
    const [nomineModal, setNomineeModal]=useState(false);
    const [nomineAccountModal, setNomineeAccountModal]=useState(false);
    const [nomineCnicModal, setNomineeCnicModal]= useState(false);

    const handleAddPhone = ()=>{
      setPhoneNoModel(!phoneNoModal);
      setClicked(true);
    }
    const handleBankDetails = ()=>{
      setClicked2(true);
    }
    const handleProfilePic = ()=>{
      setClicked3(true);
    }
    const handleCnic = ()=>{
      setClicked4(true);
    }
    const handleNominee = ()=>{
      setClicked5(true);
    }
    const handleNomineeAccount = ()=>{
      setClicked6(true);
    }
    const handleNomineeCnic = ()=>{
      setClicked7(true);
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
      <Text>User Details.</Text>
      <Text style={{marginTop:5, color:colors.placeholder}}>Please provide following information to continue the services of Life Changer (Pvt.) Ltd.
      </Text>
      <View style={styles.card}>
          <TouchableOpacity onPress={handleAddPhone}><Text style={styles.text}>Add Phone Number <Icon name="angle-right" size={18} color='#51cb20'  /> 
         
          </Text>
          <Text style={{marginLeft:15, color:colors.placeholder}}>Add and verify your phone number for alerts!</Text>
          </TouchableOpacity>
          <View style={{marginLeft:330,bottom:20}}>
          {clicked ? (
                  <Icon name="check-square-o" size={30} color="green"  />
                 ) : (
                <Icon name="square-o" size={30} color="gray" />
                 )}
          </View>
          <Text style={{marginLeft:15, color:'red', bottom:10}} >Required*</Text>
      </View>
      
      <View style={styles.card}>
      <TouchableOpacity onPress={handleBankDetails}><Text style={styles.text}>Bank Account Details <Icon name="angle-right" size={18} color='#51cb20'  /> 
         
         </Text>
         <Text style={{marginLeft:15, color:colors.placeholder}}>Add your bank account for funds transfer</Text>
         </TouchableOpacity>
         <View style={{marginLeft:330,bottom:20}}>
         {clicked2 ? (
                 <Icon name="check-square-o" size={30} color="green"  />
                ) : (
               <Icon name="square-o" size={30} color="gray" />
                )}
         </View>
         <Text style={{marginLeft:15, color:'red', bottom:10}} >Required*</Text>
      </View>
                  
      <View style={styles.card}>
      <TouchableOpacity onPress={handleProfilePic}><Text style={styles.text}>Profile Photo <Icon name="angle-right" size={18} color='#51cb20'  /> 
         
         </Text>
         <Text style={{marginLeft:15, color:colors.placeholder}}>Upload your profile photo for clear identity</Text>
         </TouchableOpacity>
         <View style={{marginLeft:330,bottom:20}}>
         {clicked3 ? (
                 <Icon name="check-square-o" size={30} color="green"  />
                ) : (
               <Icon name="square-o" size={30} color="gray" />
                )}
         </View>
         <Text style={{marginLeft:15, color:'red', bottom:10}} >Required*</Text>
      </View>
      
      <View style={styles.card}>
      <TouchableOpacity onPress={handleCnic}><Text style={styles.text}>Add Cnic <Icon name="angle-right" size={18} color='#51cb20'  /> 
         
         </Text>
         <Text style={{marginLeft:15, color:colors.placeholder}}>Upload both side photo of your CNIC</Text>
         </TouchableOpacity>
         <View style={{marginLeft:330,bottom:20}}>
         {clicked4 ? (
                 <Icon name="check-square-o" size={30} color="green"  />
                ) : (
               <Icon name="square-o" size={30} color="gray" />
                )}
         </View>
         <Text style={{marginLeft:15, color:'red', bottom:10}} >Required*</Text>
      </View>
      
      <View style={styles.card}>
      <TouchableOpacity onPress={handleNominee}><Text style={styles.text}>Add Nominee <Icon name="angle-right" size={18} color='#51cb20'  /> 
         
         </Text>
         <Text style={{marginLeft:15, color:colors.placeholder}}>Effortlessly nominate deserving individuals</Text>
         </TouchableOpacity>
         <View style={{marginLeft:330,bottom:20}}>
         {clicked5 ? (
                 <Icon name="check-square-o" size={30} color="green"  />
                ) : (
               <Icon name="square-o" size={30} color="gray" />
                )}
         </View>
         <Text style={{marginLeft:15, color:'red', bottom:10}} >Required*</Text>
      </View>
      
      <View style={styles.card}>
      <TouchableOpacity onPress={handleNomineeAccount}><Text style={styles.text}>Nominee Bank Account <Icon name="angle-right" size={18} color='#51cb20'  /> 
         
         </Text>
         <Text style={{marginLeft:15, color:colors.placeholder}}>Add your nominee bank account for funds claim</Text>
         </TouchableOpacity>
         <View style={{marginLeft:330,bottom:20}}>
         {clicked6 ? (
                 <Icon name="check-square-o" size={30} color="green"  />
                ) : (
               <Icon name="square-o" size={30} color="gray" />
                )}
         </View>
         <Text style={{marginLeft:15, color:'red', bottom:10}} >Required*</Text>
      </View>
      
      <View style={styles.card}>
      <TouchableOpacity onPress={handleNomineeCnic}><Text style={styles.text}>Add nominee CNIC <Icon name="angle-right" size={18} color='#51cb20'  /> 
         
         </Text>
         <Text style={{marginLeft:15, color:colors.placeholder}}>Upload both side photo of your nominee CNIC</Text>
         </TouchableOpacity>
         <View style={{marginLeft:330,bottom:20}}>
         {clicked7 ? (
                 <Icon name="check-square-o" size={30} color="green"  />
                ) : (
               <Icon name="square-o" size={30} color="gray" />
                )}
         </View>
         <Text style={{marginLeft:15, color:'red', bottom:10}} >Required*</Text>
      </View>
      {/**------------------------Modal------------------------------------------------ */}
      <Modal isVisible={phoneNoModal} onBackdropPress={() => setPhoneNoModel(false)}>
      
        <View style={styles.modal}>
          <Text style={{marginLeft:15, fontSize:22}}>Add Phone Number !</Text>
          <Text style={{marginLeft:15, color:colors.accent}}>Add your phone number details for furthur updates and information</Text>
          <Text style={{marginLeft:15,marginTop:15,marginBottom:5,color:colors.placeholder}}>Add Number</Text>
          <TextInput style={styles.textInput} 
          placeholder='My Number'
          keyboardType="phone-pad"
          />
          <TouchableOpacity>
            <Text style={styles.addBtn}>Add   <Icon name="angle-right" size={23} color="white"  /></Text>
          </TouchableOpacity>
            
        </View>
      </Modal>
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    marginTop:15,
    marginHorizontal:15
    
  },
  addBtn:{
    
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
  textInput:{
    height:60,
    width:280,
    marginLeft:10,
    backgroundColor:'white',
    borderRadius:10,paddingLeft:10
  },
  card:{
    height:100,
    width:380,
    marginTop:10,
    borderRadius:10,
    backgroundColor:colors.secondary
  },
  text:{
    color:colors.primary,
    fontSize:18,
    marginLeft:15,
    marginTop:5,
  },
  modal:{
    height:300,
    backgroundColor:colors.secondary, 
    margin:20 ,
    padding:20,
    borderRadius:10,
  }
})

export default Home