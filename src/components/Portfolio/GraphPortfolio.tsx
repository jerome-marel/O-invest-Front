import { useEffect, useRef, useState } from 'react';

function TradingViewWidget({ userPortfolioAssets }) {
  const container = useRef();
  const [widgetInitialized, setWidgetInitialized] = useState(false);
  const symbols = userPortfolioAssets.map((asset) => [asset.name, `${asset.symbol}|1D`]);

  useEffect(() => {
    if (!widgetInitialized) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [${symbols.map((symbol) => `["${symbol[0]}", "${symbol[1]}"]`).join(',\n')}],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "fr",
          "colorTheme": "light",
          "autosize": false,
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
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1w|15",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
      setWidgetInitialized(true);
    }
  }, [widgetInitialized, symbols]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default TradingViewWidget;
