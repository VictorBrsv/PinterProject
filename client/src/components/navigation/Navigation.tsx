import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./style/Navigation.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { logOut } from "../auth/authSlice";
import { HashLink } from "react-router-hash-link";


export default function Navigation(): JSX.Element {
  const { user } = useAppSelector((store) => store.auth);
  const nav = useNavigate();

  const dispatch = useAppDispatch();

  const onHandleLogout = (): void => {
    void dispatch(logOut());
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
              <HashLink className="nav__button" smooth to="#events">
                Мероприятия
              </HashLink>
            </li>
            <li className={styles.item}>
              <HashLink className="nav__button" smooth to="#three_steps">
                Как начать
              </HashLink>
            </li>
            <li className={styles.item}>
              <HashLink className="nav__button" smooth to="#footer_contacts">
                Контакты
              </HashLink>
            </li>
          </div>

          {!user?.name ? (
            <div className={styles.lk}>
              <li className="nav__item lk">
                <NavLink className="nav__button" to="/auth/registration">
                  Регистрация
                </NavLink>
              </li>
              <li className="nav__item lk">
                <NavLink className="nav__button" to="/auth/authorization">
                  <span>Вход</span>
                </NavLink>
              </li>
            </div>
          ) : (
            <div className={styles.lk}>
              <li>
                <NavLink className="nav__button" to="/profile">
                  Личный кабинет
                </NavLink>
              </li>
              <li className="nav__item lk">
                <button
                  type="button"
                  onClick={onHandleLogout}
                  className="nav__button"
                >
                  Выйти
                </button>
              </li>
            </div>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
