import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {

        setPlayerName(event.target.value);
    }


    const playerElement = <span className="player-name">{playerName}</span>;
    const inputElement = <input type="text" required value={playerName} onChange={handleChange} />;


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {(!isEditing) ? playerElement : inputElement}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick} >{!isEditing ? "Edit" : "Save"}</button>
        </li>
    )
}