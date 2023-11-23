import Colors from "@/components/Colors";
import Tabs from "@/components/Tabs";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState();
  const [tabNow, setTabNow] = useState("ALL TIME");
  const [totalExpense, setTototalExpense] = useState(0);
  const [graphData, setGraphData] = useState();

  let percentage = (value, total) => {
    console.log(
      "((value / total) * 100).toFixed(2)",
      ((value / total) * 100).toFixed(2)
    );
    return ((value / total) * 100).toFixed(2);
  };
  console.log("graphData", graphData);
  let getData = async () => {
    let url = "/api/graph";
    let res = await axios.get(url);
    // console.log("res", res);
    if (res.status === 200) {
      setdata(res.data);
      res?.data?.map((data) => {
        // console.log('data', data)
        if (data?.period === tabNow) {
          setTototalExpense(data?.totalCost);
          setGraphData(data);
        }
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Expense Tracker go zayaan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main__class">
        <h4>Expense Chart</h4>
        <div className="graph__div">
          <h5>Expenses</h5>
          <Tabs
            data={data}
            setTabNow={setTabNow}
            tabNow={tabNow}
            setTototalExpense={setTototalExpense}
            setGraphData={setGraphData}
          />
          <div className="donut">
            <div className="hole">
              <h2>
                ${totalExpense}.<span>00</span>
              </h2>
              {}
            </div>
          </div>

          <Colors />
        </div>
      </main>
    </>
  );
}
