import React, { Component } from 'react';
import { Text, StyleSheet,View,KeyboardAvoidingView,TouchableOpacity,TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default class AddTodoList extends Component {
    state ={
        name:"",
    }
    createTodo = () => {
        const {name} = this.state

       const list = {name}
       this.props.addList(list);
       this.setState({name:""});
       this.props.closeModal();
    }
    render() {
        return (
           <KeyboardAvoidingView style={styles.container} behavior='padding'>
               <TouchableOpacity style={{position:'absolute', top:64,right:32}} onPress={this.props.closeModal}>
                    <AntDesign name='close' size={24} color={'black'}/>   
               </TouchableOpacity>
               <View style={{alignSelf:'stretch',marginHorizontal:32}}>
                   <Text style = {styles.title}>create todo list</Text>
                    <TextInput style={styles.input} placeholder='Title' onChangeText={text => this.setState({name: text})}/>

                    <TouchableOpacity style={[styles.create,{backgroundColor:'blue'}]}>
                        <Text style={{color:'white', fontWeight:'600'}}>
                            Create!
                        </Text>

                    </TouchableOpacity>
               </View>
           </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize: 28,
        fontWeight:'800',
        color:'black',
        alignSelf:'center',
        marginBottom:16,
    },
    input:{
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'blue',
      borderRadius:6,
      height:50,
      marginTop:8,
      paddingHorizontal:16,
      fontSize:18,
    },
    create:{
        marginTop:24,
        height:50,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
    }
})

// <AntDesign name='close' size={24} color={Colors.black}/>