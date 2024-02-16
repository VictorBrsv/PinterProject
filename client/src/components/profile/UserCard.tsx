import React, { useState } from 'react';
// import profileImage from './styles/user_logo_example.png';
import profileImage from './styles/user_logo_example.svg';
import styles from './styles/User.module.scss';
import UpdProfileModal from './UpdProfileModal';
import { useAppSelector } from '../../redux/store';

export default function UserCard(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const { user } = useAppSelector((store) => store.auth);

  const hide = (): void => {
    setVisible(false)
  }

  return (
    <>
      <div className={styles.user__card}>
          <img className={styles.user__card__img} src={profileImage} alt="profile img" />
          {/* <img className={styles.user__card__img} src={user?.image} alt="profile img" /> */}

          <div className={styles.user__card__info}>
              <div className={styles.user__card__name}>
                  <p>имя</p>
                  <h4>{user?.name}</h4>
              </div>
              <div className={styles.user__card__email}>
                  <p>email</p>
                  <h4>{user?.email}</h4>
              </div>
              <p onClick={() => setVisible(true)} className={styles.user__card__edit}>Изменить данные профиля</p>
          </div>
      </div>
      {visible && <UpdProfileModal hide={hide} />}
    </>
  )
}
