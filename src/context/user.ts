import { createContext } from "react";

interface InitialType   {
    name: string;
}

const initialState: InitialType = {
    name: "adnan"
}

export type UserState = typeof initialState

const UserContext = createContext<typeof initialState>( initialState )

const UserProvider = () => {

}

export default { UserContext, UserProvider }

