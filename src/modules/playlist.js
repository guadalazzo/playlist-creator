//useEffect. Me permite trabajar con "efectos" (fetch APIs, loggers, etc).
import React, { useState, useEffect } from 'react';
import { BaseUrl, AccessToken } from '../utils';
const url = BaseUrl + '/playlists';

export const Playlists = () => {
  const [playlists, setPlaylist] = useState([]);

  useEffect(()=>{
      console.log('GET:', url);
    fetch(url, {headers:{ 'Authorization': 'Bearer ' + AccessToken}})
    .then(response=>response.json())
    .then(data => {
        
        console.log(data.items,'playlists');
        setPlaylist(data.items)})
    .catch(error=>console.error('err:',error))
  },[])

  return (
    <div>
        {playlists && playlists.length > 0 && playlists.map((playlist, index)=>(
          <span key={`playlists${index}`}>{playlist.name} ({playlist.owner.display_name})</span>
        ))}
    </div>
  )
}

export const UsePlaylists = ()=> <Playlists />