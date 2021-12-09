







import React, { Purecomponent } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function App({ navigation }) {
    let { container, cardText, card, cardImage, priceText } = styles
    // const navigation = useNavigation();

    return (
        // <SafeAreaView style={styles.container}>

        <View style={styles.container}>

            <FlatList
                data={[
                    {
                        key: 'Cola', price: '$5', imgSource: require("./productimage/cola.jpg"), description: 'The Coca-Cola Company is an American multinational beverage corporation incorporated under Delaware s General Corporation Law and headquartered in Atlanta, Georgia..'
                    },
                    { key: 'Cycle', price: '$100', imgSource: require("./productimage/cycle.jpg"), description: 'Hero Cycles - One of the best and trusted cycles brand in India. Check out our exclusive collection of mountain bikes, city bikes, girls cycles, and more.' },
                    { key: 'Headphone', price: '$26', imgSource: require("./productimage/headphone.jpg"), description: 'Bose Sport Earbuds are designed from the ground up to energise your exercise with acclaimed lifelike sound and a comfortable, secure fit.' },
                    { key: 'Shoe', price: '$80', imgSource: require("./productimage/shoe.jpg"), description: 'The adidas range of shoes for men is designed using state-of-the-art technology and innovative features that will suit your exercise style. Football boots exist ..' },
                    { key: 'Watch', price: '$280', imgSource: require("./productimage/watch.jpg"), description: 'Rolex watches are crafted from the finest raw materials and assembled with scrupulous attention to detail. Discover the Rolex collection on the Official ...' },
                ]}
                renderItem={({ item }) =>

                    <View style={container}>
                        <TouchableOpacity style={card} onPress={() => {
                            console.log(item.key)
                            navigation.navigate('Details', item)

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
        // </SafeAreaView>

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