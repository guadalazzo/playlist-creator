import React, {useState, useEffect} from 'react';
import { UsePlaylists } from '../modules/playlist';
import { BaseUrl, AccessToken } from '../utils';
export const PlaylistApp = () => {
	const [ serverData, useServerData ] = useState({});
	const url = BaseUrl;
	
	useEffect(()=>{
		console.log('GET:',url);
		fetch(url, {headers:{ 'Authorization': 'Bearer ' + AccessToken}})
		.then(res => res.json()) 
		.then(data => useServerData(data))
		.catch(err=>console.log(err))
	},[])
	console.log(serverData);

	return (
		serverData.display_name ? (	
		<article>
			<h1>Playlist App</h1>
			<p>{serverData.display_name}</p><span>Followers: {serverData.followers.total}</span>
			<UsePlaylists />
		</article>  
		) : (<button onClick={()=> window.location = 'http://localhost:8888/login'}> Sign in</button>)
		
	);
}