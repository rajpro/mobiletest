import { useState } from "react";
import { useRouter } from "expo-router";
import { login } from "@/apis/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useUserHook = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        login({ email: username, password: password })
            .then((result) => {
                AsyncStorage.setItem("token", result.jwtToken);
                router.push("/(stacks)");
                console.log("Login Msg:", result);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    const logout = () => {
        AsyncStorage.removeItem('token');
        router.push("/");
    }

    return { setUsername, setPassword, onLogin, logout };
};

export default useUserHook;
