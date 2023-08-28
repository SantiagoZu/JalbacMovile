import React, { useState } from 'react'
import { ActivityIndicator, Appearance, View } from 'react-native'
import { lightColors } from '../theme/lightTheme'
import { colors } from '../theme/globalTheme'

export const LoadingScreen = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme == 'light' ? lightColors.secondaryColor : colors.secondaryColor}}>
        <ActivityIndicator 
            size={50}
            color={colors.colorIcon}
        />
    </View>
  )
}
