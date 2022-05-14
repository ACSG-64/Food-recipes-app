import FoodList from "../components/FoodList/FoodList";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";

export default function Bookmarks() {
    const bookmarkIds = useSelector((state) => state.bookmarks.ids);

    const meals = MEALS.filter(
        (meal) => bookmarkIds.includes(meal.id)
    );

    return (
        meals.length > 0
            ? <FoodList data={meals}/>
            : <View style={styles.textContainer}><Text style={styles.text}>You have not added any bookmarks yet.</Text></View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        padding: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
});
