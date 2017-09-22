import React, {Component} from  'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header,Button,Spinner,Card,CardSection} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state={ loggedin:null };
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBmxJ1WaLUyDcH8_xzVVGB6G6lPIF-A7GU',
            authDomain: 'fir-react-b2e5a.firebaseapp.com',
            databaseURL: 'https://fir-react-b2e5a.firebaseio.com',
            projectId: 'fir-react-b2e5a',
            storageBucket: 'fir-react-b2e5a.appspot.com',
            messagingSenderId: '1044333468207'
        })

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedin:true});
            }else{
                this.setState({loggedin:false});
            }
        })
    }

    renderContent(){
        switch(this.state.loggedin){
            case true:
                return (
                <View> 
                    <Card>
                        <CardSection>
                            <Button onPress={()=>firebase.auth().signOut()}> 
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                </View>);
            case false:
                return <LoginForm />;
            default:
                return (<View style={{paddingTop:100}}><Spinner size="large" /></View>);
        }
    }

    render(){
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;

/*<script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBmxJ1WaLUyDcH8_xzVVGB6G6lPIF-A7GU",
    authDomain: "fir-react-b2e5a.firebaseapp.com",
    databaseURL: "https://fir-react-b2e5a.firebaseio.com",
    projectId: "fir-react-b2e5a",
    storageBucket: "fir-react-b2e5a.appspot.com",
    messagingSenderId: "1044333468207"
  };
  firebase.initializeApp(config);
</script>*/