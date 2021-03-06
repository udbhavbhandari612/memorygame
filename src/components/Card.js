import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Card({
  title,
  style,
  id,
  clickable,
  cardState: state,
  cardOpened,
  vanished,
}) {
  const handleCardPress = () => {
    //if (state === 0) cardClosed(id);
    if (!state) cardOpened(id);
  };

  return (
    <TouchableOpacity
      disabled={!clickable || vanished}
      onPress={() => handleCardPress()}
      style={{...styles.root, ...style, ...(vanished && styles.invisible)}}>
      <Text style={{...(state ? styles.open : styles.fold), ...styles.title}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC407A',
    borderRadius: 10,
  },
  open: {
    transform: [{rotateY: '0deg'}],
    opacity: 1,
  },
  fold: {
    transform: [{rotateY: '180deg'}],
    opacity: 0,
  },
  title: {
    fontSize: 40,
  },
  invisible: {
    opacity: 0,
    backgroundColor: 'lightgrey',
  },
});
