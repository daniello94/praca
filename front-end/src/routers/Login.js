import React, { useState } from "react";
import axios from "axios";

/* style */
import styles from "../style/Login.module.scss";

/* components */
import Button from "../components/Button";
import H2 from "../components/H2";
import Error from "../components/Error";

export default function Login(props) {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            return setError('Wpisz email')
        } else if (!password) {
            return setError('Wpisz hasło')
        } else {
            e.preventDefault()
            axios.post('http://127.0.0.1:8080/user/login', {
                email: email,
                password: password
            })
                .then((req) => {
                    if (!req.data.success) {
                        setError('Podane dane logowania są nieprawidłowe');
                    } else {
                        props.setUser(req.data);
                        localStorage.setItem("user", JSON.stringify(req.data));
                    }
                })
        }
    }

    return (
        <div className={styles.fromLogin}>
            <H2>Logowanie</H2>
            <Error>{error}</Error>
            <form onSubmit={userSubmit}>
                <input
                    type='text'
                    placeholder="wpisz login"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email' />

                <input
                    type='password'
                    placeholder="wpisz hasło"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                />
                <Button type='submit'>Zaloguj</Button>
            </form>
        </div>
    )
}


