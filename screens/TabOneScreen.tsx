import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../Tempdata';
import { StyleSheet,View,StatusBar,Modal,Text} from 'react-native';
import Searchbar from '../components/searchbar';
import TodoList from '../components/TodoList';
import AddTodoList from '../components/Modal';
import fire from '../firebase/firebaseapi';

export default class TabOneScreen extends React.Component {
  state={
    addTodoVisible:false
  };
  toggleAddTodoModal(){
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  }
  componentDidMount(){

  }



  render(){
    return (
      <View style={styles.container}>
      <Searchbar/>
      <View style={styles.header}>
      <TouchableOpacity style={styles.touch}>
        <Modal animationType='slide' 
               visible={this.state.addTodoVisible} 
               onRequestClose={() => this.toggleAddTodoModal()}>
               <AddTodoList closeModal={() => this.toggleAddTodoModal()}/>
        </Modal>
      </TouchableOpacity>
      <View>
      <Text style={styles.button} onPress={() => this.toggleAddTodoModal()}>
                  Add Button
      </Text>
      </View>
      </View>
      
      
      

    <View style={styles.footer}>
    <FlatList data={data}
              keyExtractor={item => item.name}
              renderItem={({item}) => 
              (<TodoList list={item}/>)}
    />
     
    
    </View>
    </View>
    
  );
  
}
}

const styles = StyleSheet.create({
  container:{
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
   
  },
  header:{
    height:200,
    width:'auto',
  },
  task:{
    fontSize:24,
  },
  footer:{
    height:250,
    padding:20,
    margin:5,
    flexDirection:"row",
    backgroundColor:'#565967',
    borderRadius:15,
   
  },
  lists:{
    color:'white',
  },
  touch:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop:50,
    backgroundColor:'white',
    borderWidth:1,
    borderStyle:'solid',
    color:'white',
  },
  button:{
    color:'white',
    textAlign:'center'
  },
  
})
