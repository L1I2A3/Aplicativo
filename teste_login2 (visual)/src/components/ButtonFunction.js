import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    Image,
    View,
} from 'react-native';
import { COLORS } from '../assets/colors';
    //TODO: como passar cores, que vem como valores de um outro arquivo em props para este botão?
const ButtonFunction = (props) => {
    return (
        <View>
            <TouchableHighlight  style={styles.button}  onPress={() => props.onClick()}>
                <>
                    <Text style={styles.text}> {props.texto} </Text>
                    <Image style={styles.image} source={props.root} />
                </>
            </TouchableHighlight>
        </View>
    );
};
export default ButtonFunction;

const styles = StyleSheet.create ({
    text: {
        fontSize: 24,
        color: COLORS.white,
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 7
    },
    button: {
        width: 340,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        padding: 1,
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'cover',
    },
});
