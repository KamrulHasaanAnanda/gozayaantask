import axios from "axios";

let data = [
  {
    period: "1M",
    personal: 150,
    shopping: 90,
    phone: 60,
    other: 80,
  },
  {
    period: "6M",
    personal: 320,
    shopping: 240,
    phone: 255,
    other: 298,
  },
  {
    period: "1Y",
    personal: 950,
    shopping: 930,
    phone: 738,
    other: 490,
  },
  {
    period: "ALL TIME",
    personal: 1800,
    shopping: 1420,
    phone: 1265,
    other: 1000,
  },
];
export default async function handler(req, res) {
  try {
    // const response = await fetch("./data.json");
    // // const data = response.data;
    // console.log("response", response);
    data.forEach((item) => {
      item.totalCost = item.personal + item.shopping + item.phone + item.other;
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
