import React from 'react';
import styles from './styles/UserPartyItem.module.scss';
import btnX from './styles/btn-x.svg';
import partyImg from './styles/party_item_img.png';
import { PartyWithRoomId } from './types/UserParties';
import { useNavigate } from 'react-router-dom';

export default function UserPartyItem({ party, color }: { party: PartyWithRoomId, color: string }): JSX.Element {
    // { party, color, onDelete }: { party: PartyWithRoomId, color: string, onDelete: () => void }
    const partyImage = party.image || partyImg;
    const nav = useNavigate();
    
    // console.log(party.room_id);

    return (
        <div className={styles.user__party__item}>
            <div className={styles.user__party__item__header}>
                {/* <p>{party.time}</p> */}
                <span>{party.time} | {party.date}</span>
                <img src={btnX} alt="delete" />
            </div>
            <img className={styles.user__party__item__img} src={partyImage} alt="" />
            <div style={{ backgroundColor: color }} className={styles.user__party__item__footer}>
                <span onClick={() => nav(`/chat/${party.room_id}`)}>Перейти в чат</span>
            </div>
        </div>
    )
}
