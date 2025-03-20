export async function fetchAlbums() {
    try {
        const response = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar álbuns:", error);
        return [];
    }
}
