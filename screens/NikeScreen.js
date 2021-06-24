import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
// import * as Linking from 'expo-linking';

export default function NikeScreen({route}) {
    // function callMe() {
    //     Linking.openURL('tel:+33781163913');
    // }
    return (
        <View>
            <Text>Vous croivez que nous sachons
                 {route.params.actionBadass} {route.params.nameSocial}
            </Text>
            <TouchableOpacity onPress={callMe}>
                <Text>M'appeler</Text>
            </TouchableOpacity>
            
        </View>
    )
}
