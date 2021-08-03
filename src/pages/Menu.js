import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Menu({history}) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Memory Game</Text>
      <TouchableOpacity
        onPress={() => history.push('/game')}
        style={styles.btn}>
        <Text style={styles.btnTitle}>Play Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTitle}>Sound</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTitle}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 10,
    minWidth: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E88E5',
  },
  btnTitle: {
    color: 'white',
  },
  title: {
    fontSize: 50,
    fontStyle: 'italic',
    paddingVertical: 20,
  },
});
