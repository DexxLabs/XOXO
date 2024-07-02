import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'


type iconProps = PropsWithChildren<{
    name : string
}>

const Icon = ({name} : iconProps) => {
    switch (name) {
        case 'cross':
            return(
                <Image style={styles.imageHandler} source={require('../assets/cross.png')}/>
            )
            break;
            case 'circle':
                return(
                <Image style={styles.imageHandler} source={require('../assets/circle.png')}/>
                    
                )
                break;
    
        default:
            break;
    }
}

const styles = StyleSheet.create({
    imageHandler:{
        height: 60,
        width: 60
    }
})
export default Icon;