import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bisq.markets/api',
});

interface Currencies {
  [key: string]: {
    code: string;
    name: string;
    precision: number;
    _type: string;
  };
}

const getCurrencies = async (
  params: {
    basecurrency?: string;
    type?: string;
    format?: string;
  } = {
    basecurrency: 'BTC',
    type: 'all',
    format: 'jsonpretty',
  }
): Promise<Currencies> => {
  return await api
    .get('/currencies', { params })
    .then((res: { data: Currencies }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

interface Depth {
  [key: string]: {
    buys: string[];
    sells: string[];
  };
}

const getDepth = async (
  params: {
    market: string;
    format?: string;
  } = {
    market: 'xmr_btc',
    format: 'jsonpretty',
  }
): Promise<Depth> => {
  return await api
    .get('/depth', { params })
    .then((res: { data: Depth }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

interface Hloc {
  period_start: number;
  open: string;
  close: string;
  high: string;
  low: string;
  avg: string;
  volume_right: string;
  volume_left: string;
}

const getHloc = async (params: {
  market: string;
  interval?: string;
  timestamp_from?: string;
  timestamp_to?: string;
  format?: string;
}): Promise<Hloc[]> => {
  return await api
    .get('/hloc', { params })
    .then((res: { data: Hloc[] }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

interface Markets {
  [key: string]: {
    pair: string;
    lname: string;
    rname: string;
    lsymbol: string;
    rsymbol: string;
    lprecision: number;
    rprecision: number;
    ltype: string;
    rtype: string;
    name: string;
  };
}

const getMarkets = async (
  params: {
    format?: string;
  } = {
    format: 'jsonpretty',
  }
): Promise<Markets> => {
  return await api
    .get('/markets', { params })
    .then((res: { data: Markets }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

interface Offers {
  [key: string]: {
    buys: {
      offer_id: string;
      offer_date: number;
      direction: string;
      min_amount: string;
      amount: string;
      price: string;
      volume: string;
      payment_method: string;
      offer_fee_txid: string;
    }[];
    sells: {
      offer_id: string;
      offer_date: number;
      direction: string;
      min_amount: string;
      amount: string;
      price: string;
      volume: string;
      payment_method: string;
      offer_fee_txid: string;
    }[];
  };
}

const getOffers = async (
  params: {
    market: string;
    direction?: string;
    format?: string;
  } = {
    market: 'xmr_btc',
    format: 'jsonpretty',
  }
): Promise<Offers> => {
  return await api
    .get('/offers', { params })
    .then((res: { data: Offers }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

interface Ticker {
  [key: string]: {
    last: string;
    high: string;
    low: string;
    volume_left: number;
    volume_right: number;
    buy: string;
    sell: string;
  };
}

const getTicker = async (
  params: {
    market?: string;
    format?: string;
  } = {
    format: 'jsonpretty',
  }
): Promise<Ticker> => {
  return await api
    .get('/ticker', { params })
    .then((res: { data: Ticker }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

interface Trades {
  price: string;
  amount: string;
  volume: string;
  payment_method: string;
  trade_date: number;
  market: string;
}

const getTrades = async (
  params: {
    market: string;
    format?: string;
    timestamp_from?: string;
    timestamp_to?: string;
    trade_id_from?: string;
    trade_id_to?: string;
    limit?: number;
    sort?: string;
  } = {
    market: 'all',
    format: 'jsonpretty',
    timestamp_from: '2016-01-01',
    timestamp_to: 'now',
    limit: 100,
    sort: 'desc',
  }
): Promise<Trades[]> => {
  return await api
    .get('/trades', { params })
    .then((res: { data: Trades[] }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

interface Volumes {
  price: string;
  amount: string;
  volume: string;
  payment_method: string;
  trade_date: number;
}

const getVolumes = async (
  params: {
    basecurrency: string;
    market: string;
    interval?: string;
    timestamp_from?: string;
    timestamp_to?: string;
    format?: string;
  } = {
    basecurrency: '',
    market: '',
    interval: 'auto',
    timestamp_from: '2016-01-01',
    timestamp_to: 'now',
    format: 'jsonpretty',
  }
): Promise<Volumes[]> => {
  return await api
    .get('/trades', { params })
    .then((res: { data: Volumes[] }) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// const init = async () => {
//   const t = await getVolumes();
// };
// init();

export default {
  getCurrencies,
  getDepth,
  getHloc,
  getMarkets,
  getOffers,
  getTicker,
  getTrades,
  getVolumes,
};
