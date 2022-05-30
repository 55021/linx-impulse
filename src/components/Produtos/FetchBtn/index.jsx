import React from 'react';
import styles from './FetchBtn.module.css'

const FetchBtn = ({texto}) => {
  return (
    <button className={styles.button}>
        {texto}
    </button>
  )
}

export default FetchBtn