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
    ScrollView,
    TouchableOpacity
} from "react-native";

import db from "../config"
import firebase from "firebase"

export default class MakeApoll extends Component{
    render(){
        return(
            <View>
                <TextInput
                placeholder='Write the problem'
                ></TextInput>

                <TextInput
                placeholder='option 1'
                >
                </TextInput>
                    <TouchableOpacity>
                        <Text>Add Option</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Publish Poll</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Discard Poll</Text>
                    </TouchableOpacity>
            
            </View>
        )
    }
} 