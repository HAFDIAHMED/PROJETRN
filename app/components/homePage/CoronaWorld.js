import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Platform,Text, View, Image, ScrollView, TextInput ,Dimensions, Alert, TouchableOpacity} from 'react-native';
import metrics from '../../trash/Metrics';
function CoronaWorld(props) {
    const [Countries , setCountries]=useState([]);
    const  Tags=['cases','deaths','recovered','tested']
    const GetCountries=async()=>
    {
        try {
            const response=await fetch("https://coronavirus-19-api.herokuapp.com/countries");
            const coronajson= await response.json();
            setCountries(coronajson);
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
       GetCountries();
        console.log(Countries)
    })
    return (
        <View style={styles.container}>
            
            <ScrollView horizontal={true} style={styles.horizontal}>
                {
                    Tags.map((tags,index)=>{
                        return (
                        <View key={index}>
                            <TouchableOpacity style={styles.tags_style} >
                                <Text style={styles.Title_Text}>{tags}</Text>
                            </TouchableOpacity>
                        </View>
                        );
                        
                    })
                }
            </ScrollView>
            <ScrollView style={styles.vertical}>
                {
                    Countries.map((countries,index)=>{
                        return (
                            <View>
                                <Text> country {countries.country}</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
         
            
           
        </View>
    );
}

export default CoronaWorld;

const styles = StyleSheet.create({
    container:{justifyContent:'center',alignItems:'center'},
    Title_Text: {fontSize:20,fontWeight:'bold',alignSelf:'center',},
    input_container : {borderWidth:1,borderColor:'black',borderRadius:20,padding :10,marginHorizontal:40,margin:10, },
    text_register : {alignSelf:'flex-end',margin : 20,marginHorizontal:60,},
    tags_style:{margin : 10, borderWidth:1,borderRadius:20,padding:10,marginBottom:10,},
    horizontal : {marginTop:80,borderWidth:1,margin : 10,},
    vertical : {borderWidth:1,}
})