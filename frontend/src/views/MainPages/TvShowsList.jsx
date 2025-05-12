import { Fragment, memo, useEffect, useState } from "react";
import axios from "axios";

//componentes
import SectionSlider from "../../components/slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

const TvShowsList = memo(() => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.cloudsantiago.com/tvshows")
      .then((res) => setShows(res.data))
      .catch((err) => console.error("Erro ao carregar TV Shows", err));
  }, []);

  return (
    <Fragment>
      <SectionSlider
        title="Catálogo de Séries"
        list={shows}
        className="recommended-block section-top-spacing"
      >
        {(show) => (
          <CardStyle
            image={show.thumbnail}
            title={show.title}
            movieTime="2hr"
            watchListLink="/playlist"
            link={`/tv-shows/${show.slug}`}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TvShowsList.displayName = "TvShowsList";
export default TvShowsList;