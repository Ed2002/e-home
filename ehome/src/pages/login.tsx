import { HeaderCenter } from "../components/Text";
import { MainView } from "../components/View";
import { Button } from "../components/Button";
export const Login = ()=>(
    <MainView center>
        <HeaderCenter white txt="Faça Login e Venha Curtir" />
        <Button type="primary" title="LOGAR COM O GOOGLE"/>
    </MainView>
);