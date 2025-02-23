import { useEffect, useRef, useState } from 'react'
import TodoElement from './TodoElement';
import { ITodoElement, TTodo, TUser } from './types';
import { getAllTodos, getAllUsers } from './todoAPi';
import todostyle from "../styles/todostyle.module.css";

const Todo = () => {

    const [allTodos, setAllTodos] = useState<ITodoElement[]>([]);

    const [isError, setIsError] = useState(false);
    const [isLoad, setIsLoad] = useState(false);

    const root = useRef<HTMLElement | null>(null);

    useEffect(() => {

        updateTodos();

        root.current = document.body;
    }, [])

    const updateTodos = () => {

        getAllTodos().then((todosResponse: TTodo[]) => {
            if (!Array.isArray(todosResponse)) return setIsError(true);
            getAllUsers().then((usersResponse: TUser[]) => {
                if(!Array.isArray(usersResponse)) return setIsError(true);
                const users: ITodoElement[] = [];

                usersResponse.forEach(user => {
                    const userElement = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        countTodo: todosResponse.filter(todo => todo.userId === user.id).length
                    };
                    users.push(userElement);
                })

                setAllTodos(users);
                setIsLoad(true);
            })
        })

    }

    if(isError) return <p>An unexpected error occurred</p>

    return (
        <>
            {!isLoad ? 
                <p>Loading...</p>
            :
                <div className={todostyle[`container`]}>
                    <div className={todostyle[`todo__header`]}>
                        <h1 className={todostyle[`todo__header__title`]}>User To-Do Table</h1>
                        <p className={todostyle[`todo__header__subtitle`]}>User task table for effective planning</p>
                    </div>
                    <ul className={todostyle[`todo__list`]}>
                        <li className={todostyle[`todo__item__header`]}>
                            <div className={todostyle[`todo__item__header__container`]}>
                                <p className={todostyle[`todo__item__header__number`]}>#</p>
                                <p className={todostyle[`todo__item__header__name`]}>USERNAME</p>
                            </div>
                            <p className={todostyle[`todo__item__header__count`]}>TO-DO COUNT</p>
                        </li>
                        {
                            allTodos.map((todo, index) => {
                                return (
                                    <TodoElement key={`todo=${todo.id}`} {...todo} />
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </>

    )
}

export default Todo