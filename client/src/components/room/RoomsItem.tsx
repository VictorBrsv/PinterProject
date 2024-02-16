import React, { useEffect, useState } from "react";
import roomIcon1 from "./styles/roomIcons/room_icon1.svg";
// import roomIcon2 from './styles/roomIcons/room_icon2.png';
// import roomIcon3 from './styles/roomIcons/room_icon3.png';
// import roomIcon4 from './styles/roomIcons/room_icon4.png';
// import roomIcon5 from './styles/roomIcons/room_icon5.png';
import styles from "../party/styles/Party.module.scss";
import { Room } from "./types/RoomState";
import RoomInfoWithTest from "./RoomInfoWithTest";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";

export default function RoomItems({ room }: { room: Room }): JSX.Element {
  const [visible, setVisible] = useState(false);
  const { user } = useAppSelector((store) => store.auth);
  const { access_tables } = useAppSelector((store) => store.room);
  const navigate = useNavigate();
  const hide = (): void => {
    setVisible(false);
  };
  useEffect(() => {}, [access_tables, user]);

  const handleRoomAccess = () => {
    const isAccess = access_tables.find(
      (access) =>
        access.user_id === user?.id && access.room_token === room.token,
    );
    if (!isAccess && isAccess !== undefined) {
      alert("Это не ваши люди");
    } else {
      if (isAccess?.access) {
        navigate("/chat");
      } else if (isAccess?.access === false) {
        alert("Вы не можете войти в эту комнату");
      } else {
        setVisible(true);
      }
    }
  };

  return (
    <div className={styles.rooms__container}>
      <div className={styles.item} onClick={handleRoomAccess}>
        <h4>Комната # {room.id}</h4>
        <img src={roomIcon1} alt="enter the room1" />
      </div>
      {visible && <RoomInfoWithTest hide={hide} room={room} />}
    </div>
  );
}
