# 💱 Currency Converter

A simple and responsive currency converter web application built with `React.js` and `Tailwind CSS`. Convert between different currencies with `real-time` exchange rates

## ✨Key Features:

The application is fully responsive and adapts to different screen sizes using `Tailwind CSS` utility classes.

### State Management:

Uses React's `useState()` hook to manage component state including:

- **Real-time Exchange Rates** - Fetches live currency data from a free API
- **Multiple Currency Pairs** - Convert between any available currency pairs
- **Default USD to BDT** - Pre-configured with USD to BDT conversion
- **Responsive UI** - Works seamlessly on mobile, tablet, and desktop devices
- **🚀 Live Demo** - [Click Here](https://currency-converter-react-js-project.vercel.app/)

<img src='public\currency-converter.gif' />

## 🛠️ Built With:

<table>
    <tr>
        <th>Technology</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>React Js</td>
        <td>JavaScript library for building user interfaces</td>
    </tr>
    <tr>
        <td>Tailwind CSS</td>
        <td>Utility-first CSS framework</td>
    </tr>
    <tr>
        <td>Exchange Rate API</td>
        <td>Free currency exchange rate API</td>
    </tr>
</table>

## 📡 API Reference

This project uses the `ExchangeRate-API` to fetch real-time currency exchange rates.

## Api Url

```
https://open.er-api.com/v6/latest/USD
```

## Sample Response:

```json
{
  "result": "success",
  "provider": "https://www.exchangerate-api.com",
  "base_code": "USD",
  "rates": {
    "USD": 1,
    "BDT": 122.561294,
    "EUR": 0.867182,
    "GBP": 0.764575,
    "JPY": 157.404535
    // ... more currency pairs
  }
}
```

## 📂 Project Structure

```
currency-converter/
├── public/
├── src/
│   ├── components/
│   │   ├── CurrencyConvert.jsx
│   │   └── SelectCurrency.jsx
│   ├── App.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

# ⭐ Show Your Support

**Give a ⭐️ if you like this project!**
