import React, { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const RelatedVideos = memo(() => {
  const { t } = useTranslation();
  const [RelatedVideos] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={t("form.related_videos")}
        list={RelatedVideos}
        className="streamit-block"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={t(data.movieTime)}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

RelatedVideos.displayName = "RelatedVideos";
export default RelatedVideos;
