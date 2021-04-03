import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Text,
    KeyBoardAvoidingView
}
from 'react-native'
import db from '../Config' 
import firebase from 'firebase'

export default class ViewPoll extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Text>your poll</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

