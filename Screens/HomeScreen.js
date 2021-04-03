import React,{Component} from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    Modal,
    KeyBoardAvoidingView,
    StyleSheet,
    Alert,
    ScrollView
} from "react-native";

import db from "../config"
import firebase from "firebase"

export default class welcomescreen extends Component{

    render(){
        return(
        <View style={styles.container}>

            
            <Image
              source={require("../assets/YOM LOGO.png")}
              style={styles.LogoYas}
            />
            
            <TouchableOpacity style={styles.MakeApOllbutton}>
                <Text> Make a polll</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewDiPoll}>
                <Text>View your polls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Vote}>

                <Text> Vote in a poll</Text>
            </TouchableOpacity>
        </View>
        )
    }

    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#006a71"
    },
    LogoYas:{
    height:50,
    width:100
    },
    MakeApOllbutton:{
        height:50,
        width:200,
        color:"#11698e"
    },
    ViewDiPoll:{
        height:50,
        width:200,
        color:"#11698e"
    },
    Vote:{
        height:50,
        width:200,
        color:"#11698e"
    }
    

})