import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import CommonStyles from "../../res/CommonStyles";
import {useNavigation} from "@react-navigation/native";

export default function FoodItem({mealId, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();

    const navigateToDetail = () => navigation.navigate('Recipe', {mealId});

    return (
        <View style={styles.item}>
            <Pressable style={({pressed}) => pressed && CommonStyles.buttonPressed} onPress={navigateToDetail}>
                <View style={styles.contentContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text>Duration: {duration} minutes</Text>
                        <Text>Complexity: {complexity}</Text>
                        <Text>Affordability: {affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 16,
        borderRadius: 8,
        ...CommonStyles.cardElevation4,
    },
    contentContainer: {
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    detailsContainer: {
        padding: 8,
        paddingTop: 0,
    }
})
