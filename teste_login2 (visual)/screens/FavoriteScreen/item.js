import React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../src/assets/colors';

const ButtonMessage = styled.TouchableHighlight`
    background-color: ${props => props.color};
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
`;

const TextMessage = styled.Text`
    font-size: 24px;
    color: ${COLORS.white};
`;
const Text = styled.Text`
    font-size: 16px;
    color: ${COLORS.white};
    font-weight: bold;
`;

const Item = ({ item, onPress}) => {
    return (
        <ButtonMessage onPress={onPress} underlayColor='transparent' color = {item.color}>
            <>
                <TextMessage>{item.message}</TextMessage>
                <Text>{item.src}</Text>
            </>
        </ButtonMessage>
    )
}

export default Item;