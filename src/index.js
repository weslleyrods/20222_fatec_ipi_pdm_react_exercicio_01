import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const App = ()=>{
    const nomeMedico = [
        {nome: 'Weslley'},
        {nome: 'Fabiana'},
        {nome: 'Lusia'}
    ]

    const estilzarContainer = ()=>{
        return {
            width: '100%',
            borderRadius: 8,
            backgroundColor: '#EEEEEE',
            margin: 8,
            padding: 8,
        }
    }
    return (
    <div style={estilzarContainer()}>
        <h3 style={{textAlign: 'center'}}>Profissionais de saúde</h3>
        <div style={{borderRadius: 8, border: '2px gray solid' , padding:8, margin:8, display: 'flex'}}>
            <div className='card'>
            <img src='/weslley.png'alt=''/>               
            {nomeMedico[0].nome}
            </div>
            <div className='card'>
            <img src='/weslley.png'alt=''/>               
            {nomeMedico[1].nome}
            </div>
            <div className='card'>
            <img src='/weslley.png'alt=''/>               
            {nomeMedico[2].nome}
            </div>
        </div>

    </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

