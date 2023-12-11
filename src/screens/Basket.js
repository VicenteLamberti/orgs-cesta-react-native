import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import headerImage from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import TextCustom from "../components/TextCustom";

const width = Dimensions.get('screen').width;

export function Basket() {
    return (
        <>
            <Image source={headerImage} style={styles.headerImage} />
            <TextCustom style={styles.title}>Detail of Basketas</TextCustom>

            <View style={styles.basket}>
                <TextCustom style={styles.name}>Vegetable Basket</TextCustom>
                <View style={styles.farm}>
                    <Image source={logo} style={styles.farmImage}/>
                    <TextCustom style={styles.farmName}>Jenny Jack Farm</TextCustom>
                </View>

                <TextCustom style={styles.description}>
                    A basket with carefully selected
                    products from the farm straight to your kitchen
                </TextCustom>
                <TextCustom style={styles.price}>R$ 40,00</TextCustom>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    headerImage: {
        width: '100%',
        height: 578 / 768 * width // Conta para calcular,

    },
    title: {
        position: 'absolute',
        textAlign: "center",
        width: '100%',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily:"MontserratBold"
    },
    farm:{
        flexDirection:'row',
        paddingVertical:12
    },
    farmImage:{
        width:32,
        height:32
    },  
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
        fontFamily:"MontserratRegular"

    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})