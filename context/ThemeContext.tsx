// import { createContext, useEffect, useState } from "react";
// import { Appearance } from "react-native";

// const ThemeContext = createContext;

// export const ThemeProvider = ({ children }: any) => {
//     const [theme, setTheme] = useState(Appearance.getColorScheme());

//     useEffect(() => {
//         const handleChangeTheme = ({ colorScheme }: any) => {
//             setTheme(colorScheme)
//         }

//         Appearance.addChangeListener(handleChangeTheme)

//         return () => {
//             Appearance.removeChangeListener(handleChangeTheme);
//         }
//     }, [])

//     return (
//         <ThemeContext.Provider value={{ theme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export default ThemeContext;