import Card from "../UI/Card";
import ModalWindow from "../UI/ModalWindow";
import './CreateUser.css';
import Button from "../UI/Button";
import React, { useState } from "react";


const CreateUser = (props) => {
    
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();
   


    const createUserHandler = (event) => {
        event.preventDefault();
        if (inputName.trim().length === 0 || inputAge.length === 0 || +inputAge < 1) {
            return setError(true);
        }
        props.onCreateUsers(inputName, inputAge);
        setInputName("");
        setInputAge("");
    }

    const inputNameHandler = (event) => {
        setInputName(event.target.value);
    }

    const inputAgeHandler = (event) => {
        setInputAge(event.target.value);
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
        <div>
            {error && <ModalWindow title={'ВНИМАНИЕ'} content={'Правильно заполните поля'} onError={errorHandler}/>}
            <Card className="input">
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type='text' onChange={inputNameHandler} value={inputName}/>
                    <label htmlFor="age">Возраст</label>
                    <input id="age" type='number' onChange={inputAgeHandler} value={inputAge}/>
                    <Button type="submit">Добавить Пользователя</Button>
                </form>
            </Card>
        </div>
    )
}

export default CreateUser;