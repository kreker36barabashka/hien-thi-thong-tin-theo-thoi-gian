import React, { useEffect, useState } from 'react';

function ExchangeRates() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((response) => response.json())
      .then((data) => setRates(data.rates));
  }, []);

  return (
    <div>
      <h2>Tỉ Giá Ngoại Tệ</h2>
      {rates ? <p>{JSON.stringify(rates)}</p> : <p>Đang tải...</p>}
    </div>
  );
}

export default ExchangeRates;