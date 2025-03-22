import React from 'react'
import { View, ImageBackground, Image, TextInput, Button, StyleSheet, Dimensions } from 'react-native'
import { useRouter } from "expo-router";

const { width } = Dimensions.get('window'); // Get screen width
const inputWidth = width * 0.8; // 80% of total width

export default function LoginScreen() {
    const router = useRouter();
    return (
        <ImageBackground
            source={require('../assets/images/login-bg.jpeg')}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={{
                justifyContent: 'center'
            }}>
                <Image
                    source={{ uri: "https://galaxies.dev/img/authors/simong.webp" }}
                    style={styles.image}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Username'
                />

                <TextInput
                    style={ styles.input}
                    placeholder='Password'
                />

                <Button title="Login" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "white",
        borderWidth: 1,
        padding: 15,
        elevation:1,
        backgroundColor: "white",
        borderRadius: 50,
        marginBottom: 10,
        width: inputWidth
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 50
    }
});
