import { Dimensions, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import CardHolder from './CardHolder'
import Icons from './Icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function App() {
const [Win,setWin] = useState('')
const [isCross,setCross] = useState(false)
const [gameState,setGameState] = useState(new Array(9).fill("empty",0,9))

const Reset = () => {
    setWin('')
    setCross(false)
    setGameState(new Array(9).fill("empty",0,9))
}

const CheckWin = () => {
  if (
    gameState[0] === gameState[1] &&
    gameState[0] === gameState[2] &&
    gameState[0] !== 'empty'
  ) {
    setWin(`${gameState[0]} WON`);
  } else if (
    gameState[3] !== 'empty' &&
    gameState[3] === gameState[4] &&
    gameState[4] === gameState[5]
  ) {
    setWin(`${gameState[3]} WON`);
  } else if (
    gameState[6] !== 'empty' &&
    gameState[6] === gameState[7] &&
    gameState[7] === gameState[8]
  ) {
    setWin(`${gameState[6]} WON`);
  } else if (
    gameState[0] !== 'empty' &&
    gameState[0] === gameState[3] &&
    gameState[3] === gameState[6]
  ) {
    setWin(`${gameState[0]} WON`);
  } else if (
    gameState[1] !== 'empty' &&
    gameState[1] === gameState[4] &&
    gameState[4] === gameState[7]
  ) {
    setWin(`${gameState[1]} WON`);
  } else if (
    gameState[2] !== 'empty' &&
    gameState[2] === gameState[5] &&
    gameState[5] === gameState[8]
  ) {
    setWin(`${gameState[2]} WON`);
  } else if (
    gameState[0] !== 'empty' &&
    gameState[0] === gameState[4] &&
    gameState[4] === gameState[8]
  ) {
    setWin(`${gameState[0]} WON`);
  } else if (
    gameState[2] !== 'empty' &&
    gameState[2] === gameState[4] &&
    gameState[4] === gameState[6]
  ) {
    setWin(`${gameState[2]} WON`);
  } else if (!gameState.includes('empty', 0)) {
    setWin('DRAW!');
  }
}

const onChangeItem = (itemNumber : number) => {
if (gameState[itemNumber]==='empty') {
    gameState[itemNumber] = isCross ? 'CROSS' : 'CIRCLE'
    setCross(!isCross)
}else{
    //warning message as the place is not vacant
}
    CheckWin()
}

  return (
    <>
    
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={"#22242A"}/>  
      <View style={styles.headerContainer}> 
      <Text style={styles.headerText}>XOXO</Text>
    </View>

      {(Win!='')?              //winner reveal
      <View style={styles.textContainer}>
      <Text style={styles.winningText}>CROSS WON</Text>
      </View>
      :null}
    <View style={styles.TTC}>
      <View style={styles.cardbox}>
        <View style={styles.cardContainer}>
        {/*Here lies TTT */}
        </View>
        
      </View>
    </View>
    

      <View style={styles.bottomBar}>
        <View style={styles.buttonBox}>
          <Pressable>
          <Text style={styles.button}>Rerty</Text>
          </Pressable>
          <Pressable>
          <Text style={styles.button}>New Game</Text>
          </Pressable>
      </View>


      </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#22242A',
    flex:1
  },
  cardContainer:{
    
    height: windowHeight/2.5,
    width: windowHeight/2.5,
    backgroundColor: '#1B1E22',
    borderRadius: 8,
    
},
buttonBox:{
  flexDirection : 'row',
 width: windowWidth,
  justifyContent: 'space-evenly',
  marginVertical: 20,
  
},
button: {
  color : '#fff',
  backgroundColor: '#1D75FA',
  padding:15,
  width: windowHeight/7,
  textAlign: 'center',
  borderRadius: 6,
  fontFamily: 'PlusJakartaSans-VariableFont_wght',
  fontWeight: '700'
},
cardbox:{
 
},
bottomBar:{
  position: 'absolute',
  top: '90%'
},
headerContainer:{
  alignItems: 'center',
  marginVertical: 20,
  
  
},
headerText:{
  color: '#fff',
  fontFamily: 'PlusJakartaSans-VariableFont_wght',
  fontWeight: '600',
  fontSize: 15
},
TTC:{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: [{ translateX: -(windowHeight/5) }, { translateY: -((windowHeight/4.65)) }],
},
winningText:{
  color: '#fff',
  fontFamily: 'PlusJakartaSans-VariableFont_wght',
  fontSize: 12,
  textAlign: 'center'
},
textContainer:{
  marginVertical: windowHeight/6
},
crossDot:{
  width: 80,
  height: 80
}
})