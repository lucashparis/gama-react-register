import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import * as S from '../Client/styled'; 

export default function ProductRegistration() {
    const [ name, setName ] = useState('');
    const [ value, setValue ] = useState('');

    function handleSubmmit() {
        console.log("chamou");
        if (!name) {
            return;
        }
        
        let cadastrosProdutos = [];
        let newCadastroProduto = [name, value];
        let cadastroLocal = localStorage.getItem('cadastrosProdutos');

        if (cadastroLocal) {
            cadastrosProdutos = JSON.parse(cadastroLocal);
            cadastrosProdutos.push(newCadastroProduto);
        }

        localStorage.setItem('cadastrosProdutos', JSON.stringify(cadastrosProdutos));
        console.log("Inseriu no banco");

    }
    
    return(
        <>
            <S.SectionOne>
                <S.Form>
                    <h1>Product Registration</h1>
                    <fieldset>
                        <legend>Product Registration</legend>
                        <label>Name</label>
                        <input type="text" placeholder="EX: Blusa" value={name} onChange={e => setName(e.target.value)} />
                        <label>Value</label>
                        <input type="number" placeholder="EX: 59,90" value={value} onChange={e => setValue(e.target.value)} />
                    </fieldset>
                    <button type="button" onClick={handleSubmmit}> Register </button>
                </S.Form>
            </S.SectionOne>
        </>
    );
}