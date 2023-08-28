import { useState } from "react";
import { Appearance } from "react-native";

export const useTheme = () => {
    const [theme, setTheme] = useState<any>(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });

    return {
        theme
    }
}
