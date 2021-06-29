import React, { useState } from "react";
import { View } from 'react-native';

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile/index";
import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('')

    function handleCategorySelect(categoId: string) {
        categoId === category ? setCategory('') : setCategory(categoId);
    };

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
            </View>
        </View>
    )
}