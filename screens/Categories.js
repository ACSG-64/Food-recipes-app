import {FlatList} from "react-native";

import {CATEGORIES} from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridItem";

export default function Categories({navigation}) {
    const navigateToOverview = (item) => navigation.navigate('Overview', {categoryId: item.id});

    return (
        <FlatList
            data={CATEGORIES} keyExtractor={(item) => item.id}
            renderItem={(itemData) =>
                <CategoryGridItem title={itemData.item.title} color={itemData.item.color}
                                  onPress={navigateToOverview.bind(this, itemData.item)}/>
            }
            numColumns={2}
        />
    );
}
