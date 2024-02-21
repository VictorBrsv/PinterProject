import React from 'react';
import styles from './styles/Message.module.scss';
import userLogo from './styles/user_message_logo.png';
import { useAppSelector } from '../../redux/store';

export default function Message({ message }: { message: string }): JSX.Element {
    const { user } = useAppSelector(store => store.auth);
    const userAvatar = user?.image || userLogo;
    const userName = user?.name || 'Bobr Curva'

    return (
        <div className={styles.message__container}>
            <div><img src={userAvatar} alt="" /></div>
            <div className={styles.message}>
                <h4>{userName}</h4>
                <p>{message}</p>
            </div>
        </div>
    )
}
