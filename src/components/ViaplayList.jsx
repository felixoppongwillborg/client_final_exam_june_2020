import React, { useEffect, useState } from "react";
import axios from "axios";

const ViaplayList = () => {
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    getTvSeries();
  }, []);

  const getTvSeries = async () => {
    debugger
    let response = await axios.get(
      "https://content.viaplay.se/pc-se/serier/samtliga"
    );
    setTvSeries(
      response.data._embedded["viaplay:blocks"][0]._embedded[
        "viaplay:products"
      ]
    );
  };

  let content = tvSeries.map((series) => (
    <img className="display-show" data-cy="image" src={`${series.content.images.landscape.url}`} alt=""></img>
  ));
  return <div className="container">{content}</div>;
};

export default ViaplayList;
