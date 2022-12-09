import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
/* style */
import styles from "../style/GalleryMyWork.module.scss";
/* components */
import Button from "../components/Button";
import Container from "../components/Container";
import Error from "../components/Error";

export default function GalleryMyWork() {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState([])
    const [error, setError] = useState('')
    

    function listProject() {
        axios.post('http://127.0.0.1:8080/project/all')
            .then((res) => {
                setStatus(res.data)
            })
    };

    const addProject = (e) => {
        e.preventDefault()
        if (!title) {
            return setError('Musisz podać tytuł')
        } else {
            axios.post('http://127.0.0.1:8080/project/add', {
                title: title
            })
                .then(() => {
                    listProject()
                    setError('')
                    setTitle('')
                })
        }
    };

    const delateProject = (_id) => {

        axios.delete('http://127.0.0.1:8080/project/delate/' + _id)
            .then(() => {
                listProject()
            })
    }

    useEffect(() => {
        listProject()
    }, [])
    return (

        <Container>
            <form onSubmit={addProject}>
                <Error>{error}</Error>
                <input
                    className={styles.inputProject}
                    type='text'
                    placeholder="dodaj tytuł"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <Button isAlternative={true} type="submit">Nowa Realizacja</Button>
            </form>

            <table>
                <thead>
                    <tr>
                        <td>Tytuł</td>
                        <td>Akcje</td>
                    </tr>
                </thead>
                <tbody>
                    {status.map((project) => {
                        return (
                            <tr key={project._id}>
                                <td className={styles.mainItem}>{project.title}</td>
                                <td>
                                    <Link className={styles.mainLink} to={`/editProject/${project._id}`}>Edytuj Project</Link>
                                    <Button onClick={(e) => {
                                        e.preventDefault()
                                        delateProject(project._id)
                                    }} isAlternative={true}>Usuń Projekt</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


        </Container>

    )
}