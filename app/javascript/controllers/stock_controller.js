import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "status" ]

  connect() {

    let symbolElements = document.querySelectorAll("#stockData");
    // console.log(symbolElements);
    symbolElements.forEach((symbolElement) => {
      // console.log(symbolElement);
      let symbol = symbolElement.textContent; // Access the text content of each element
      const apiKey = window.API_KEY;
      // console.log(apiKey);

      let apiUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
      // console.log(apiUrl);
      fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
          // console.log(data);
          let price = data.c;
          // there is a bug in line 22, it keeps adding the price to the end of the symbol every time you click on the stock and go back to the previous page
          symbolElement.insertAdjacentText("beforeend", ` - $${price}`);
        });

      });


      // Market Status, should be in a different method
        const apiKey = window.API_KEY;
        let marketStatusElement = document.querySelector("#marketStatus");
        let apiUrlStatus = `https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKey}`;
        fetch(apiUrlStatus)
          .then(response => response.json())
          .then((data) => {
            let marketStatus = data.isOpen;
            if (marketStatus) {
              marketStatusElement.insertAdjacentText("beforeend", `Market is open`);
            } else {
              marketStatusElement.insertAdjacentText("beforeend", `Market is closed`);
            };
          });

  };
};
