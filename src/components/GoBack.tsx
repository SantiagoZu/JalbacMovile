import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { colors } from '../theme/globalTheme'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const GoBack = () => {
    const navigation = useNavigation();

    return (
        <View style={{width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name='arrow-back-outline'
                    size={30}
                    color={colors.colorIcon}
                />
            </TouchableOpacity>
        </View>
    )
}
