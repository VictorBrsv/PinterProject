import React, { useState } from 'react';
import UserCard from './UserCard';
import styles from './styles/UserProfile.module.scss';
import UpdProfileModal from './UpdProfileModal';
import bgTitle from './styles/profile_title.svg';
import NavForProfile from '../navigation/NavForProfile';
import UserPartyItem from './UserPartyItem';

export default function UserProfile(): JSX.Element {
    const [visible, setVisible] = useState(false);

    const hide = (): void => {
        setVisible(true)
    }

    return (
        <>
            <NavForProfile />
            {visible ? (
                <UpdProfileModal hide={hide} />
                ) : (
                <div className={styles.user__profile}>
                    <div className={styles.user__profile__header}>
                        <UserCard />
                        <img className={styles.bg_img} src={bgTitle} alt="Личный кабинет" />
                    </div>
                    <h1>Мои мероприятия</h1>
                    <hr />
                    {/* <UpdProfileModal hide={hide} /> */}
                    <div className={styles.user__profile__body}>
                        <UserPartyItem />
                        <UserPartyItem />
                        <UserPartyItem />
                        <UserPartyItem />
                    </div>
                </div>
            )}            
        </>
    )
}
