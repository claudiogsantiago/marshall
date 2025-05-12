import React, { useEffect, useState, Fragment } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { slug } = useParams();
  const [tvShow, setTvShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://api.cloudsantiago.com/tvshows/${slug}`);
        setTvShow(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    };

    fetchShow();
  }, [slug]);

  if (!tvShow) {
    return <div className="text-white text-center mt-5">Carregando...</div>;
  }

  return (
    <Fragment>
      <div className="tv-show-detail">
        <Container fluid>
          <div className="banner-caption mt-5 text-white">
            <h1 className="mb-3">{tvShow.title}</h1>
            <p>{tvShow.description}</p>
            <p><strong>Gêneros:</strong> {tvShow.genres?.join(", ")}</p>
            <p><strong>Lançamento:</strong> {tvShow.release_date}</p>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default DetailPage;