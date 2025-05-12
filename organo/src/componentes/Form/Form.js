import './Form.css';
import TextField from '../TextField/TextField';
import List from '../List/List';
import Button from '../Button/Button';
import { useState } from 'react';


const Form = (props) => {

    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const saved = (event) => {
        event.preventDefault()
        props.newMember({
            name, area, image, team
        })
        setName('')
        setArea('')
        setImage('')
        setTeam('')
    } 

    return (
        <section className='form'>
            <form onSubmit={saved}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    label='Nome'  
                    required={true}
                    valueEvent = {name}
                    changed = {valueEvent => setName(valueEvent)}
                    placeholder='Digite seu nome'
                />
                <TextField 
                    label='Cargo' 
                    required={true}
                    valueEvent = {area}
                    changed = {valueEvent => setArea(valueEvent)}
                    placeholder='Digite seu cargo'
                />
                <TextField 
                    label='Imagem' 
                    valueEvent = {image}
                    changed = {valueEvent => setImage(valueEvent)}
                    placeholder='Digite o endereço da imagem'
                />
                <List 
                    label='Time' 
                    itens={props.teams}
                    valueEvent = {team}
                    changed = {valueEvent => setTeam(valueEvent)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;