import React from 'react';
import {TouchableOpacity,Text,StyleSheet,Button,View} from 'react-native';



export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.list}>
            {item.text}
           
            <Button title="Delete" onPress={() => pressHandler(item.key)}
              
              buttonStyle={{ }}/>
            </Text>
            
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    list:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10,
        color:'white',
        
    },

    container: {
         
       },
        
})
