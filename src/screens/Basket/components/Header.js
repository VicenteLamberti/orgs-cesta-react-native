import { Image, StyleSheet, Text, Dimensions, View } from "react-native";

import TextCustom from "../../../components/TextCustom"
import headerImage from '../../../../assets/topo.png';

export default function Header({title}) {
    return (
        <>
            <Image source={headerImage} style={styles.headerImage} />
            <TextCustom style={styles.title}>{title}</TextCustom>
        </>
    );
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    
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
    headerImage: {
        width: '100%',
        height: 578 / 768 * width // Conta para calcular,

    }
})