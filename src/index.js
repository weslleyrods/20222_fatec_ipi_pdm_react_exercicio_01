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
            border: '1px black solid',
            backgroundColor: '#EEEEEE',
            padding: 8,
        }
    }
    return (
    <div style={estilzarContainer()}>
        <h3 style={{textAlign: 'center'}}>Profissionais de saúde</h3>
        <div style={{borderRadius: 8, border: '2px #E4DDED solid' , padding:8, margin:8, display: 'flex', justifyContent: 'space-evenly'}}>
            <div className='card'>
            <img src='/weslley.png'alt=''/>  
            <p>{nomeMedico[0].nome}</p>                       
            </div>
            <div className='card'>
            <img src='/weslley.png'alt=''/>               
            <p>{nomeMedico[1].nome}</p>    
            </div>
            <div className='card'>
            <img src='/weslley.png'alt=''/>               
            <p>{nomeMedico[2].nome}</p>    
            </div>
        </div>

    </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

