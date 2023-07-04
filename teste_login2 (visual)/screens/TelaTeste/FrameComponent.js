import * as React from "react";
import { View, StyleSheet } from "react-native";

const FrameComponent = ({ onClose }) => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    backgroundColor: "#ff0000",
    width: 293,
    height: 151,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default FrameComponent;
