/*import { Image,  SafeAreaView} from 'react-native'
import React from 'react'
import { COLORS } from '../../src/assets/colors'
import { Container, FlatList, InsideFlatListContainer, Separator, Text } from './style'
import Button from '../../src/components/Button';


const PecsScreen = () => {

  const data = [

    {
      id: 1,
      imageUrl: 'https://static.arasaac.org/pictograms/25556/25556_300.png',
      title: 'Arroz',
    },
    {
      id: 2,
      imageUrl: 'https://static.arasaac.org/pictograms/3294/3294_300.png',
      title: 'Feijão'
    },
    {
      id: 3,
      imageUrl: 'https://static.arasaac.org/pictograms/2503/2503_300.png',
    title: 'Batata',
    },
    {
      id: 4,
      imageUrl:'https://static.arasaac.org/pictograms/36354/36354_300.png',
      title: 'Batata doce',
    },
    {
      id: 5,
      imageUrl: 'https://static.arasaac.org/pictograms/2455/2455_300.png',
      title: 'Macarrão',
    },
    {
      id: 6,
      imageUrl: 'https://static.arasaac.org/pictograms/32338/32338_300.png',
      title: 'desagradável',
    },

    {
      id: 7,
      imageUrl:  'https://static.arasaac.org/pictograms/32340/32340_300.png',
      title: 'Agradável',

    }, 
    {
      id: 8,
      title: 'quero',
      imageUrl: 'https://static.arasaac.org/pictograms/5441/5441_300.png',
    },
    {
      id: 9,
      title: 'não quero',
      imageUrl: 'https://static.arasaac.org/pictograms/6156/6156_300.png',
    },
    
  ]
  return (
    <Container>
      <SafeAreaView />
      <Button texto='Excluir Itens Salvos' />

            <FlatList contentContainerStyle={{margin:10, paddingBotton:60}}
              data = {data} 
              renderItem={({ item })=> (
                <InsideFlatListContainer>
                    <Image source = {{uri: item.imageUrl}} style={{height: "50%", width: "50%", justifyContent: "center", alignItems: "center"}}/>
                    
                    <Text>{item.title}</Text>
                </InsideFlatListContainer>
              )}

              keyExtrator = {(item) => item.id.toString()}
              ItemSeparatorComponent={() =>
              <Separator></Separator>}
              numColumns={3}

            />
      
      <Button texto='Excluir Itens Salvos' />

      
    </Container>
    
  )
  }

export default PecsScreen
*/