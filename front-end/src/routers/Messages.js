import { useState, useEffect } from "react";
import axios from "axios";

/* style */
import styles from '../style/Message.module.scss';

/*components  */
import Container from "../components/Container";
import Button from "../components/Button";
import H2 from "../components/H2";
import Error from "../components/Error";

export default function Message(props) {
    const [stan, setStan] = useState('')
    const [alesMessage, setAlesMessage] = useState([]);
    const [isActive, setActive] = useState('');
    const [activeForm, setActiveForm] = useState('');
    const [error, setError] = useState('');
    const [oneMessage, setOneMessage] = useState({
        firstName: '',
        phoneNumber: '',
        email: '',
        message: '',
        oderStan: ""
    });

    /* data email */
    const [emailName, setEmailName] = useState(props.userData.user.firstName);
    const [emailPhoneNumber, setEmailPhoneNumber] = useState(props.userData.user.phoneNumber);
    const [email, setEmail] = useState(props.userData.user.email);
    const [emailMessage, setEmailMessage] = useState('');
    const [emailNameClient, setEmailNameClient] = useState('');
    const [emailPhoneNUmberClient, setEmailPhoneNumberClient] = useState('');
    const [emailClient, setEmailClient] = useState('');
    const [emailMessageClient, setEmailMessageClient] = useState('');

    function listMessage() {
        axios.post('http://127.0.0.1:8080/message/all')
            .then((res) => {
                setAlesMessage(res.data)
            })
    };

    function oneMessageVive(_id) {
        axios.get('http://127.0.0.1:8080/message/' + _id)
            .then((res) => {
                setOneMessage(res.data);
                setEmailNameClient(oneMessage.firstName);
                setEmailPhoneNumberClient(oneMessage.phoneNumber);
                setEmailClient(oneMessage.email);
                setEmailMessageClient(oneMessage.message)
            })
        const oderStan = "Odczytany"
        axios.put('http://127.0.0.1:8080/message/update/' + _id, {
            oderStan
        })
            .then(() => {
                listMessage()
            })

    };

    function sendEmail(e) {
        e.preventDefault()
        if (!emailName) {
            return setError('Musisz podać imię')
        } else if (!email) {
            return setError("Musisz podać email")
        } else if (!emailPhoneNumber) {
            return setError("Musisz podać numer telefonu")
        } else if (!emailMessage) {
            return setError("Musisz wpisać treśc wiadomości")
        } else {
            const fromDataEmail = {
                dataEmployee: {
                    emailName,
                    emailPhoneNumber,
                    email,
                    emailMessage
                },
                dataClient: {
                    emailNameClient,
                    emailPhoneNUmberClient,
                    emailClient,
                    emailMessageClient
                },
            };

            axios.post('http://127.0.0.1:8080/email/add', fromDataEmail)
                .then(() => {
                    setError(<Error isAlternative={true}>Wiadomość emial została wysłana pomyślnie</Error>)
                })
            setEmailMessage('')
        }

    }

    function stanDelate(_id) {
        setStan(_id)
    }
    function delateMessage(_id) {
        axios.delete('http://127.0.0.1:8080/message/delate/' + _id)
            .then(() => {
                listMessage()
                stanDelate('')
            })
            
    }

    useEffect(() => {
        listMessage()

    }, [])

    if (stan === alesMessage._id) {
        return (
            <Container>
                <H2>Wiadomości</H2>
                <table>
                    <thead>
                        <tr>
                            <td>Od</td>
                            <td>Email</td>
                            <td>Numer telefonu</td>
                            <td>Akcje</td>
                        </tr>
                    </thead>

                    <tbody key={oneMessage._id}>
                        <tr className={oneMessage.oderStan === "Oczekujący" ? styles.stanMessage : '' || oneMessage.oderStan === "Odczytany" ? styles.tr : ''}>
                            <td>{oneMessage.firstName}</td>
                            <td>{oneMessage.email}</td>
                            <td>{oneMessage.phoneNumber}</td>
                            <td className={styles.questionDelate}>
                                <span>Jesteś pewien, że chcesz usunąć?</span>
                                <div>
                                    <Button isAlternative={true} onClick={() => delateMessage(oneMessage._id)} >Tak</Button>
                                    <Button isAlternative={true} onClick={() => stanDelate('')}>Nie</Button>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        )
    }

    return (
        <Container>
            <H2>Wiadomości</H2>
            <table>
                <thead>
                    <tr>
                        <td>Od</td>
                        <td>Email</td>
                        <td>Numer telefonu</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                {alesMessage.map((message => {
                    return (
                        <tbody key={message._id}>
                            <tr className={message.oderStan === "Oczekujący" ? styles.stanMessage : '' || message.oderStan === "Odczytany" ? styles.tr : ''}>
                                <td>{message.firstName}</td>
                                <td>{message.email}</td>
                                <td>{message.phoneNumber}</td>
                                <td>
                                    <Button isAlternative={true} onClick={() => {
                                        setActive(message._id)
                                        setActiveForm('')
                                        setEmailMessage('')
                                        oneMessageVive(message._id)
                                        setError('')
                                    }}>Odczytaj</Button>
                                    <Button isAlternative={true}
                                        onClick={() => {
                                            stanDelate(stan._id)
                                            oneMessageVive(message._id)
                                        }}
                                    >Usuń</Button>
                                </td>
                            </tr>
                            {message._id === isActive && (
                                <tr>
                                    <td colSpan={4}>
                                        <p>{message.message}</p>
                                        <br />
                                        <Button isAlternative={true} onClick={() => {
                                            oneMessageVive(message._id)
                                            setActiveForm('open')
                                        }}>Odpowiedz</Button>
                                        {activeForm === 'open' && (
                                            <>
                                                <H2>Twoja odpowiedź do {oneMessage.firstName} </H2>
                                                <Error>{error}</Error>
                                                <form onSubmit={sendEmail}>
                                                    <input
                                                        type="text"
                                                        placeholder="podaj imię"
                                                        name="emailName"
                                                        onChange={(e) => setEmailName(e.target.value)}
                                                        value={emailName} />
                                                    <input
                                                        type="text"
                                                        placeholder="podaj email"
                                                        name="email"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email} />
                                                    <input
                                                        type="text"
                                                        placeholder="podaj numer kontaktowy"
                                                        name="emailPhoneNumber"
                                                        onChange={(e) => setEmailPhoneNumber(e.target.value)}
                                                        value={emailPhoneNumber} />
                                                    <textarea
                                                        type="text"
                                                        name="emailMessage"
                                                        onChange={(e) => setEmailMessage(e.target.value)}
                                                        value={emailMessage}
                                                        placeholder="Wpisz treść wiadomosći" />
                                                    <Button isAlternative={true} type="submit">Wyślij</Button>
                                                </form>

                                            </>

                                        )}

                                    </td>
                                </tr>
                            )}

                        </tbody>

                    )
                }))}
            </table>
        </Container>
    )

}