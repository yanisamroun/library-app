import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { ListItem, SocialIcon, Switch } from 'react-native-elements';

export default function HomeScreen({navigation}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data);
      setPosts(res.data);
    })
  }, [])

  function goToNike() {
    navigation.navigate('Nike');
  }

  return (
    <View style={styles.container}>

      <SocialIcon type='twitter' onPress={goToNike}/>
      <FlatList
        data={posts}

        renderItem={({item})=> (
          <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <Switch value={false} />
          </ListItem.Content>
          <ListItem.Chevron />
          </ListItem>)
        }

        keyExtractor={item => item.id.toString()}
      />
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
