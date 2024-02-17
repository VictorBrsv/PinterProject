import React from 'react';
import styles from './styles/UserPartyItem.module.scss';
import btnX from './styles/btn-x.svg';
import partyImg from './styles/party_item_img.png';

export default function UserPartyItem(): JSX.Element {

    return (
        <div className={styles.user__party__item}>
            <div className={styles.user__party__item__header}>
                <p>Скоро</p>
                <span>7 марта</span>
                <img src={btnX} alt="delete" />
            </div>
            <img className={styles.user__party__item__img} src={partyImg} alt="" />
            <div className={styles.user__party__item__footer}>
                <span>Перейти в чат</span>
            </div>
        </div>
    )
}
