import React from 'react'
import {View,Text} from 'react-native'

//Child Component
const HomeScreen=()=>{
  return(
    <View>
      <text>Home Screen</text  >
    </View>
  )
} 

//parent Component
const App=()=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>   
    <text></text>
    <HomeScreen></HomeScreen>
    <HomeScreen></HomeScreen>
    <HomeScreen></HomeScreen>
    </View>
  )
}
export default App