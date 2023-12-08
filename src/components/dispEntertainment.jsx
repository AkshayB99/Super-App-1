import React, { useEffect, useState } from "react";
import axios from "axios";
import dispM from './dispEntertainment.module.css'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function DispEntertainment({ data }) {
  const [newData, setNewData] = useState();

  const getData = async () => {
    try {
      const capitalizedData = capitalizeFirstLetter(data);
      const response = await axios.get(
        "https://moviesdatabase.p.rapidapi.com/titles",
        {
          params: { genre: capitalizedData, year: "2022" },
          headers: {
            "X-RapidAPI-Key":
              "2abd9d2559msh344a8bac05458ffp18a9ddjsn3a7d5e0c790b",
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          },
        }
      );
      setNewData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]); // Run the effect when 'data' prop changes

  return (
    <div className={dispM.fill}>
      {newData?.results && (
        <div className={dispM.movie}>
          {newData.results.slice(0, 9).map((entry) => (
            <div key={entry._id}>
              <img
                src={entry?.primaryImage?.url}
                alt={entry?.titleText?.text}
                style={{ width: "100px", height: "150px" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DispEntertainment;
