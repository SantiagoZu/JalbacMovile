import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#24262D',
        fontWeight: "bold",
    },
    parrafo: {
        fontSize: 20,
        color: '#8B8D8F',
        fontWeight: "600",
        marginTop: 10
    },
    container: {
        marginVertical: 7,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,

        elevation: 3,
    },
    titleCard: {
        fontSize: 21,
        color: '#24262D',
        fontWeight: 'bold',
        marginBottom: 4
    },
    subTitle: {
        fontSize: 18,
        color: '#24262D',
        opacity: 0.7,
        fontWeight: 'bold'
    },
    containerHome: {
        height: 150,
        width: 150,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    card: {
        // height: 300,
        width: 340,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.22,

        elevation: 3,
    },
    empleadoCard: {
        width: 340,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    detalleCard: {
        width: 340,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    titleDetalleItem: {
        fontSize: 19,
        color: '#24262D',
        fontWeight: 'bold',
        marginBottom: 4,
    },
});

export const lightColors = {
    primaryColor: '#F9FAFB',
    secondaryColor: '#FFFFFF',
    titleColor: '#24262D',
};