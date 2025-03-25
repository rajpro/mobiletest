import useUserHook from '@/hooks/useUserHook';
import { useRouter } from 'expo-router';
import { View, ImageBackground, Image, TextInput, Button, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window'); // Get screen width
const inputWidth = width * 0.8; // 80% of total width

export default function LoginScreen() {
    const {setUsername, setPassword, onLogin} = useUserHook();
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
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    onChangeText={setPassword}
                />

                <Button title="Login" onPress={onLogin} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "white",
        borderWidth: 1,
        padding: 15,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 50,
        marginBottom: 10,
        width: inputWidth,
        backgroundSize: "cover"
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 50
    }
});
