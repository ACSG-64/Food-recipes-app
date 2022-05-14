import {useLayoutEffect} from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {addBookmark, removeBookmark} from "../store/bookmarks";

import {MEALS} from "../data/dummy-data";

import List from "../components/RecipeScreen/List";
import IconButton from "../components/IconButton";

import Colors from "../res/Colors";

export default function Recipe({route, navigation}) {
    const bookmarkIds = useSelector((state) => state.bookmarks.ids);
    const dispatch = useDispatch();

    const {mealId} = route.params; // Get the mealId from the parameters
    const {
        title,
        imageUrl,
        duration,
        complexity,
        affordability,
        ingredients,
        steps
    } = MEALS.find((meal) => meal.id === mealId);

    const isBookmarked = bookmarkIds.includes(mealId); // Check on the store if the recipe is bookmarked

    const toggleBookmarkStateHandler =
        () => isBookmarked
            ? dispatch(removeBookmark({id: mealId}))
            : dispatch(addBookmark({id: mealId}));

    useLayoutEffect(
        () => navigation.setOptions({
            headerRight: () => <IconButton iconName={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                                           onPress={toggleBookmarkStateHandler}/>
        }),
        [navigation, isBookmarked, bookmarkIds]
    );

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTag}>{duration}m</Text>
                    <Text style={styles.detailsTag}>{complexity}</Text>
                    <Text style={styles.detailsTag}>{affordability}</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                </View>
                <List data={ingredients}/>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Steps</Text>
                </View>
                <List data={steps}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
    },
    contentContainer: {
        paddingHorizontal: '8%',
        paddingVertical: 8,
    },
    whiteText: {
        color: 'white',
    },
    title: {
        marginBottom: 8,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    subtitleContainer: {
        borderColor: Colors.lightBrown,
        borderBottomWidth: 1,
        marginHorizontal: 25,
    },
    subtitle: {
        margin: 8,
        marginBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.lightBrown,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    detailsTag: {
        color: 'white',
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
});
