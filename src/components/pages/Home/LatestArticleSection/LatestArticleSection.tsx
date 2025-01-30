import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { LatestBookCart } from "@components/index";
import IMAGES from "@assets/images/images";
import "./LatestArticleSection.scss";

const LatestArticleSection = () => {
  const { t } = useTranslation();

  return (
    <section id="latest_section" className="container_bx">
      <div className="section_title">
        <div className="sub_title">{t("latest_section_sub_title")}</div>
        <div className="title">
          <span className="text">{t("latest_section_title")}</span>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <LatestBookCart
            article_img={IMAGES.latest_book_1}
            article_date={"2 aug, 2021"}
            article_name={t('article_desc')}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <LatestBookCart
            article_img={IMAGES.latest_book_2}
            article_date={"2 aug, 2021"}
            article_name={t('article_desc')}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <LatestBookCart
            article_img={IMAGES.latest_book_3}
            article_date={"2 aug, 2021"}
            article_name={t('article_desc')}
          />
        </Grid>
      </Grid>

      <div className="more_btn">
        <Link to="/home">
          {t('read_all_articles')} <img src={IMAGES.rightArrow} alt="pic" />
        </Link>
      </div>
    </section>
  );
};

export default LatestArticleSection;
