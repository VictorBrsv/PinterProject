import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import styles from './styles/UserProfile.module.scss';
import UpdProfileModal from './UpdProfileModal';
import bgTitle from './styles/profile_title.svg';
import NavForProfile from '../navigation/NavForProfile';
import UserPartyItem from './UserPartyItem';
import axios from 'axios';
import { useAppSelector } from '../../redux/store';
import { PartyWithRoomId } from './types/UserParties';

export default function UserProfile(): JSX.Element {
    const [visible, setVisible] = useState(false);
    const { user } = useAppSelector((store) => store.auth);
    const [parties, setParties] = useState <PartyWithRoomId[]>([]);
    // const userId: number = user?.id as number;
    // console.log(userId);
    
    const hide = (): void => {
        setVisible(true)
    }

    useEffect(() => {
        const userPartiesWithRoomId = async () => {
            const { data } = await axios(`/api/users/parties/${user?.id}`);
            // setParties(data);
            if (Array.isArray(data)) {
                setParties(data);
            } else {
                console.error('Server response is not an array:', data);
            }
        }
        userPartiesWithRoomId();
    }, [])
    console.log(parties);

    // const delUserFromRoomHandler = async (userId: number): Promise<void> => {
    //     try {
    //         const { data } = await axios.delete(`/api/users/roomdialogue/${userId}`);
    //         setParties(data);
    //     } catch (error) {
    //         console.error('Error deleting room member', error)
    //     }
    // }

    const bgDivColors = ['#3C4D34', '#422222', '#242E3C', '#3B2643', '#3E090F'];

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
                    <div className={styles.user__profile__body}>
                        {parties ? (parties.map((party, index) => (
                            <UserPartyItem key={party.id} party={party} color={bgDivColors[index % bgDivColors.length]} />
                        ))) : (
                            <p>Список мероприятий пока пуст</p>
                        )}
                        {/* <UserPartyItem />
                        <UserPartyItem />
                        <UserPartyItem /> */}
                    </div>
                </div>
            )}            
        </>
    )
}
