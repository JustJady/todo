import React, { FC } from 'react'
import { ITodoElement } from './types'
import todoElementstyle from "./todoElementstyle.module.css";
import avatarImg from "../assets/Frame 26.svg";

const TodoElement: FC<ITodoElement> = ({ countTodo, email, id, name }) => {

    return (
        <li className={todoElementstyle[`todo__item`]}>
            <div className={todoElementstyle['todo__item__element']}>
                <p className={todoElementstyle[`todo__item__element__number`]}>{id}</p>
                <div className={todoElementstyle[`todo__item__element__container`]}>
                    <img src={avatarImg} alt="avatar" className={todoElementstyle[`todo__item__element__avatar`]} />
                    <div className={todoElementstyle[`todo__item__element__userinfo__container`]}>
                        <p className={todoElementstyle[`todo__item__element__name`]}>{name}</p>
                        <p className={todoElementstyle[`todo__item__element__email`]}>{email}</p>
                    </div>
                </div>
            </div>
            <p className={todoElementstyle[`todo__item__element__count`]}>{countTodo}</p>
        </li>
    )
}

export default TodoElement