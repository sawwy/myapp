import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  labelText: {
    color: colors.grey,
    fontSize: 18,
    marginBottom: 10
  },
  messageText: {
    color: colors.grey,
    fontSize: 13,
    marginTop: 5
  },
  messageError: {
    color: colors.error
  }
});

export default ({ label = '', message = '', messageType = '', children }) => {
  const messageStyles = [styles.messageText];

  if (messageType === 'error') {
    messageStyles.push(styles.messageError);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      {children}
      <Text style={messageStyles}>{message}</Text>
    </View>
  );
};
