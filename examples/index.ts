import bisq from '../src/index';

const init = async () => {
  const currencies = await bisq.getCurrencies();
  console.log(currencies);

  const depth = await bisq.getDepth({ market: 'xmr_btc' });
  console.log(depth);

  const hloc = await bisq.getHloc({ market: 'xmr_btc' });
  console.log(hloc);

  const markets = await bisq.getMarkets();
  console.log(markets);

  const offers = await bisq.getOffers({ market: 'xmr_btc' });
  console.log(offers);

  const ticker = await bisq.getTicker();
  console.log(ticker);

  const trades = await bisq.getTrades({ market: 'xmr_btc' });
  console.log(trades);

  const volumes = await bisq.getVolumes();
  console.log(volumes);
};
init();
