import {Image, StyleSheet, Button, TextInput} from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import {useState} from 'react'
import {startIdent} from 'react-native-idnow-library'

export default function HomeScreen() {
    const [text, setText] = useState('');

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <TextInput
                placeholder="Enter your ident-id"
                onChangeText={(text) => setText(text)}
            />
            <Button
                title={"Start IDnow"}
                onPress={() => startIdent(text)}
            />
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
})
