import React from 'react';
import styles from './styles/Party.module.scss';
import partyImage from './styles/party_item.png'
import { useNavigate } from 'react-router-dom';

export default function PartyItem(): JSX.Element {
    const nav = useNavigate();

    return (
        <div className={styles.party__item}>
            <img onClick={() => nav('/party')} src={partyImage} alt="party img" />
            <div className={styles.description}>
                <h3>Концерт группы ЛСП</h3>
                <p>7 марта в 22:00</p>
            </div>
            <h4 onClick={() => nav('/party')}>Найти компанию</h4>
        </div>
    )
}
