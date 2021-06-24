import React from 'react'
import { View, Text } from 'react-native'

export default function NikeScreen({route}) {
    return (
        <View>
            <Text>Vous croivez que nous sachons
                 {route.params.actionBadass} {route.params.nameSocial}
            </Text>
        </View>
    )
}
