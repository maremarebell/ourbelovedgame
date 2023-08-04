export async function fetchEpisodesData() {

  const episodeNumbers = [1, 2, 3, 4, 5, 6];

  try {
    const episodesData = await Promise.all(
      episodeNumbers.map(async (episodeNumber) => {
        const response = await fetch(`/data/data-20-epi-${episodeNumber}.json`);
        const data = await response.json();
        return data;
      })
    );
    return episodesData;
  } catch (error) {
    console.error('Error fetching episode data:', error);
    throw error;
  }
}
