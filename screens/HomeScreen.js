import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import axios from 'axios';
import { Avatar, ListItem, SocialIcon, Switch } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
  const [posts, setPosts] = useState([]);
  const [bookInput, setBookInput] = useState("");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data);
      setPosts(res.data);
    })
  }, [])



 
  // {truc: 'twitter'} quand je cliquerai sur twitter
  // {truc: 'facebook'} quand je cliquerai sur facebook

  return (
    <View style={styles.container}>
      
      <View style={styles.formulairrr}>
        <TextInput style={styles.input} value={bookInput}
         onChangeText={(text) => {setBookInput(text)}} />
        <Button title="OK" color="black" style={styles.validator}/> 
        
      </View>

      <FlatList
        data={posts}

        renderItem={({item})=> (
          <ListItem bottomDivider 
            onPress={() => navigation.navigate('PostDetails',{
              post: item
            })}>
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
  input: {
    width: 200,
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    
  },
  formulairrr: {
    flexDirection: 'row',
   
  },
 
});
