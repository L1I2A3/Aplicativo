/*
Antes de passar a tela para cá, adicionar (isso porque está tela está sendo feita em orientação PAISAGEM):
    
    import * as ScreenOrientation from 'expo-screen-orientation';

E depois 

 const changeScreenOrientationLAND = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      };
    const changeScreenOrientationRET = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };

E por fim

useEffect(() => {
        changeScreenOrientationLAND();
        return function cleanup() {
            changeScreenOrientationRET();
          };
      }, []);



import React, { useState, useCallback, useEffect} from "react";
import { StyleSheet, View, Pressable, Modal } from "react-native";
import FrameComponent from "./FrameComponent";
import * as ScreenOrientation from 'expo-screen-orientation';


const TelaTeste = () => {

    const changeScreenOrientationLAND = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      };
    const changeScreenOrientationRET = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };

    
    useEffect(() => {
        changeScreenOrientationLAND();
        return function cleanup() {
            changeScreenOrientationRET();
          };
      }, []);

  const [rectangleVisible, setRectangleVisible] = useState(false);

  const openRectangle = useCallback(() => {
    setRectangleVisible(true);
  }, []);

  const closeRectangle = useCallback(() => {
    setRectangleVisible(false);
  }, []);

  return (
    <>
      <View style={styles.androidLarge1}>
        <Pressable style={styles.androidLarge1Child} onPress={openRectangle} />
      </View>

      <Modal animationType="fade" transparent visible={rectangleVisible}>
        <View style={styles.rectangleOverlay}>
          <Pressable style={styles.rectangleBg} onPress={closeRectangle} />
          <FrameComponent onClose={closeRectangle} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  rectangleOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  androidLarge1Child: {
    position: "absolute",
    top: 138,
    left: 203,
    backgroundColor: "#c22222",
    width: 235,
    height: 116,
  },
  androidLarge1: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 360,
    overflow: "hidden",
  },
});

export default TelaTeste;
*/
