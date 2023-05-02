import React, { useRef } from "react";

type NewTodoListProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodoList: React.FC<NewTodoListProps> = props => {

    const ref = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = ref.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <div>
            <form onSubmit={todoSubmitHandler}>
                <label htmlFor="todo-text">Todo text</label>
                <input type="text" id="todo-text" ref={ref} />
                <button type="submit">ADD TODO</button>
            </form>
        </div>
    );
};

export default NewTodoList;