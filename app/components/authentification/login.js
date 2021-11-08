import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Platform,Text, View, Image, ScrollView, TextInput ,TouchableOpacity,Dimensions, Alert} from 'react-native';
//commentjdjd

function Login(props) {
    const users={
        0:{username: "user 1",password : 1111},
        1:{username: "user 2",password : 2222}

    };
    const [user,setUser]=useState({
        user_name :"ahmed hafdi",
        password: "password 1"
    });
    const Login_List=()=>{
        if ( 
            (users[0].username==user.user_name && users[0].password==user.password)||
            (users[1].username==user.user_name && users[1].password==user.password)
        ){
            console.log("register")
        }else {
            console.log(user)
            Alert.alert("username os password is incorrect")
        }
    }
    
    useEffect(()=>{


    });
    return (
        <SafeAreaView>
        <View style={styles.container}>
        <Text style={styles.Title_Text}> Login</Text>
    <View style={styles.input_container}>
    <TextInput 
    placeholder="user name"
    onChangeText={(text)=>user.user_name=text}
    />
    </View>
    
    <View style={styles.input_container}>
    <TextInput 
    placeholder="passsword"
    onChangeText={(text)=>user.password=text}
    />
    </View>
    <TouchableOpacity  style={{alignSelf:'center'}} onPress={()=>{
        setUser({
            user_name:user.user_name,
            password:user.password,
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
</SafeAreaView>
    );
}

export default Login;
const styles = StyleSheet.create({
    container:{justifyContent:'center',flex : 1},
    Title_Text: {fontSize:20,fontWeight:'bold',alignSelf:'center',margin : 20,},
    input_container : {borderWidth:1,borderColor:'black',borderRadius:20,padding :10,marginHorizontal:40,margin:10, },
    text_register : {alignSelf:'flex-end',margin : 20,marginHorizontal:60,},

    
})