import { Button } from "../components/Button";
import { HeaderCenter, Paragraph } from "../components/Text";
import { MainView } from "../components/View";
import { StyleSheet } from "react-native"

export const Acount = () => (
    <MainView center>
        <HeaderCenter txt="CarlosMineCraft25"/>
        <Paragraph txt="carlinhosyt@gmail.com"/>
        <Paragraph txt="22/ 07 / 23"/>
        <Button type="primary" title="SAIR"/>
        <Button type="secondary" title="EXCLUIR CONTA"/>
    </MainView>
);