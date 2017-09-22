import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = ({ label,value, onChangeText, placeholder,secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <TextInput style={inputStyle}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                //style={{height: Platform.OS == 'android' ? 40 : 20,width:200}}
                underlineColorAndroid='transparent'
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
            </View>
    )     
}

const styles = {
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
    },
    containerStyle:{
        height:50,
        flex:1,
        flenDirection:'row',
        //alignItems:'center'
    }
}

export { Input };


