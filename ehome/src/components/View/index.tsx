import { StatusBar } from "expo-status-bar";
import { JSXElementConstructor, ReactElement } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

interface IMainView
{
    children: Array<ReactElement> | ReactElement;
    center?: boolean;
}

export const MainView = ({children,center}:IMainView)=>(
    <View style={center ? styles.containercenter : styles.container}>
        <StatusBar style="inverted" />
        {children as any}
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#1A2E40',
    },
    containercenter: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A2E40',
      },
  });