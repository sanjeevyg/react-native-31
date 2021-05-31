import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { useState, useEffect } from 'react-native';

export default function App() {

  const [todos, setTodo] = useState([
    {title: "First Todo", content: "This is my first todo!"},
    {title: "Second Todo", content: "This is my second todo!"},
    {title: "Third Todo", content: "This is my third todo!"}
  ])


  const showTodo = () => todos.map(todo => {
    return <View style={styles.todoCard}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.content}>{todo.content}</Text>
    </View>
  })


  return (
    <SafeAreaView style={styles.container}>
      {showTodo()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoCard: {
    flex: 1, 
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center'
  }
});
