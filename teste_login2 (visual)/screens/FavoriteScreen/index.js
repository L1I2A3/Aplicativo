import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { useEffect, useState } from 'react'
import { Container, FlatList } from './style';
import Item from './item'
import useRoute from '@react-navigation/native'

const FavoriteScreen = ( {route} ) => {
    const { data } = route.params;

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