import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Patrick", "Pedro", "Lucas"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Patrick", age: 23 },
        { id: 2, name: "Pedro", age: 26 },
        { id: 3, name: "Lucas", age: 20 }
    ])

    return (
        <div>
            {/* 4 - render sem key */}
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            {/* 5 - render com key */}
            <ul>
                {users.map((user) => (
                    <li id={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender