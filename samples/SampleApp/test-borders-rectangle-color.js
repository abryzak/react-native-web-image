import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import TestItem from './TestItem'

export default function TestBordersRectangleColor () {
  const bs = {
    borderTopColor: 'red',
    borderBottomColor: 'red',
    borderLeftColor: 'blue',
    borderRightColor: 'blue',
    borderWidth: 1
  }
  return <ScrollView style={s.container} contentContainerStyle={s.content}>
    <TestItem style={bs} />
    <TestItem style={{ ...bs, borderWidth: 20 }} />
    <TestItem style={{ ...bs, borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 20, borderRightWidth: 20 }} />
    <TestItem style={{ ...bs, borderTopWidth: 0, borderBottomWidth: 8, borderLeftWidth: 2, borderRightWidth: 2 }} />
  </ScrollView>
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    width: 600
  }
})
