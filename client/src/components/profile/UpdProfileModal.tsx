import React, { useEffect, useState } from 'react';
import styles from './styles/User.module.scss';
import logoSml from './styles/user_logo_sml.png';
// import imgUpload from './styles/img_upload.png';
import imgUpload from './styles/img_upload.svg';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { updProfile } from '../auth/authSlice';

export default function UpdProfileModal({ hide }: { hide: () => void }): JSX.Element {
    const { user } = useAppSelector((store) => store.auth);
    
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email ||"");
    const [password, setPassword] = useState(user?.password || "");
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     setName(user?.name || "");
    //     setEmail(user?.email ||"");
    //     setPassword(user?.password || "");
    // }, [user]);

    const changeProfileHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // console.log(name, email, password);
        
        dispatch(updProfile({ id: user?.id, name, email, password }));
        hide();
    }

    return (
        <div className={styles.modal}>
            <div className={styles.upd_profile}>
                <div className={styles.upd_profile__header}>
                    <div className={styles.upd_profile__title}>
                        <img className={styles.upd_profile__img} src={logoSml} alt="user logo img" />
                        <p>Изменение данных профиля</p>
                    </div>
                    <button type="button" onClick={hide}><span>Закрыть</span></button>
                </div>

                <div className={styles.upd_profile__body}>
                    <div>
                        <h4>Загрузить фото профиля</h4>
                        <img src={imgUpload} alt="" />
                    </div>

                    <form onSubmit={changeProfileHandler}>
                        <h4>Изменить персональные данные</h4>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Имя' />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Почта' />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' />
                        <button type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
