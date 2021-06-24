import React from 'react'
import { View, Text } from 'react-native'

export default function PostDetailsScreen({route}) {
    const post = route.params.post;
    return (
        <View>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
        </View>
    )
}
