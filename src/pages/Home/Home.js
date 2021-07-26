import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'; 
import { useHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 

import Logo from '../../images/logo/logo.png';
import Item1 from '../../images/elements/item_1.png';
import Item2 from '../../images/elements/item_2.png';
import Item3 from '../../images/elements/item_3.png';
import Item4 from '../../images/elements/item_4.png';

function App(props) {
  
  return (
    <S.SectionOne>
    <img className="logo" src={ Logo } alt="Logo Moda Styled"/>
    <S.CadastroBoxText>
      <Link to="/customerRegistration"> Cadatrar Cliente</Link>
      <Link to="/productRegistration"> Cadatrar Produto</Link>
    </S.CadastroBoxText>
    <S.ListProductsBox>
        <S.ListProductsBoxItem>
            <img className="item" src={ Item1 } alt="Item" />
            <p className="nomeProduto">Blusa</p>
            <p className="preco">de R$ 99,00</p>
            <p className="precoPromo">por R$ 29,90</p>
        </S.ListProductsBoxItem>
        <S.ListProductsBoxItem>
            <img className="item" src={ Item2 } alt="Item" />
            <p className="nomeProduto">Vestido</p>
            <p className="preco">de R$ 99,00</p>
            <p className="precoPromo">por R$ 29,90</p>
        </S.ListProductsBoxItem>
        <S.ListProductsBoxItem>
            <img className="item" src={ Item3 } alt="Item" />
            <p className="nomeProduto">Camiseta</p>
            <p className="preco">de R$ 99,00</p>
            <p className="precoPromo">por R$ 29,90</p>
        </S.ListProductsBoxItem>
        <S.ListProductsBoxItem>
            <img className="item" src={ Item4 } alt="Item" />
            <p className="nomeProduto">Camiseta</p>
            <p className="preco">de R$ 99,00</p>
            <p className="precoPromo">por R$ 29,90</p>
        </S.ListProductsBoxItem>
    </S.ListProductsBox>
</S.SectionOne>
  );
}

export default App;
