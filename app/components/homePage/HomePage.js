import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import metrics from '../../trash/Metrics';
//import {height,width} from metrics;
import { Dimensions } from 'react-native';
/*
    <Text style={metrics}> text 2 </Text>
            <Image  source={require("../../images/gear1.png")} />

*/
function HomePage(props) {
    useEffect(()=>{
        let {height, width}=Dimensions.get('window');
        console.log(
            height,width
        )
    })
    return (
       
            <View style={styles.container}>
            <Text style={styles.text}> text 1 </Text>
           
            </View>

    );
}

export default HomePage;
const styles = StyleSheet.create({
    container : {
        flex : 3,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    text : {
        color : 'black',fontWeight:'bold',fontSize:25,borderWidth:2,
        height: metrics.widthPercentageToDP(100),width:metrics.widthPercentageToDP(98)
    },
    image_style : {width: Dimensions.get('window').width, height: Dimensions.get('window').height,
          
    }
})