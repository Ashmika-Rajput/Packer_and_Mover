import React, { useEffect, useState } from "react";
import axios from "axios";
import { _apiurlcategory } from "../../shared/ApiConstants";
import './SearchAds.css'

export default function SearchAds() {
  const [categoryList, showCategoryList] = useState([]);

  useEffect(() => {
    axios.get(_apiurlcategory + "fetch").then((response) => {
      showCategoryList(response.data);
    });
  });
  return (
    <div className="container-fluid py-5">
      <h2> Search Porter category Ads here!!!!</h2>
      <center>
        <div id="catmain">
          {categoryList.map((row) => (
            <div class="catpart">
              <img
                src={"assets/uploads/caticons/" + row.caticonnm}
                height="100"
                width="150"
              />
              <br />
              <b>{row.catnm}</b>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}
