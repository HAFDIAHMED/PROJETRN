import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Platform,Text, View, Image, ScrollView, TextInput ,Dimensions, Alert, TouchableOpacity} from 'react-native';
import Auth0 from 'react-native-auth0';

//import {height,width} from metrics;
/*
    <Text style={metrics}> text 2 </Text>
            <Image  source={require("../../images/gear1.png")} />
             const auth0= new Auth0({
        domain : "dev-8j-yzlsd.us.auth0.com",
        clientId : "3S1hGT8enyGxLemwDlJLLlFrpUcwhWJa"
    });

*/
function HomePage(props) {
    const auth0= new Auth0({
        domain : "dev-8j-yzlsd.us.auth0.com",
        clientId : "3S1hGT8enyGxLemwDlJLLlFrpUcwhWJa"
    });
    const [User,setUser]=useState({
        user_name :"ahmed hafdi",
        password: "password 1"
    });
    const users={
        0:{username: "user 1",password : 1111},
        1:{username: "user 2",password : 2222}

    }
   
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
    const Auth0login =()=>{
        
        auth0.webAuth
      .authorize({scope: 'openid email profile'})

      .then(res => {
        console.log(res);
        auth0.auth
          .userInfo({ token: res.accessToken })
          .then(user => {
            console.log("register");
          })
          .catch(console.error);
      })
      .catch(error => console.log(error));
    }
    useEffect(()=>{
        //Auth0login();
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
    <TouchableOpacity  style={{alignSelf:'center'}} onPress={()=>{
        setUser({
            user_name:User.user_name,
            password:User.password,
        });
        console.log(User);
       }}>
        <Text >Login0</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.text_register} onPress={()=>
        console.log("register")
       }>
        <Text >Register</Text>
    </TouchableOpacity>
    
</View>

    );
}

export default HomePage;
const styles = StyleSheet.create({
    container:{justifyContent:'center',flex : 1},
    Title_Text: {fontSize:20,fontWeight:'bold',alignSelf:'center',margin : 20,},
    input_container : {borderWidth:1,borderColor:'black',borderRadius:20,padding :10,marginHorizontal:40,margin:10, },
    text_register : {alignSelf:'flex-end',margin : 20,marginHorizontal:60,},

    
})