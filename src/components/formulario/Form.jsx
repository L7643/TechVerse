import React, { useState } from 'react';
import './Form.scss'
import axios from 'axios';

export function Form() {
    // Referenciando as variáveis
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('/sendEmail', {
                nome: nome,
                email: email,
                mensagem: mensagem
            });
            
            console.log('Resposta do servidor:', response.data);
            
            // Limpar os campos do formulário após o envio
            setNome('');
            setEmail('');
            setMensagem('');
        } catch (error) {
            console.error('Erro ao enviar email:', error);
        }
    };

    return (
        <div className='container-form'>
            <h1 id="contact"></h1>
            <h1 className='title'>Vamos trabalhar juntos?</h1>
            <h1 className='title'>Entre em contato</h1>

            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input
                        type="text"
                        placeholder='Nome'
                        id="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        required
                    />
                </div>

                <div className='input-group'>
                    <input
                        type="email"
                        placeholder='Email'
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>

                <div className='input-group-msg'>
                    <input
                        type="mensagem"
                        placeholder='Mensagem'
                        id="msg"
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                        required
                    />
                </div>
                
                <div className='btn-submit'>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}