import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { useEffect, useState } from 'react'
import { Container, FlatList } from './style';
import Item from './item'

const FavoriteScreen = () => {
    const [data, setData] = useState([])

    const routeUser = (item) => {
        console.log(item)
    }

    const renderItem = ({ item }) => <Item item={item} onPress={() => routeUser(item)}/>;

    return (
        <Container>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Container>
    );
};

export default FavoriteScreen;