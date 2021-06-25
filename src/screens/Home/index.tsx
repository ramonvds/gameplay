import React from "react";
import { View } from 'react-native';

import { Profile } from "../../components/Profile/index";

import { styles } from './styles';

export function Home() {
    return (
        <View>
            <View style={styles.header}></View>
            <Profile />
        </View>
    )
}