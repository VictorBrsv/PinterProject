import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './style/Navigation.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { logOut } from '../auth/authSlice';

export default function NavForProfile(): JSX.Element {
    const { user } = useAppSelector((store) => store.auth);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const onHandleLogout = (): void => {
        dispatch(logOut());
        // window.location.assign('/');
        nav('/');
    };

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.menu}>
                    <div className={styles.nav}>
                        <li className={styles.item}>
                            <NavLink className="nav__button" to="/">
                                Главная
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <HashLink className="nav__button" smooth to="/parties#events">
                                Мероприятия
                            </HashLink>
                        </li>
                        <li className={styles.item}>
                            <HashLink className="nav__button" smooth to="/contacts#footer_contacts">
                                Контакты
                            </HashLink>
                        </li>
                    </div>

                    {user?.name && (
                        <div className={styles.lk}>
                            <li className="nav__item lk">
                                <span
                                onClick={onHandleLogout}
                                className={styles.nav__button}
                                >
                                    Выйти
                                </span>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </>
    )
}
