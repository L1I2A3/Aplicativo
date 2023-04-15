import React from "react"
import { TouchableHighlight, Text, StyleSheet } from "react-native"
import {COLORS} from '../assets/colors'

const Button = (props) => {
    return (
        <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
            <Text  style={styles.text}>{props.texto}</Text>            
        </TouchableHighlight>
    )
}
export default Button

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: COLORS.white,
    },
    button: {
        width: '95%',
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.accent,
        borderRadius: 10,
        padding: 1,
        margin: 30,
    },
    
});