import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

import { styles } from "./styles";
import { theme } from '../../global/theme'

type Props = {
    urlImage: string;
};

export function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient style={styles.container} colors={[theme.colors.secondary80, theme.colors.secondary100]}><Image source={{ uri: urlImage }} style={styles.avatar} /></LinearGradient>
    )
}