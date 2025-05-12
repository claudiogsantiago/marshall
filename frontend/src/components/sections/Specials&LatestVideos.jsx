import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const SpecialsLatestVideos = memo(() => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("form.specials_latest_videos")}
        list={latestMovie}
        className="latest-block streamit-block"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

SpecialsLatestVideos.displayName = "SpecialsLatestVideos";
export default SpecialsLatestVideos;
