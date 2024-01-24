import React from "react";
import { View , Image, StyleSheet, FlatList} from "react-native";

import TextCustom from "../../../components/TextCustom";

export default function Item({item: {name, image }}){

    return <View  style={styles.item}>
    <Image style={styles.image} source={image}></Image>
  <TextCustom style={styles.name}>{name}</TextCustom>

</View>

}

const styles = StyleSheet.create({
 
    item:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#ECECEC",
        alignItems:"center",
        paddingVertical: 16,
        marginHorizontal:16
    },
    image:{
        width:46,
        height:46
    },
    name:{
        fontSize:16,
        lineHeight:26,
        marginLeft:11,
        color:"#464646"
    },
    

})