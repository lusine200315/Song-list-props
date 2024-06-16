import { Song } from "./Song"

export const SongList = ({items, onDelete, onMove}) => {
    return (
        <div>
            <h1>Song List</h1>
            {
                items.map(item => <Song key={item.id} {...item} onDelete={onDelete} onMove={onMove} />)
            }
        </div>
    )
}