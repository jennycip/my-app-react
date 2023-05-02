import { createContext } from "react";

const initialState = {
    first: "John",
    last: "Doe",
};

export const Context = createContext<typeof initialState>(initialState);