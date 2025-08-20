import { useState } from "react"
import Header from "./components/Header"
import Explore from "./components/Explore"
import NewRelease from "./components/NewRelease"
import { dataMovie } from "./assets/assets"
import Card from "./components/Card"

function App() {
  // State lưu trữ phim được chọn, mặc định là phim đầu tiên
  const [selectedMovie, setSelectedMovie] = useState(dataMovie[0]);

  // Hàm xử lý khi click vào card
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <Header />
      <Explore selectedMovie={selectedMovie} />
      <NewRelease />
      <div className="flex justify-between items-center flex-wrap gap-4">
        {
          dataMovie.slice(1).map((movie,index) => {
            return (
              <Card 
                key={index} 
                movieName={movie.movieName} 
                img={movie.image} 
                episode={movie.episode}
                onClick={() => handleMovieClick(movie)}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App
