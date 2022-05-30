import React, { useEffect } from 'react'
import Produto from './Produto/Produto'
import Botao from '../Botao/Botao'
import styles from './Produtos.module.css'
import { useState } from 'react';
import Titulo from '../Titulo/TItulo'

const Produtos = () => {
  const [produtos, setProdutos] = useState();

  useEffect(() => {
    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
      .then(response => response.json())
      .then(result => setProdutos(result))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    console.log(produtos ? produtos.products : 'Nada ainda');
  }, [produtos]);

  return (
    <section className={styles.produtos}>
      <Titulo texto='Sua seleção especial'/>
    </section>
  )
}

export default Produtos











     





