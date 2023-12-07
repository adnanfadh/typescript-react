import { useContext, useState } from 'react'
import UserContext, {UserState} from './store'

function ConsumeComponent() {
    const user = useContext<UserState>(UserContext);

    return(
        <>
            <div>
                First: {user.first}
            </div>
            <div>
                Last: {user.last}
            </div>
        </>
    );
}

function UseContextComponent() {
    const [user, setUser] = useState<UserState>({
        first: "jane",
        last: "Smith"
    })
  return (
    <UserContext.Provider value={user}>
        <ConsumeComponent/>
        <button onClick={() => setUser({
            first: "Nur",
            last: "tirami"
        })}>
            Change Context
        </button>
    </UserContext.Provider>
  )
}

export default UseContextComponent