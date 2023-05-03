import { Image } from 'expo-image';
import { StyleSheet } from "react-native"

interface IImage {
    path: string | any;
}

export const Avatar = ({path}:IImage) => (
    <Image
        source={path}
        style={styles.avatar}
        contentFit='cover'
    />
)

const styles = StyleSheet.create({
    avatar:{
        borderRadius: 50,
        elevation: 3,
        width: '64px',
        height: '64px',
    }
  });