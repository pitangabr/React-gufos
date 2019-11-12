import React, {Component} from 'react';//importando objeto react
import '../App.css';
import Rodape from '../componentes/Rodape';

class Categoria extends Component { //extends extenções, herda a categoria
    render(){
        return(
            <div className = "App">
                <h1>Categoria</h1>
                <p>Teste Categoria</p>
                <Rodape/>
            </div>
        )
    }
}
export default Categoria; //Por padrão recebe o return e envia para o navegadar, é obrigatorio ter um export, class e div