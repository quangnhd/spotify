import axios from 'axios';
import React, {useEffect} from 'react'
import {useStateProvider} from '../utils/StateProvider'

function Playlist() {
  const [{token, dispatch}] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get()
    };
  },[token,dispatch]);
  return (
    <div>Playlist</div>
  )
}

export default Playlist