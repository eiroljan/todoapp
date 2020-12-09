import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const searchbar = () => {
    return(
        <View style={styles.container}>
            <FontAwesome name="search" size={23} color={'white'} />
            <TextInput style={styles.searchInput} 
                       placeholder='Search here' 
                       placeholderTextColor="gray"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        width: '100%',
        height:50,
        backgroundColor:'#565967', 
        borderRadius:8,
        justifyContent:'center',
        flexDirection:'row',
        padding:15,
        alignItems:'center'
    },
    searchInput:{
        width: '100%',
        height: '100%',
        paddingLeft:8,
        fontSize:16,
        color:'gray',
        
        
    }

})
export default searchbar;