import styled from "styled-components/native";
import {COLORS} from "../../src/assets/colors"

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const FlatList = styled.FlatList`
    width: 95%;
    height: 100%;
`
export const InsideFlatListContainer = styled.View`
    background-color: ${COLORS.primary};
    height: 100px;
    width: 100px;
    margin: 10px;
    margin-top: 10px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Separator = styled.View`
    height: 2px;
    background-color: ${COLORS.primary};
`
export const Text = styled.Text`
    color: ${COLORS.white};
    font-size: 14px;
    justify-content: center;
    align-items: center;
`
