import { useState, useEffect, Fragment, memo } from "react";
import axios from "axios";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

const TVPopularShows = memo(() => {
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.cloudsantiago.com/tvshows")
      .then((res) => setPopularShows(res.data))
      .catch((err) => console.error("Erro ao buscar TV Shows", err));
  }, []);

  return (
    <Fragment>
      <SectionSlider
        title="Séries Populares"
        list={popularShows}
        className="recommended-block section-top-spacing"
      >
        {(data) => (
          <CardStyle
            image={data.thumbnail}
            title={data.title}
            movieTime="2h"
            watchListLink="/playlist"
            link={`/tv-shows/${data.slug}`}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TVPopularShows.displayName = "TVPopularShows";
export default TVPopularShows;