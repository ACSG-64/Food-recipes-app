import {Pressable, StyleSheet, Text, View} from "react-native";
import CommonStyles from "../res/CommonStyles";

export default function CategoryGridItem({title, color, onPress}) {
    return (
        <View style={styles.item}>
            <Pressable
                style={({pressed}) => [
                    styles.button, {backgroundColor: color},
                    pressed && CommonStyles.buttonPressed
                ]}
                onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 150,
        margin: 16,
        borderRadius: 8,
        ...CommonStyles.cardElevation4,
    },
    button: {
        flex: 1,
        borderRadius: 8,
    },
    innerContainer: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
