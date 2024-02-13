/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { authorization } from "./authSlice";
import styles from './styles/Auth.module.scss'

export default function Authorization(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void dispatch(authorization({ email, password }));
    navigate('/')
  };

  return (
    <div className={styles.container}>
      <form id="reg-form" onSubmit={onHandleSubmit}>
        <h2>Страница авторизации</h2>
        <div className="mb-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Введите e-mail"
          />
        </div>
        <div className="mb-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="form-control"
            placeholder="Введите пароль"
          />
        </div>
        {/* <h2 style={{ color: "red" }} className="error" /> */}
        <button type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
