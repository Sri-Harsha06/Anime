export const Card2 = ({ anime }) => {
  return (
    <div className="anime-card">
      <div className="overlay"></div>
      <img src={anime.images.jpg.image_url} alt={`${anime.title} Poster`} />
      <h3>{anime.title}</h3>
    </div>
  );
};
