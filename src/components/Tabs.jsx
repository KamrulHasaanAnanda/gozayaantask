import React from "react";

function Tabs({ data, setTabNow, tabNow, setTototalExpense }) {
  let tabs = "";
  if (data?.length > 0) {
    tabs = data?.map((tab) => (
      <div
        className={tab.period === tabNow && "all__time"}
        onClick={() => {
          setTototalExpense(tab.totalCost);
          setTabNow(tab.period);
        }}
      >
        <p>{tab.period}</p>
      </div>
    ));
  }

  return <div className="tabs">{tabs}</div>;
}

export default Tabs;
