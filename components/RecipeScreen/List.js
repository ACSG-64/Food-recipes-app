import {StyleSheet, Text, View} from "react-native";
import Colors from "../../res/Colors";

export default function List({data}) {
    return (
        <View>
            {data.map((dataEl) =>
                <View style={styles.item} key={dataEl}>
                    <Text style={styles.text}>{dataEl}</Text>
                </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        borderRadius: 6,
        backgroundColor: Colors.lightBrown,
    },
    text: {
        color: Colors.brown,
    },
});
