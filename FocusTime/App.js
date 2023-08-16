import {View,Text,Image,ImageBackground,ScrollView,Button,Pressable,Modal,StatusBar,ActivityIndicator,Alert} from 'react-native';
import {useState} from 'react';
import Logo from './assets/snack-icon.png'
const App = ()=>{
  const [count,setCount]=useState(0);
  const [isVisble,setIsVisble]=useState(false);

  const [indicator,setIndicator]=useState(false);
  return  <View style = {{flex:1,backgroundColor:'plum',padding:40}}> 
        <StatusBar backgroundColor='lightgreen' hidden={false}/>
       <ScrollView>
       <Image source={{uri:'https://picsum.photos/seed/picsum/200/300'}} style = {{height:200}}/> 
        <Text>
                          I am thrilled about the opportunity to join [Company Name] as a React Native developer, and I would like to share the reasons behind my strong interest in contributing to your team.

                    First and foremost, [Company Name] has built a remarkable reputation for its commitment to innovation and pushing the boundaries of mobile application development. I have closely followed the impressive projects and products that [Company Name] has produced, and I am excited by the prospect of being part of a team that consistently delivers cutting-edge solutions to users' needs.

                    My passion for React Native stems from its power to create seamless and engaging user experiences across various platforms. Joining [Company Name] as a React Native developer would provide me with an exceptional platform to leverage my skills in a way that aligns perfectly with the company's vision. The prospect of working on projects that have a direct impact on users' lives and interactions is truly motivating.
  </Text>
       <Image source={{uri:'https://picsum.photos/seed/picsum/200/300'}} style = {{height:300}}/> 
       </ScrollView>
       <Button title  = "on" onPress = {()=>{
         setCount(count+1) 
       }} onPressOut = {()=>{setCount(count-1) }}  onLongPress={()=>{setCount(count+10)}} color='midnightblue' disabled={false} />

       
       <Pressable >
          <Text>{count}</Text>
          
       </Pressable>
      <View>
        <Button title='open' onPress={()=>{
          setIsVisble(true)
        }}/>
      </View>

      <Modal 
      visible={isVisble} 
      onRequestClose={()=>{
      setIsVisble(false)}}
      animationType='slide'
      presentationStyle='PageSheet'
      
      >
         <Text>Hello MOdel</Text>
         <Button title='Close' onPress={()=>{
           setIsVisble(false)
         }}/>
      </Modal> 
     
    <ActivityIndicator size='large' animating={indicator} />
    <Button title='indicator' onPress={()=>{
      indicator?setIndicator(false):setIndicator(true)
    }} /> 
    <Button title='Alert' onPress={()=>{Alert.alert("Invalid Data","Invalid User Name",[
      {
        text:'ok',

      },
      {
        text:'Cancel',

      }
    ])}}/>   
    </View>
}

export default App;