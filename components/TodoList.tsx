import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';



export default class TodoList extends React.Component{
  state ={
    showListVisible:false,
  }
  

  render(){
    const list = this.props.list;
    
    return(
      <TouchableOpacity style={styles.container}>
      <View style = {styles.listContainer}>
            <Text style={styles.list} numberOfLines={1}>{list.name}</Text>
      </View>
      </TouchableOpacity>
    );
  }

}


const styles = StyleSheet.create({
  listContainer:{
      paddingVertical:32,
      paddingHorizontal:16,
      marginHorizontal:12,
      flexDirection:"row",
      alignItems: "center",
      width: 200,
    },
    list:{
      fontSize:15,
      borderColor:'white',
    },
    container:{
          borderColor:'#bbb',
          borderWidth: 1,
          borderStyle:'solid',
          borderRadius: 10,
          color:'white',
          margin:10,
    }
  })

