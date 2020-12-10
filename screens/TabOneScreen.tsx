import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../Tempdata';
import { StyleSheet,View,StatusBar,Modal,Text,ActivityIndicator} from 'react-native';
import Searchbar from '../components/searchbar';
import TodoList from '../components/TodoList';
import AddTodoList from '../components/Modal';
import fire from '../fire';

export default class TabOneScreen extends React.Component {
  state={
    addTodoVisible:false,
    user:{},
    loading:true,
    lists: data,
  };
  toggleAddTodoModal(){
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  }
  componentDidMount(){
    firebase = new fire((error,user) => {
      if(error){
        return alert("something went wrong")
      }
    
      firebase.getLists(list => {
        this.setState({list,user}, () => {
          this.setState({loading:false})
        });
      });

      this.setState({user});
    });
    
  }
  
 
renderList = list => {
  return <TodoList list={list} updateList={this.updateList}/>;
  
};
addList = list => {
  this.setState({lists:[...this.state.lists,{...list, id: this.state.lists.length + 1} ]})
  
};
updateList = list => {
  this.setState({
    lists: this.state.lists.map(item =>{
      return item.id === list.id ? list : item;
    })
  })
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
               <AddTodoList closeModal={() => this.toggleAddTodoModal()} addList={this.addList}/>
        </Modal>
        <View>
    <Text>User: {this.state.user.uid}</Text>
        </View>
      </TouchableOpacity>
      <View>
      <Text style={styles.button} onPress={() => this.toggleAddTodoModal()}>
                  Add Button
      </Text>
      </View>
      </View>
      
      
      

    <View style={styles.footer}>
    <FlatList data={this.state.lists}
              keyExtractor={item => item.name}
              keyboardShouldPersistTaps='always'
              renderItem={({item}) => 
              this.renderList(item)}
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
