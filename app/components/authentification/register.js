import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Platform,Text, View, Image, ScrollView, TextInput ,TouchableOpacity,Dimensions, Alert} from 'react-native';


function Register(props) {
   
    return (
        <View style={styles.container}>
        <Text style={styles.Title_Text}> Register</Text>
    <View style={styles.input_container}>
    <TextInput 
    placeholder="user name"
    />
    </View>
    
    <View style={styles.input_container}>
    <TextInput 
    placeholder="passsword"
    />
    </View>
  
  

    <TouchableOpacity  style={styles.text_register} onPress={()=>
        console.log("login")
       }>
        <Text >Login</Text>
    </TouchableOpacity>
    
</View>
    );
}

export default Register;
const styles = StyleSheet.create({
    container:{justifyContent:'center',flex : 1},
    Title_Text: {fontSize:20,fontWeight:'bold',alignSelf:'center',margin : 20,},
    input_container : {borderWidth:1,borderColor:'black',borderRadius:20,padding :10,marginHorizontal:40,margin:10, },
    text_register : {alignSelf:'flex-end',margin : 20,marginHorizontal:60,},

    
})