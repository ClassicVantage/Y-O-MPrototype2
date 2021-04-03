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

export default class VoteINpOlll extends Component{

    render(){
        return(
            <View>
                <Text>Question</Text>
                <TouchableOpacity>
                    <Text>Option 1</Text>
                </TouchableOpacity>
            </View>

            
        )
    }
}