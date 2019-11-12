import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router} from 'react-router-dom'; //importar dependencias

import Categoria from './pages/Categoria'; // importando a pagina categoria

const Rotas = (
    <Router>
        <div>
            <Route exact path = "/" component = {App}/> {/*caminho da home*/}
            <Route path = "/categoria" component = {Categoria}/>
            <Route path = "/categorias" component = {Categoria}/>
        </div>
    </Router>
)

//trocar a renderização chamando a variavel declarada 
ReactDOM.render(Rotas, document.getElementById('root'))


serviceWorker.unregister();
