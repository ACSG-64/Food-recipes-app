import {FlatList} from "react-native";

import {CATEGORIES} from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridItem";

export default function Categories() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={
                (itemData) =>
                    <CategoryGridItem title={itemData.item.title} color={itemData.item.color}/>
            }
            numColumns={2}
        />
    );
}
