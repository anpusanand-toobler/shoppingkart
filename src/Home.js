







import React, { Purecomponent } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
    let { container, cardText, card, cardImage, priceText } = styles
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>

                <FlatList
                    data={[
                        {
                            key: 'Cola', price: '$5', imgSource: require("./productimage/cola.jpg")
                        },
                        { key: 'Cycle', price: '$100', imgSource: require("./productimage/cycle.jpg") },
                        { key: 'Headphone', price: '$26', imgSource: require("./productimage/headphone.jpg") },
                        { key: 'Shoe', price: '$80', imgSource: require("./productimage/shoe.jpg") },
                        { key: 'Watch', price: '$280', imgSource: require("./productimage/watch.jpg") },
                    ]}
                    renderItem={({ item }) =>

                        <View style={container}>
                            <TouchableOpacity style={card} onPress={(button) => {
                                console.log(item.key)
                            }}>
                                <Image style={cardImage} source={item.imgSource} />
                                <Text style={cardText}>{item.key}</Text>
                                <Text style={priceText}>{item.price}</Text>
                            </TouchableOpacity>
                        </View>



                    }
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                />



            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#F6F6F6'
    },
    cardText: {
        fontSize: 30,
        marginBottom: 10,
        marginLeft: 10
    },
    card: {
        backgroundColor: '#FFFFFF',

        marginLeft: '2%',
        marginRight: '2%',
        width: '96%',
        height: 280,
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
        borderRadius: 10

    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
        borderRadius: 10
    },
    priceText: {
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 12,
    }

})