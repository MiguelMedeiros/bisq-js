# **Bisq Network JS - API**

[![npm version](https://img.shields.io/npm/v/bisq-js.svg?style=flat-square)](https://www.npmjs.org/package/bisq-js)
[![NPM](https://img.shields.io/david/MiguelMedeiros/bisq-js.svg?style=flat-square)](https://david-dm.org/MiguelMedeiros/bisq-js#info=dependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/MiguelMedeiros/bisq-js/badge.svg?style=flat-square)](https://snyk.io/test/github/MiguelMedeiros/bisq-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

Easy way to add Bisq Network API to your JS application.

---

## **Donate**

Help me to stack sats! :blush:

[bc1qn6d6g8ln5zppnh0k70sgmr745td7j2xsgw7elm](bitcoin:bc1qn6d6g8ln5zppnh0k70sgmr745td7j2xsgw7elm)

[Or donate via Lightning Network!](https://paywall.link/to/bisq)

---

## **Features**

- [Instalation](#installation)
- [Usage](#usage)

  - [Get Currencies](#get-currencies)
  - [Get Depth](#get-depth)
  - [Get Hloc](#get-hloc)
  - [Get Markets](#get-markets)
  - [Get Offers](#get-offers)
  - [Get Ticker](#get-ticker)
  - [Get Trades](#get-trades)
  - [Get Volumes](#get-volumes)

- [References](#references)
- [Donate](#donate)
- [Contribute](#contribute)
- [License](#license)

---

## **Installation**

Using **npm**:

```bash
$ npm install bisq-js
```

Using **yarn**:

```bash
$ yarn add bisq-js
```

---

## **Usage**

### **Get Currencies**

Provides list of available currencies for a given base currency.

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const currencies = await bisq.getCurrencies();
console.log(currencies);
```

<br/>

### **Get Depth**

Provides list of open offer prices for a single market.

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const depth = await bisq.getDepth();
console.log(depth);
```

<br/>

### **Get HLOC**

Provides hi/low/open/close data for a given market. This can be used to generate a candlestick chart.

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const hloc = await bisq.getHloc({ market: 'xmr_btc' });
console.log(hloc);
```

<br/>

### **Get Markets**

Provides list of available markets.

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const markets = await bisq.getMarkets();
console.log(markets);
```

<br/>

### **Get Offers**

Provides list of open offer details for a single market.

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const offers = await bisq.getOffers({ market: 'xmr_btc' });
console.log(offers);
```

<br/>

### **Get Ticker**

Provides 24 hour price ticker for single market or all markets

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const ticker = await bisq.getTicker();
console.log(ticker);
```

<br/>

### **Get Trades**

Provides 24 hour price ticker for single market or all markets

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const trades = await bisq.getTrades({ market: 'xmr_btc' });
console.log(trades);
```

<br/>

### **Get Volumes**

Provides periodic volume data in terms of base currency for one or all markets.

[ [Example](examples/index.ts) ] [ [Top](#donate) ]

```js
import bisq from 'bisq-js';

const volumes = await bisq.getVolumes();
console.log(volumes);
```

---

## **References**

- Website: [https://bisq.network](https://bisq.network)
- API Documentation: [https://bisq.markets/api/](https://bisq.markets/api/)

---

## **Contributing**

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## **License [MIT](https://choosealicense.com/licenses/mit/)**
