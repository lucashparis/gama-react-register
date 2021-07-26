import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import * as S from './styled'; 

export default function CustomerRegistration() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telephone, setTelephone ] = useState('');
  const [ cep, setCep ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ neighborhood, setNeighborhood ] = useState('');
  const [ city, setCity ] = useState('');

    function handleSubmmit() {
        if (!name) {
            return;
        }
        
        let cadastros = [];
        let cadastro = [name, email, telephone, cep, number, neighborhood, city];
        let cadastroLocal = localStorage.getItem('cadastros');

        if (cadastroLocal) {
            cadastros = JSON.parse(cadastroLocal);
            cadastros.push(cadastro);
        }

        localStorage.setItem('cadastros', JSON.stringify(cadastros));
    }

    return(
        <>
            <S.SectionOne>
                <S.Form>
                <h1>Customer Registration</h1>
                    <fieldset>
                        <legend>Personal Data</legend>
                        <label>Name</label>
                        <input type="text" placeholder="EX: Severina xique xique" value={name} onChange={e => setName(e.target.value)} />
                        <label>Email</label>
                        <input type="text" placeholder="EX: severia@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
                        <label>Telephone</label>
                        <input type="tel" placeholder="EX: (44) 9 6666-6666" value={telephone} onChange={e => setTelephone(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Address Data</legend>
                        <label>CEP</label>
                        <input type="number" placeholder="EX: 87000-000" value={cep} onChange={e => setCep(e.target.value)}/>
                        <label>Number</label>
                        <input type="number" placeholder="EX: 333" value={number} onChange={e => setNumber(e.target.value)}/>
                        <label>Neighborhood</label>
                        <input type="text" placeholder="EX: Centro" value={neighborhood} onChange={e => setNeighborhood(e.target.value)}/>
                        <label>City</label>
                        <input type="text" placeholder="EX: Ponta Grossa" value={city} onChange={e => setCity(e.target.value)}/>
                    </fieldset>
                    <button type="button" onClick={handleSubmmit}> Register </button>
                </S.Form>
            </S.SectionOne>
        </>
    );
}