import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import CardHolder from './CardHolder'
import Icons from './Icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function App() {
const [Win,setWin] = useState('')
const [isCross,setCross] = useState(true)
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
    <View style={styles.turnIndicator}>
      <View style={styles.IndicatorCard}>
        <Text style={styles.turnText}>TURN</Text>
        <View style={styles.XO}>
    <Image style={[styles.imageHandler,isCross?styles.selectionIndicator: null]} source={require('../assets/cross.png')}/>
    <Image style={[styles.imageHandler,isCross?null:styles.selectionIndicatorCircle]} source={require('../assets/circle.png')}/>
        </View>
      </View>
    </View>


      {Win != ''?              //winner reveal
      <View style={styles.bottomBar2}>
      <View style={styles.buttonBox}>
        <Text style={styles.winText}>{Win}</Text>
    </View>
    </View>
      :null}
    <View style={styles.TTC}>
      <View style={styles.cardbox}>
        <View style={styles.cardContainer}>
        {/*Here lies TTT */}
        <FlatList 
        data={gameState}
        numColumns={3}
        style={styles.grid}
        renderItem={ ({item,index}) => (
          <Pressable style={styles.box} onPress={()=>onChangeItem(index)} key={index} >
            <Icons name={item}/>
          </Pressable>
        )
        }
        />
        </View>
        
      </View>
    </View>
    

      <View style={styles.bottomBar}>
        <View style={styles.buttonBox}>
          <Pressable onPress={()=> Reset()}>
          <Text style={styles.button}>RELOAD</Text>
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
    
    
    justifyContent: 'center',
    alignItems: 'center'
    
    
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
  width: windowWidth/1.05,
  textAlign: 'center',
  borderRadius: 8,
  fontFamily: 'PlusJakartaSans-VariableFont_wght',
  fontWeight: '700'
},
winText:{
  color : '#fff',
  backgroundColor: '#1B1E22',
  padding:20,
  width: windowWidth/3,
  fontSize:12,
  textAlign: 'center',
  borderRadius: 8,
  fontFamily: 'PlusJakartaSans-VariableFont_wght',
},
cardbox:{
  
},
bottomBar:{
  position: 'absolute',
  top: '90%'
},
bottomBar2:{
  position: 'absolute',
  top: '74.5%'
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
  textAlign: 'center',
  
},
textContainer:{
  position: 'absolute',
  top: '75%',
  width: windowWidth,

},
crossDot:{
  width: 80,
  height: 80
},
imageHandler:{
  height: 40,
  width: 40,
  margin: 2
},
turnIndicator:{
  justifyContent: 'center',
  height: windowHeight/6,
  
  alignItems: 'center',
  //backgroundColor: '#fff'
},
IndicatorCard:{
  backgroundColor: '#1B1E22',
  padding: 10,
  borderRadius: 10

},
XO:{
  flexDirection: 'row',
  margin: 5
},
selectionIndicator:{
backgroundColor: '#1D75FA',
borderRadius : 8
},
selectionIndicatorCircle:{
  backgroundColor: '#FFFFFF',
borderRadius : 8
},

grid: {
  backgroundColor: '#1B1E22',
  padding: 10,
  borderRadius: 8
},
box: {
  height: windowHeight/8.95,
    width: windowHeight/8.95,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#22242A',
    margin: 6,
    borderRadius: 8
},
turnText:{
  color: '#fff',
  fontFamily: 'PlusJakartaSans-VariableFont_wght',
  fontSize: 12,
  textAlign: 'center',
}
})