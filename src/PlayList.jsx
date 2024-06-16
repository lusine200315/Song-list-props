import { Song } from "./Song";

export const PlayList = ({items, onDelete, onMoveDown}) => {

    return (
        <div>
            <h1>Play List</h1>
            {
                items.length > 0 ? items.map(item => <Song key={item.id} {...item} onDelete={onDelete} onMoveDown={onMoveDown} inPlayList = {true} />)
                : <div style={{ fontSize: '17px', padding: '5px', borderRadius: '8px', color: 'red', backgroundColor: 'white' }}>You havn't playlist yet </div>
                // 
            }
        </div>
    )
}