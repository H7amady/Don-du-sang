import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    donDuSang1: {
        top: 0,
        position: "absolute",
        fontFamily: "alegreya-sc-700",
        color: "#121212",
        height: 46,
        width: 141,
        fontSize: 22,
        left: 5
    },
    image1: {
        top: 42,
        left: 0,
        width: 142,
        height: 112,
        position: "absolute"
    },
    donDuSang1Stack: {
        width: 146,
        height: 154,
        marginTop: 86,
        marginLeft: 112
    },
    nameClass: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
        marginLeft: 55
    },
    psswdClass: {
        width: 265,
        height: 43,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
        marginLeft: 55
    },
    phoneClass: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
        marginLeft: 55
    },
    confirmClass: {
        height: 36,
        width: 100,
        borderRadius: 13,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.66,
        shadowRadius: 0,
        backgroundColor: "rgba(66,70,139,1)",
        marginTop: 20,
        marginLeft: 133
    }
});