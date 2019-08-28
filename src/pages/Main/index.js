import React, { useState, useCallback } from 'react'

import { Container, Form, SubmitButton, List, DeleteButton } from './styles';

import { FaGithub, FaPlus, FaTrash,
    FaSpinner, FaBars } from 'react-icons/fa';

import api from '../../services/api';

export default function Main(){

    const [newRepo, setNewRepo]           = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading]           = useState(false);
    
    function handleInputChange(e) {
        setNewRepo(e.target.value);
    }

    const handleSubmit = useCallback((e)=> {
        e.preventDefault();

        async function submit(){
            setLoading(true);
            try {
                const response = await api.get(`repos/${newRepo}`);

                const data = {
                    name: response.data.full_name,
                }

                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        submit();
    }, [newRepo, repositorios]);

    const handleDelete = useCallback(repo => {
        const find = repositorios.filter(r => r.name !== repo);
        setRepositorios(find);
    }, [repositorios]);

    return(
        <Container>
            <h1>
                <FaGithub size={ 25 } />
                Repositórios
            </h1>

            <Form onSubmit={ handleSubmit }>
                <input type="text" 
                    placeholder="Adicionar repositórios" 
                    value={ newRepo } 
                    onChange={ handleInputChange } />
                <SubmitButton loading={ loading ? 1 : 0 }>
                    { loading ? (
                        <FaSpinner color="#FFF" size={ 14 } />
                    ) : (
                        <FaPlus color="#FFF" size={ 14 } /> 
                    )}
                    
                </SubmitButton>
            </Form>

            <List>
                { repositorios.map(repo => (
                    <li key={ repo.name }>
                        <span>
                            <DeleteButton onClick={ () => handleDelete(repo.name) }>
                                <FaTrash size={ 14 } />
                            </DeleteButton>
                            { repo.name }
                        </span>
                        <a>
                            <FaBars size={ 20 } />
                        </a>
                    </li>
                ) ) }
            </List>
        </Container>
    );
}