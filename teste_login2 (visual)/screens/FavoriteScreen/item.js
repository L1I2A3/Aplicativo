import React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../src/assets/colors';

const Button = styled.TouchableHighlight`
    background-color: ${COLORS.primary};
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
`;

const TextName = styled.Text`
    font-size: 24px;
    color: ${COLORS.white};
`;

const TextEmail = styled.Text`
    font-size: 16px;
    color: ${COLORS.white};
`;

const FavoriteScreen = ({title, onPress}) => {
    return (
        <Button onPress={onPress} underlayColor='transparent'>
            <>
               {/* <TextName>{item.nome}</TextName>
                <TextEmail>{item.email}</TextEmail>*/}
                <TextName>{title}</TextName>

            </>
        </Button>
    )
}

export default FavoriteScreen;