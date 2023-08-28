import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../theme/globalTheme";

export const DespliegueDrawer = () => {
    return(
        <TouchableOpacity>
            <Icon 
                name='menu-outline'
                size={30}
                color={colors.colorIcon}
            />
        </TouchableOpacity>
    )
}