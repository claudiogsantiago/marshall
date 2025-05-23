import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const RecommendedTVShow = memo(() => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("form.recommended_tv_show")}
        list={recommendedforYou}
        className="recommended-block streamit-block"
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

RecommendedTVShow.DisplayName = RecommendedTVShow;
export default RecommendedTVShow;
