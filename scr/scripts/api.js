export async function albumAPI(){
    async function getAlbum() {
        const albunsPrimitive = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
        const albunsJs = await albunsPrimitive.json();
        return albunsJs; 
    }
    return getAlbum();
}