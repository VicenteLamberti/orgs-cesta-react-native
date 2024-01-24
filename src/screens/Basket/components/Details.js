import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import TextCustom from "../../../components/TextCustom";

export default function Details({ name, farmLogo, farmName, description, price, button}){
    return(
        <>
             <TextCustom style={styles.name}>{name}</TextCustom>
                <View style={styles.farm}>
                    <Image source={farmLogo} style={styles.farmImage}/>
                    <TextCustom style={styles.farmName}>{farmName}</TextCustom>
                </View>

                <TextCustom style={styles.description}>
                    {description}
                </TextCustom>
                <TextCustom style={styles.price}>{price}</TextCustom>

                <TouchableOpacity style={styles.button} onPress={()=>{console.log("oi")}}>
                    <TextCustom style={styles.textButton}>{button}</TextCustom>
                </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({

    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight:"bold"
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
        marginLeft:12

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
    },
    button:{
        marginTop:16,
        backgroundColor:"#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
        
    },
    textButton:{
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",

    }
})