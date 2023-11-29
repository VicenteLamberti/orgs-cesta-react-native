import { Image, StyleSheet, Text, Dimensions } from "react-native";
import headerImage from '../assets/topo.png'

const width = Dimensions.get('screen').width;

export function Basket() {
    return (
        <>
            <Image source={headerImage} style={styles.headerImage} />
            <Text style={styles.title}>Detail of Basket</Text>
        </>

    );
}

const styles = StyleSheet.create({
    headerImage: {
        width: '100%',
        height: 578 / 768 * width // Conta para calcular

    },
    title:{
        position:'absolute',
        textAlign:"center",
        width:'100%',
        fontSize:16,
        lineHeight:26,
        color:'white',
        fontWeight:'bold',
        padding:16
    }
})