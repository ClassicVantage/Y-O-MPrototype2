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

import db from "../Config"
import firebase from "firebase"

export default class LogInScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:"",
            firstName:"",
            lastName:"",
            address:"",
            contact:"",
            confirmPassword:"",
            isModalVisible:"false"
            
        };
    }


    userSignUp=(emailId, password, ConfirmPassword)=>{
        if(password !== confirmPassword) {
            return Alert.alert("password doesn't match pls Check Your password");
        } else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(emailId, password)
            .then(()=>{
                db.collection("users").add({
                   email_id: this.state.emailId,
                   first_name:this.state.firstName,
                   last_name: this.state.LastName
                    
                })

                return Alert.alert("user has been Added", " ", [
                    {
                        text: "OK",
                        onPress:() =>this.setState({isModalVisible:false})
                    }
                    
                ])
            })
            .carch(error=>{
                var errorCode=error.code;
                var ErrorMessage=error.message;
                return Alert.alert(errorMessage);

            });

        }
    };

    userLogIn = (emailId,password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            this.props.navigation.navigate("HomeScreen")
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          });
    }

    showModal = () => {
        return(
            <Modal
            animationType="fade"
            transperent={true}
            visible={this.state.iMoalVisible}
            >
                <ScrollView style={StyleSheet.scrollview}>
                    <View style ={styles.signupView}>
                        <Text style={style.signUpText}>Sign Up</Text>
                    </View>
                    <View style={{flex:0.95}}>
                        <Text style={styles.label}> First Name</Text>
                        <TextInput
                        style={styles.formInput}
                        placeholder={"First Name"}
                        maxLength={12}
                        onChangeText={text =>{
                            this.setState({
                                firstName:text
                            });
                        }}
                        />

                            <Text style={styles.label}>Last Name</Text>
                            <TextInput
                            style={styles.formInput}
                            placeholder={"Last Name"}
                            maxLength={12}
                            onChangeText={text=>{
                                this.setState({
                                    lastName:text
                                });
                            }}
                            />

            <Text style={styles.label}>Email </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Email"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

            <Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Confrim Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />


                    </View>
                </ScrollView>
            </Modal>
        )
    }

    render(){
        return(
        <View style={styles.container}>

            {this.showModal()}
            <View style={{flex:0.25}}>
                <View style={{flex:0.15}}/>
                <View style={styles.eView}>
            
                </View>
            </View>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

            

            <TextInput
            style={[styles.loginBox, {marginTop:RFValue(15)}]}
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor="gray"
            onChangeText={text=>{
                this.setState({
                    password:text
                });
            }}
            >

            </TextInput>

           

            <View style={{ flex: 0.5, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ isModalVisible: true })}
            >
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>

           

            
        

        
        )
    }
}

const styles = StyleSheet.create({
  button:{
    color:"11698e",

  }
})