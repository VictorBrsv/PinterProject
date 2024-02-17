import React from "react";
// import styles from "./styles/Party.module.scss";
import styles from "./styles/PartiesList.module.scss";
// import partyImage from "./styles/party_item.png";
import { useNavigate } from "react-router-dom";
import { Party } from "./types/PartyState";

export default function PartyItem({ party }: { party: Party }): JSX.Element {
  const nav = useNavigate();

  return (
    <div className={styles.party__item}>
      <img onClick={() => nav(`/parties/${party.id}`)} src={party.image} alt="party img" />
      <div className={styles.description}>
        <h3>{party.title}</h3>
        <p>{`${party.time} ${party.date}`}</p>
      </div>
      <h4 onClick={() => nav(`/parties/${party.id}`)}>Найти компанию</h4>
    </div>
  );
}
