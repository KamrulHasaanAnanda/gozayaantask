import Tabs from "@/components/Tabs";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setdata] = useState()
  const [tabNow, setTabNow] = useState("ALL TIME")
  let getData = async () => {
    let url = "/api/graph";
    let res = await axios.get(url);
    console.log("res", res);
    if(res.status === 200){
      setdata(res.data)
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
          <Tabs data={data} setTabNow={setTabNow} tabNow={tabNow}/>
          <div className="donut">
          <div class="hole">
            {
              
            }
          </div>
          </div>
        </div>
      </main>
    </>
  );
}
