import React, {useState} from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';


export default function AddTodo({submitHandler}){
    const[text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }
    return(
        <View>
            <TextInput
            style = {styles.input}
            placeholder='type here'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)}  title='hinumdumi ko' color='#565967'/>
        </View>
    )
}


const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#565967',
        backgroundColor:'white',
    }
})
