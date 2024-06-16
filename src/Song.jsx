export const Song = ({id, title, artist, duration, onDelete, onMove, onMoveDown, inPlayList=false}) => {

    return (
        <div className="song">
            <p>{title}</p>
            <strong>By: {artist}</strong>
            <p>Duration: {duration}</p>

            <div style={{display: "flex", gap: '12px'}}>
            {inPlayList
                ? <button onClick={() => onMoveDown(id)}>Move Down</button>
                : <button onClick={() => onMove(id)}>Move</button>
                }
            <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}