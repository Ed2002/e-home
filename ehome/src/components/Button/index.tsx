import { Pressable, Text, StyleSheet, StyleProp, ViewStyle } from "react-native"

interface IButton{
    title: string;
    onClick?: ()=>void | undefined;
    type: 'primary' | 'secondary';
}

export const Button = ({title, onClick, type}:IButton) => {
    switch(type) {
        case 'primary':
            return(
                <Pressable style={styles.primary} onPress={onClick}>
                    <Text style={styles.txt}>{title.toUpperCase()}</Text>
                </Pressable>
            );
        case 'secondary':
            return(
                <Pressable style={styles.secundary} onPress={onClick}>
                    <Text style={styles.txt}>{title.toUpperCase()}</Text>
                </Pressable>
            );
    }
    
}

const styles = StyleSheet.create({
    primary: {
      marginTop: 16,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 16,
      elevation: 3,
      backgroundColor: '#48D951',
    },
    secundary: {
        marginTop: 16,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: '#58A664',
      },
    txt:{
        color: '#FFFFFF',
    }
});