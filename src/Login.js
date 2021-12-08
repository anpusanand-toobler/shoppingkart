


import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { useNavigation } from '@react-navigation/native';



function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("./assets/sample.jpg")} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={(button) => {
                console.log("123")
                navigation.navigate('Home')
            }}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        height: 80,
        width: 80
    },

    inputView: {
        backgroundColor: "#f9df4a",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,

        textAlign: 'center',
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#e85e42",
    },
});

export default Login



// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const New = (props) => {
//     return (
//         <View style={{
//             alignItems: 'center', flex: 1, justifyContent: 'center'
//         }}>
//             <TouchableOpacity onPress={() => {
//                 props.navigation.navigate('Home')
//             }}>
//                 <Text>New</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default New;

// const styles = StyleSheet.create({});