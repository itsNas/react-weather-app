import React from "react";
import InfoSide from "./InfoSide";

function Forecast({ data, loading, error }) {
  return (
    <div className="forecast">
      <InfoSide data={data} loading={loading} error={error} />
    </div>
  );
}

export default Forecast;
