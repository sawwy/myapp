import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  header: {
    marginBottom: 28
  },
  headerText: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 12
  },
  subheader: {},
  subheaderText: {
    color: colors.grey,
    fontSize: 20,
    marginBottom: 12
  }
});

export default ({ header, subheader, children }) => (
  <View style={styles.container}>
    {(header || subheader) && (
      <View style={styles.header}>
        {header && <Text style={styles.headerText}>{header}</Text>}
        {subheader && <Text style={styles.subheaderText}>{subheader}</Text>}
      </View>
    )}
    {children}
  </View>
);
