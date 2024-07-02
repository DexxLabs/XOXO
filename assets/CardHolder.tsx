import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardHolder() {
  return (
    <View >
      <View style={styles.cardContainer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        height: windowHeight/2.5,
        width: windowHeight/2.5,
        backgroundColor: '#1B1E22',
        borderRadius: 8,
        position: 'absolute',
        //transform: [{ translateX: (windowWidth) }, { translateY: (windowHeight) }],
    }
})