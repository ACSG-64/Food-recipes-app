import {Pressable} from "react-native";
import {Ionicons} from '@expo/vector-icons';

import CommonStyles from "../res/CommonStyles";

export default function IconButton({iconName = 'bookmark', color = 'white', onPress}) {
    return(
        <Pressable style={({pressed}) => pressed && CommonStyles.buttonPressed} onPress={onPress}>
            <Ionicons name={iconName} size={24} color={color} />
        </Pressable>
    );
}
