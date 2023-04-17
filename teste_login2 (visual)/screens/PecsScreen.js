import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import * as Speech from 'expo-speech';
import { AntDesign } from '@expo/vector-icons';

const image1 = 'https://static.arasaac.org/pictograms/25556/25556_300.png';
const image1String = 'Arroz';
const image2 = 'https://static.arasaac.org/pictograms/3294/3294_300.png';
const image2String = 'Feijão';
const image3 = 'https://static.arasaac.org/pictograms/2503/2503_300.png';
const image3String = 'Batata';
const image4 = 'https://static.arasaac.org/pictograms/36354/36354_300.png';
const image4String = 'Batata doce';
const image5 = 'https://static.arasaac.org/pictograms/2455/2455_300.png';
const image5String = 'Macarrão';
const image6 = 'https://static.arasaac.org/pictograms/32338/32338_300.png';
const image6String = 'desagradável';
const image7 = 'https://static.arasaac.org/pictograms/32340/32340_300.png';
const image7String = 'agradável';
const image8 = 'https://static.arasaac.org/pictograms/5441/5441_300.png';
const image8String = 'quero';
const image9 = 'https://static.arasaac.org/pictograms/6156/6156_300.png';
const image9String = 'não quero';

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <PreviewLayout style={styles.row}
      titulo="Figuras" //texto
      values={['Alimentação', 'Trabalho', 'Banheiro', 'Família', 'Rotina', 'Escola']}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    />
  );
};

const PreviewLayout = ({
  titulo,
  values,
  selectedValue,
  setSelectedValue,
}) => (

  <View style={{padding: 10, flex: 80}}>
    <Text style={{textAlign: 'center', marginBottom: 10, fontSize: 24}}>{titulo}</Text> 
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[ styles.button, selectedValue === value && {backgroundColor: 'coral', borderWidth: 0} ]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && {color: 'white'},
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

var textoFormado = [];

const Imagens = () => {

  const [imagemSelecionada, setImagemSelecionada] = useState('');

  const handleImagemPressionada = (nomeImagem) => {
    textoFormado.push(nomeImagem);
    setImagemSelecionada(textoFormado.join(' '));
    
  };


  const speak = () => {
    Speech.speak(imagemSelecionada,
      {
        language: 'pt-BR',
        rate: 0.5,
      });
  }


  return(
    <>

 <ScrollView>
      <View style={styles.container}> 


          <TouchableOpacity onPress={() => handleImagemPressionada(image1String)} style={{borderWidth: 1, borderColor: 'black' }}>  
            <View> 
              <Image
                  source = {{uri: image1}} // Defina a URI da imagem como a fonte
                  style={styles.imageCAA} // Defina o estilo da imagem
              />
              <Text style={styles.formedText1}>{image1String}</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagemPressionada(image2String)} style={{borderWidth: 1, borderColor: 'black' }}>
          <View>
            <Image
                source = {{ uri: image2 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image2String}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagemPressionada(image3String)} style={{borderWidth: 1, borderColor: 'black' }}>
          <View>
            <Image
                source = {{ uri: image3 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image3String}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagemPressionada(image4String)} style={{borderWidth: 1, borderColor: 'black' }}>
          <View>
            <Image
                source = {{ uri: image4 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image4String}</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleImagemPressionada(image5String)} style={{borderWidth: 1, borderColor: 'black' }}>
          <View>
            <Image
                source = {{ uri: image5 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image5String}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagemPressionada(image6String)} style={{borderWidth: 1, borderColor: 'black' }}>
          <View>
            <Image
                source = {{ uri: image6 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image6String}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagemPressionada(image7String)} style={{borderWidth: 1, borderColor: 'black' }}>
          <View>
            <Image
                source = {{ uri: image7 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image7String}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagemPressionada(image8String)} style={{borderWidth: 1, borderColor: 'black'}}>
          <View>
            <Image
                source = {{ uri: image8 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image8String}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagemPressionada(image9String)} style={{borderWidth: 1, borderColor: 'black'}}>
          <View>
            <Image
                source = {{ uri: image9 }} // Defina a URI da imagem como a fonte
                style={styles.imageCAA} // Defina o estilo da imagem
            />
            <Text style={styles.formedText1}>{image9String}</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>
        <View style={styles.formedText}>
          <TextInput style={styles.paragraph} 
          value={textoFormado.join(' ')} 
          onChangeText={setImagemSelecionada}
          />
        </View>

        <View style={{ marginTop: 15, borderRightWidth: 6, borderRightColor: 'white'}} >
          <Text><AntDesign 
          name="star" size={24} color="black" 
            onPress
            /></Text>
          <Text><AntDesign 
          name="sound" size={24} color="black" 
            onPress={speak}
          /></Text>
        </View>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formedText1: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0, //distancia vertical
    alignSelf: 'flex-start',
    minWidth: '80%',
    textAlign: 'center', //alinhamento com a imagem
    },
  imageCAA: {
    width: 80,
    height: 80,
  },
  formedText: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace', //só digitar o nome da cor que quiser em inglês
    alignSelf: 'flex-start',
    marginHorizontal: '3%', //margem esquerda
    marginBottom: 6, //margem inferior
    marginTop: 15, //margem superior
    minWidth: '80%',
    textAlign: 'center', //centro do label 
    borderColor: 'gray',
    borderWidth: 1,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: 'center',
    flexDirection: 'row', //organização horizontal 
    flexWrap: 'wrap', //define o limite da tela
  },
  container: {
    marginTop: 2,
    backgroundColor: 'aliceblue',
    flexDirection: 'row', //organização horizontal 
    flexWrap: 'wrap', //define o limite da tela
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '3%', //tamanho da parte azul
    minWidth: '90%',
  },
  row: {
    flexDirection: 'row', //organização horizontal 
    flexWrap: 'wrap', //define o limite da tela
  },
  button: {
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '30%',
    textAlign: 'center',
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
});

const PecsScreen = () => {
  return (
    <View>
      <FlexDirectionBasics />
      <Imagens />
    </View>
  );
};

export default PacsScreen;