// import { useEffect, useRef, useState } from 'react';

// function TradingViewWidget({ userPortfolioAssets , count}) {
//   const container = useRef();
//   const [widgetInitialized, setWidgetInitialized] = useState(false);
//   const symbols = userPortfolioAssets.map((asset) => [asset.name, `${asset.symbol}`]);

//   // console.log("symbols", symbols)
  
//   useEffect(() => {
//     if (!widgetInitialized) {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "symbols": [${symbols.map((symbol) => `["${symbol[0]}", "${symbol[1]}|1D"]`)}],
//           "chartOnly": false,
//           "width": "100%",
//           "height": "500",
//           "locale": "fr",
//           "colorTheme": "dark",
//           "autosize": true,
//           "showVolume": false,
//           "showMA": false,
//           "hideDateRanges": false,
//           "hideMarketStatus": false,
//           "hideSymbolLogo": false,
//           "scalePosition": "right",
//           "scaleMode": "Normal",
//           "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//           "fontSize": "10",
//           "noTimeScale": false,
//           "valuesTracking": "2",
//           "changeMode": "price-and-percent",
//           "chartType": "candlesticks",
//           "maLineColor": "#2962FF",
//           "fontColor":"rgba(255,255,255,1)",
//           "backgroundColor": "rgba(242, 54, 69, 0)",
//           "maLineWidth": 1,
//           "maLength": 9,
//           "lineWidth": 2,
//           "lineType": 0,
//           "dateRanges": [
//             "1d|5",
//             "1w|15",
//             "1m|30",
//             "3m|60",
//             "12m|1D",
//             "60m|1W",
//             "all|1M"
//           ],
//           "upColor": "rgba(34, 171, 148, 1)",
//           "downColor": "#f7525f",
//           "borderUpColor": "#22ab94",
//           "borderDownColor": "#f7525f",
//           "wickUpColor": "#22ab94",
//           "wickDownColor": "#f7525f"
//         }`;

//       container.current.appendChild(script);
//       setWidgetInitialized(true);
//     }
//   }, [widgetInitialized, symbols, count]);

//   return (
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//     </div>
//   );
// }

// export default TradingViewWidget;




import { useEffect, useRef, useState } from 'react';

function TradingViewWidget({ userPortfolioAssets , count}) {
  const container = useRef();
  const [widgetInitialized, setWidgetInitialized] = useState(false);
  const symbols = userPortfolioAssets.map((asset) => [asset.name, `${asset.symbol}`]);
  
  useEffect(() => {
    if (!widgetInitialized) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [${symbols.map((symbol) => `["${symbol[0]}", "${symbol[1]}|1D"]`)}],
          "chartOnly": false,
          "width": "100%",
          "height": "500",
          "locale": "fr",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "2",
          "changeMode": "price-and-percent",
          "chartType": "candlesticks",
          "maLineColor": "#2962FF",
          "fontColor":"rgba(255,255,255,1)",
          "backgroundColor": "rgba(242, 54, 69, 0)",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|5",
            "1w|15",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "upColor": "rgba(34, 171, 148, 1)",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f"
        }`;

      container.current.appendChild(script);
      setWidgetInitialized(true);
    }
  }, [widgetInitialized, symbols, count]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default TradingViewWidget;






