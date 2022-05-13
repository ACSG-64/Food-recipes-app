import {FlatList, StyleSheet, View} from "react-native";
import FoodItem from "./FoodItem";

export default function FoodList({data}) {
    return(
        <View style={styles.screen}>
            <FlatList data={data} keyExtractor={(item) => item.id}
                      renderItem={({item}) =>
                          <FoodItem mealId={item.id}
                                    title={item.title}
                                    imageUrl={item.imageUrl}
                                    duration={item.duration}
                                    complexity={item.complexity}
                                    affordability={item.affordability}/>
                      }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: '10%',
    }
})
