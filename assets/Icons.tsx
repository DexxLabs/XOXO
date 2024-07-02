import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'


type iconProps = PropsWithChildren<{
    name : string
}>

const Icon = ({name} : iconProps) => {
    switch (name) {
        case 'CROSS':
            return(
                <Image style={styles.imageHandler} source={require('../assets/cross.png')}/>
            )
            
            case 'CIRCLE':
                return(
                <Image style={styles.imageHandler} source={require('../assets/circle.png')}/>
                    
                )
                
    
        default:
            
    }
}

const styles = StyleSheet.create({
    imageHandler:{
        height: 70,
        width: 70
    }
})
export default Icon;