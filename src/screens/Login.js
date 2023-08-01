import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Top}>
            <Image source={require('../assets/lgoo.png')} style={{height:300,width:300}} />

        </View>
        <View style={styles.Bottom} >

        </View>

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:3,

    },
    Top:{
        flex:1,
        backgroundColor:'green',
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal:50
    },
    Bottom:{
        flex:2,
        backgroundColor:'#DDD0E3'
    }
})

export default Login