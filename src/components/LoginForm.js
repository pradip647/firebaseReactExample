import React, {Component} from  'react';
import firebase from 'firebase';
import {View,Text} from 'react-native';

import { Button, Card, CardSection,Input, Spinner } from './common';


class LoginForm extends Component {
    state = { email:'', password:'',error:'',loading:false };


    onButtonPress(){
        const { email,password } = this.state;
        this.setState({error:'', loading:true});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this))
        })
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        })
    }

    onLoginFailed(){
        this.setState({
            loading:false,
            error:'Authentication failed'
        })
    }


    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}> 
                Log in
            </Button>
        )

    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="Enter your Email"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        )
    }

}

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default LoginForm;