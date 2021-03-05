const Alpaca = require ('@alpacahq/alpaca-trade-api');

const alpaca_info = new Alpaca({
    keyId: 'AK4YWAKGN9RVQJL13O7U',
    secretKey: 'tWdd6ZQkjLhRfuurO77v8eKNEa58lAiTHweb6jp3Jz',
    paper: true,
    usePolygon: false
})

export default alpaca_info