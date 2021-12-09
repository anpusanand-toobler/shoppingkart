




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



function Details({ navigation, route }) {


    // const navigation = useNavigation();



    return (
        <View style={styles.StyleSheet}>
            <Image style={styles.image} source={route.params?.imgSource} />
            <StatusBar style="auto" />

            <Text style={styles.BoldText}>{route.params?.key}</Text>

            <Text style={styles.priceText}>{route.params?.price}</Text>

            <Text style={styles.Text}>{route.params?.description}</Text>

            <View style={styles.container} backgroundColor='transparent'>
                <TouchableOpacity style={styles.addToCartBtn} onPress={(button) => {
                    console.log("123")
                    console.log("ggg")
                    navigation.navigate('Cart')
                }}>
                    <Text style={[styles.loginText, styles.addToCartText]}>Add to cart</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginTop: 10,
        marginBottom: 10,
        height: "50%",
        width: "100%"
    },
    BoldText: {

        fontSize: 30,
        fontWeight: 'bold',

        marginLeft: 10,
        alignSelf: 'flex-start',
        height: 40,

    },
    Text: {
        fontSize: 15,
        marginLeft: 10,
        alignSelf: 'flex-start',

    },
    priceText: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'flex-start',

    },

    addToCartBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#3b74b5",
    },
    addToCartText: {
        color: '#fff'
    }

});

export default Details