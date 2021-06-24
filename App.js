import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data);
      setPosts(res.data);
    })
  }, [])

  const postsJSX = posts.map(post => {
    return <Text>{post.title}</Text>
  })

  return (
    <View style={styles.container}>
      {postsJSX}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
