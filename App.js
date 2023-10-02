import {Component, React, useState} from "react";
import { Text, View, Alert, Button, TextInput } from 'react-native';
import * as MyImport from './components/Second';

// const App =  ()=>  {
//   const [ getName, setName ] = useState("");
//   const [ getSubmitName, setSubmitName ] = useState("");
  
//   return (
//     <View style={{ flex:1, justifyContent:"center" }}>

      
//       <Text style={{fontSize:18}}> {MyImport.default} , {getSubmitName}</Text>
      
//       <Button color="blue" title='Click' onPress={()=>setSubmitName(getName)}></Button>

//       <Text>My session: {MyImport.session} , {MyImport.session1}</Text>
//       <Text>Count: {MyImport.myfunc()}</Text>

//       <TextInput style={{borderWidth:1}} placeholder="Enter a text" 
//       onChangeText={setName} value={getName}
//       ></TextInput>

//       <Text>{getName}</Text>
   

//     </View>
//   );
// }

class App extends Component{

state ={
  name:""
}
  render(){
    return(
      <View>
        <Text>Hello World {this.state.name}</Text>
        <TextInput style={{borderWidth:1}} onChangeText={(text)=>this.setState({name:text})} ></TextInput>
      </View>
    )
  }
}


export default App;