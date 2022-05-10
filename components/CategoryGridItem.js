import {Pressable, StyleSheet, Text, View} from "react-native";

export default function CategoryGridItem({title, color}) {
    return (
        <View style={styles.item}>
            <Pressable style={({pressed}) => [
                styles.button, {backgroundColor: color},
                pressed && styles.buttonPressed
            ]}>
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    button: {
        flex: 1,
        borderRadius: 8,
    },
    buttonPressed: {
      opacity: 0.75,
    },
    innerContainer: {
        flex: 1,
        padding: 8,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
