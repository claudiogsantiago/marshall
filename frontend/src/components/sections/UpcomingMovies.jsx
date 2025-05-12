import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//data
import { upcommingMovie } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const UpcomingMovies = memo(() => {
  const { t } = useTranslation();
  const [upcommingMovie2] = useState(upcommingMovie);

  return (
    <Fragment>
      <SectionSlider
        title={t("home.upcoming_movies")}
        list={upcommingMovie}
        className="upcomimg-block streamit-block"
        slidesPerView="6"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

upcommingMovie.DisplayName = upcommingMovie;
export default UpcomingMovies;
