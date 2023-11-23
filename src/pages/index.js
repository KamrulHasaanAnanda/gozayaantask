import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
export default function Home() {
  let getData = async()=>{
    let url = "/api/graph"
    let res = await axios.get(url)
    console.log('res', res)
  }

  useEffect(() => {
    getData();
  }, [])
  
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
          <div className="tabs">
            <p>1M</p>
            <p>6M</p>
            <p>1Y</p>
            <div className="all__time">
              <p>All Time</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
