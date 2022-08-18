import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import firstImage from './images/weslley.png';

const App = ()=>{
    const nomeMedico = [
        {nome: 'Weslley'},
        {nome: 'Fabiana'},
        {nome: 'Lusia'}
    ]

    const secondImage = process.env.PUBLIC_URL+'fabiana.png';
    const thirdImage = `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`;
    
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
            <img src={firstImage} alt=''/>  
            <p>{nomeMedico[0].nome}</p>                       
            </div>
            <div className='card'>
            <img src={secondImage}alt=''/>               
            <p>{nomeMedico[1].nome}</p>    
            </div>
            <div className='card'>
            <img src={thirdImage} alt=''/>               
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

