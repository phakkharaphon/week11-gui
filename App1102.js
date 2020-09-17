import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

class App extends Component{
    state={
        counter:0,
        Title:'counter',
    }
    updateState=()=>{
        this.setstate({
            counter:0                                                 
        })
    }

    incrementCount=()=>{
        this.setState({
            counter:this.state.counter + 1
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>English Premier League</Text>
                <Text style={styles.text}>Scroce:{this.state.counter}</Text>
                <Text style={styles.text}>Team:{this.state.TeamA}</Text>
                <Text style={styles.text}>onPress={()=>this.updateState}</Text>
                <Button title="increment" onPress={()=>this.incrementCount()}  />
            </View>
        )
    }
}    

const styles=StyleSheet.create({
   contain:{
    flex:1,alignItems:'center',justifyContent:'center',
   },
   text:{textAlign:'center',marginVertical:8,
},
Title2:{
    textAlign:'center',
    color:'white',
    backgroundColor:'#48D1cc',
}
})
export default App