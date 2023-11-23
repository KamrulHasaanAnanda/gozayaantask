import React from "react";

function Tabs({ data, setTabNow, tabNow, setTototalExpense,setGraphData }) {
  let tabs = "";
  if (data?.length > 0) {
    tabs = data?.map((tab,index) => (
      <div
        className={tab.period === tabNow ? "all__time":""}
        key={index}
        onClick={() => {
          setTototalExpense(tab.totalCost);
          setTabNow(tab.period);
          setGraphData(tab)
        }}
      >
        <p>{tab.period}</p>
      </div>
    ));
  }

  return <div className="tabs">{tabs}</div>;
}

export default Tabs;
