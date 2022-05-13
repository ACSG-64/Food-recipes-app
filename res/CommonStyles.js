import {StyleSheet} from "react-native";

const CommonStyles = StyleSheet.create({
    cardElevation4: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonPressed: {
        opacity: 0.65,
    }
});

export default CommonStyles;
