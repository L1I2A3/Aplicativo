import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { COLORS } from '../../src/assets/colors'
import { useEffect } from 'react'
import { Container } from './style';
import { FlatList } from 'react-native';
import Item from './item'

const FavoriteScreen = ({ navigation }) => {


    const DATA = [ //TODO:tirar dps
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const routeUser = (item) => {
        console.log(item)
    }

    const renderItem = ({ item }) => <Item title={item.title} onPress={() => routeUser(item)}/>;

    return (
        <Container>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Container>
    );


};

export default FavoriteScreen;
