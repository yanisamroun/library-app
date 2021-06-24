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

  // const postsJSX = posts.map(post => {
  //   return <Text>{post.title}</Text>
  // })

  return (
    <View style={styles.container}>
      {/* {postJSX} */}
      {/* 
          - data -> Un tableau d'éléments qu'on veut rendre 
          (très souvent c'est un état)
          - renderItem -> fonction de rendu 
          (qu'est-ce que vous voulez pour chaque élément)
          item c'est un nom qu'on ne peut pas changer,
          item est imposé

          - keyExtractor , c'est la même que le key=
          qu'on mettait pour enlever le warning de la console

          <ScrollView>
           {postsJSX}
          </ScrollView> mais encore plus optimisé, car
          ça charge dynamiquement
      */}
      <FlatList
        data={posts}
        renderItem={({item})=> <Text>{item.title}</Text>}
        keyExtractor={item => item.id.toString()}
      />
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
