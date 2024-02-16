import React, { useEffect, useState } from "react";
import RoomItems from "../room/RoomsItem";
import styles from "./styles/Party.module.scss";
import findYours from "./styles/find_yours.svg";
import AddRoomModal from "../room/AddRoomModal";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import { loadRooms } from "../room/roomSlice";

export default function PartyPage(): JSX.Element {
  const { parties } = useAppSelector((store) => store.party);
  const { user } = useAppSelector((store) => store.auth);
  const { rooms } = useAppSelector((store) => store.room);
  const [visible, setVisible] = useState(false);
  const { partyId } = useParams();
  const dispatch = useAppDispatch();

  let party;
  if (partyId) {
    party = parties.find((party) => party.id === +partyId);
  }

  const hide = (): void => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(loadRooms(partyId));
  }, [setVisible]);

  const createRoomHandler = () => {
    if (user?.name) {
      setVisible(true);
    } else {
      alert("Для создания комнаты необходимо войти в приложение");
    }
  };
  return (
    // добавить картинку для отдельного мероприятия party.image
    <div className={styles.party_page}>
      <img
        className={styles.findYours}
        src={findYours}
        alt="find your company"
      />
      <div className={styles.party_page__info}>
        <button type="button" onClick={createRoomHandler}>
          Создать комнату
        </button>
        <div className={styles.time_place}>
          <p>{`${party?.time} | ${party?.date}`}</p>
          <p>{party?.title}</p>
        </div>
      </div>
      <p>{party?.description}</p>

      <div className={styles.choose_room}>
      {user?.name ? (
          <div className={styles.rooms__container}>
            <h1>Выбрать комнату</h1>
            {rooms.map((room) => (
              <RoomItems key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className={styles.rooms__container}>
            <h1>Для просмотра комнат необходимо авторизоваться</h1>
          </div>
        )}
      </div>
      {visible && <AddRoomModal hide={hide} partyId={partyId} />}
    </div>
  );
}