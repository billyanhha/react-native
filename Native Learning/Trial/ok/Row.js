import React from "react";
import {View , Image} from 'react-native'


const Row = (props) => (
    <View>
        <Image source = {props.image} />
    </View>
)

export default Row;