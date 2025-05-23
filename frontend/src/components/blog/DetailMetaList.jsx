import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//components
import RecentPost from "./sidebar/RecentPost";
import CategoriesWidget from "./sidebar/CategoriesWidget";
import TagsWidget from "./sidebar/TagsWidget";
import FollowUs from "./sidebar/FollowUs";

// the hook
import { useTranslation } from "react-i18next";

const DetailMetaList = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="widget-area">
        <div id="search-2" className="widget widget_search">
          <form
            method="get"
            className="search-form"
            action="#"
            autoComplete="off"
          >
            <div className="block-search_inside-wrapper position-relative d-flex">
              <input
                type="search"
                className="form-control"
                placeholder={t('blogs.search')}
                name="s"
                defaultValue=""
              />
              <button type="submit" className="block-search_button">
                <i aria-hidden="true" className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <RecentPost />
        <CategoriesWidget />
        <TagsWidget />
        <FollowUs />
        <div className="widget text-center">
          <Link to="/shop">
            <img src="/assets/images/blog/01.webp" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
});

DetailMetaList.displayName = "DetailMetaList";
export default DetailMetaList;
