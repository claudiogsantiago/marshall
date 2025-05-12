import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const MoviesRecommendedForYou = memo(() => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("form.movies_recommended")}
        list={recommendedforYou}
        className="recommended-block"
        slidesPerView={6}
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

MoviesRecommendedForYou.displayName = "MoviesRecommendedForYou";
export default MoviesRecommendedForYou;
