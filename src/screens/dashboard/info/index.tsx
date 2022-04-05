import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Info: React.FC = () => {
  const text: string = "a";
  const digit: number = 123;

  return (
    <View style={styles.container}>
      <Text>
        {/* Info Page: You don't need to login to view this hello */}
        {text} is a string.
        </Text>
      <Text>
        {digit} is a number.
      </Text>
    </View>
  );
};

export default Info;
