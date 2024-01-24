import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import TextCustom from "../../components/TextCustom";
import Details from "./components/Details";
import Header from "./components/Header";
import Item from "./components/Item";




export function Basket({ header, details, items }) {
    return (
        <>

            <FlatList
                data={items.list}
                renderItem={Item}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => {
                    return <>
                        <Header {...header} />

                        <View style={styles.basket}>
                            <Details {...details} />
                            <TextCustom style={styles.title}>{items.title}</TextCustom>
                        </View>
                    </>
                }}
            />

        </>
    );
}

const styles = StyleSheet.create({

    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32

    },

})