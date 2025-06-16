import api from '../api';

const getDislikeSong = async () => {
  try {
    const response = await api.get('/songs/dislike');
    const { songList } = response.data.result;

    const badSongList = songList.map((song) => song.id);

    sessionStorage.setItem('badSongList', JSON.stringify(badSongList));

    return songList;
  } catch (error) {
    console.error('싫어요한 곡 불러오기 실패:', error);
    throw error;
  }
};

export default getDislikeSong;
