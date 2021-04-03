import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ViewPoll from '../screens/View Polls';
import  MakeAPoll from '../screens/MakeAPoll';
import VoteINpOlll from '../screens/ParticipationScreen';

export const AppTabNavigator = createBottomTabNavigator({
        ViewYourPoll:{
        screen:ViewPoll,
        navigationOptions :{
            tabBarIcon:<Image source ={require("../assets/View Your Polls.png")} style={{width:20, height:20}}/>,
            tabBarLabel:"ViewYourPolls"

        }
    },

    MakeAPoll:{
        screen:MakeAPoll,
        navigationOptions:{
            tabBarIcon:<Image source ={require("../assets/Make A Poll.png")} style ={{width:20, height:20}}/>,
            tabBarLabel:"Make A Poll"
        }

    },

    ParticipateInAPoll:{
        screen:VoteINpOlll,
        navigationOptions:{
                tabBarIcon:<Image source={require("../assets/Vote in A Poll.png")} style={{width:20, height:20}}/>,
                tabBarLabel:"Vote in a Poll"
        }
    }
})