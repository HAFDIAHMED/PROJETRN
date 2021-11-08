import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Platform,Text, View, Image, ScrollView, TextInput ,TouchableOpacity,Dimensions, Alert} from 'react-native';


function Login(props) {
    const users={
        0:{username: "user 1",password : 1111},
        1:{username: "user 2",password : 2222}

    }
    const [User,setUser]=useState({
        user_name :"ahmed hafdi",
        password: "password 1"
    });
    const Login_List=()=>{
        if ( 
            (users[0].username==User.user_name && users[0].password==User.password)||
            (users[1].username==User.user_name && users[1].password==User.password)
        ){
            console.log("register")
        }else {
            console.log(User)
            Alert.alert("username os password is incorrect")
        }
    }
    
    useEffect(()=>{


    })
    return (
        <View style={styles.container}>
        <Text style={styles.Title_Text}> Login</Text>
    <View style={styles.input_container}>
    <TextInput 
    placeholder="user name"
    onChangeText={(text)=>User.user_name=text}
    />
    </View>
    
    <View style={styles.input_container}>
    <TextInput 
    placeholder="passsword"
    onChangeText={(text)=>User.password=text}
    />
    </View>
    <TouchableOpacity  style={{alignSelf:'center'}} onPress={()=>{
        setUser({
            user_name:User.user_name,
            password:User.password,
        });
        Login_List();
       }}>
        <Text >Login</Text>
    </TouchableOpacity>
  

    <TouchableOpacity  style={styles.text_register} onPress={()=>
        console.log("register")
       }>
        <Text >Register</Text>
    </TouchableOpacity>
    
</View>
    );
}

export default Login;
const styles = StyleSheet.create({
    container:{justifyContent:'center',flex : 1},
    Title_Text: {fontSize:20,fontWeight:'bold',alignSelf:'center',margin : 20,},
    input_container : {borderWidth:1,borderColor:'black',borderRadius:20,padding :10,marginHorizontal:40,margin:10, },
    text_register : {alignSelf:'flex-end',margin : 20,marginHorizontal:60,},

    
})