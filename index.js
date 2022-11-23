const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { data } = require("cheerio/lib/api/attributes");

const app = express();

const PORT = 5000;
app.listen(PORT, () => console.log(`server running on port ${3000}`));

const url = "https://coinmarketcap.com";
axios(url).then((response) => {
  const html_data = response.data;
  const $ = cheerio.load(html_data);
});

const selectedElem =
  "#__next > div.sc-c5c9d167-1.iZIMUr > div.main-content > div.sc-1a736df3-0.PimrZ.cmc-body-wrapper > div > div:nth-child(1) > div.sc-f7a61dda-2.efhsPu > table > tbody > tr:nth-child(1)";
