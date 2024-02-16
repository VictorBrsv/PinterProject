import React from 'react';
import styles from './styles/UserPartyItem.module.scss';

export default function UserPartyItem(): JSX.Element {

    return (
        <div className={styles.user__party__item}>
            <div>
                <p>7 марта</p>
                <button>x</button>
            </div>
            <img src="" alt="" />
            <div>
                <span>Перейти в чат</span>
            </div>
        </div>
    )
}
