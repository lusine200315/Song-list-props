import { useState } from 'react'
import { Song } from './Song'
import { Album } from './Album'
import { SongList } from './SongList'
import { PlayList } from './PlayList'
import './App.css'

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Symphony No.40", artist: "Mozart", duration: 20},
    { id: 102, title: "Fur Elise", artist: "Beethoven", "duration": 4 },
    { id: 103, title: "Four Seasons", artist: "Vivaldi", "duration": 42 },
    { id: 104, title: "Moonlight Sonata", artist: "Beethoven", "duration": 15 },
    { id: 105, title: "The Magic Flute", artist: "Mozart", "duration": 160 }
  ]);

  const [playList, setPlayList] = useState([]);

  const removeSongFromSongList = id => {
    setSongs(songs.filter(song => song.id != id));
  };

  const removeSongFromPlayList = id => {
    setPlayList(playList.filter(song => song.id != id))
  }
  
  const moveSong = id => {
    const songToAdd = songs.find(song => song.id === id);
  
    if (songToAdd && !playList.some(music => music.id === id)) {
      setPlayList([...playList, songToAdd]);
    }
  };

  const onMoveDown = id => {
    const index = playList.findIndex(song => song.id === id);
    
    if (index !== -1 && index < playList.length - 1) {
        [playList[index], playList[index + 1]] = [playList[index + 1], playList[index]];
        setPlayList([...playList]);
    } else {
        alert("It's the last song in the playlist");
    }
  }

  return (
    <>
      {/* <h1>Hello Props</h1>
      <Album name="Armenian music" year="2004"> 
      <Song title="Perfect" artist = "Ed Sheeran" duration={5.6}/>
      <Song title="Perfect" artist = "Ed Sheeran" duration={5.6}/>
      <Song title="Perfect" artist = "Ed Sheeran" duration={5.6} />
      </Album> */}

      <div style={{display: 'flex'}}>
        <SongList items={songs} onDelete={removeSongFromSongList} onMove={moveSong}/>
        <PlayList items={playList} onDelete={removeSongFromPlayList} onMoveDown={onMoveDown} />
      </div>
    </>
  )
}

export default App;
