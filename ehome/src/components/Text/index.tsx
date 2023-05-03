import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface IHeader {
    txt: string;
    white?: boolean;
}

interface IParagraph {
    txt: string;
}

export const Header = ({txt,white}:IHeader) => (
    <Text style={white ? styles.headerWhiteCenter : styles.headerCenter}>{txt}</Text>
)

export const HeaderCenter = ({txt,white}:IHeader) => (
    <Text style={white ? styles.headerWhite : styles.header}>{txt}</Text>
)

export const Paragraph = ({txt}:IParagraph) =>(
    <Text style={styles.Paragraph}>{txt}</Text>
)

const styles = StyleSheet.create({
    header:{
        color:'#48D951',
        fontSize: 24,
    },
    headerWhite:{
        color:'#ffffff',
        fontSize: 24,
    },
    headerCenter:{
        color:'#48D951',
        fontSize: 32,
        textAlign: 'center'
    },
    headerWhiteCenter:{
        color:'#ffffff',
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Paragraph:{
        color:'#ffffff',
        fontSize: 16,
    }
});