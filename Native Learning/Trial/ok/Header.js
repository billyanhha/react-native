import React from 'react'
import {StyleSheet , View , Image} from 'react-native'
const Header = (props) => (
    <View style ={headerStyles.container}>
        <Image style ={headerStyles.avatar} source = {require('./image/1.jpg')}  />

    </View>
)
const headerStyles = StyleSheet.create({
    container:{
        padding : 10,
        flex : 1,
        justifyContent: 'flex-start',
        marginTop: 30,
    },
    avatar : {
        width : 100,
        height : 100 ,
        borderRadius: 100,

    }
});

export default Header;