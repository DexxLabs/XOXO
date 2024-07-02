import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>XOXO</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    headerText:{
        color: '#fff',
        fontFamily: 'PlusJakartaSans-VariableFont_wght',
        fontWeight: '600',
        fontSize: 15
    }
})