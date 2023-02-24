export const baseUrl = "https://api.coingecko.com/api/v3"

// const globalAPI = "https://api.coingecko.com/api/v3/global"
export const currencies = {
    usd: 'usd',
    eur: 'eur',
    jpy: 'eur'
}
export const order = {
    gecko: 'gecko'
    , gecko_desc: 'gecko_desc'
    , gecko_asc: 'gecko_asc',
    market_cap_asc: 'market_cap_asc',
    market_cap_desc: 'market_cap_desc',
    volume_asc: 'volume_asc'
    , volume_desc: 'volume_desc',
    id_asc: 'id_asc',
    id_desc: 'id_desc'
}

export const coinMarketUrl = (currency, order, coin_per_page, page) => {
    return `${baseUrl}/coins/markets?vs_currency=${currency}&order=${order}&per_page=${coin_per_page}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
}
// export const globalUrl = () => {
//     return `${baseUrl}/global`
// } 

export const trendingCoinUrl = "https://api.coingecko.com/api/v3/search/trending"

export const globalUrl = "https://api.coingecko.com/api/v3/global"

export const detailCoinUrl = (idCoin) => {
    return `https://api.coingecko.com/api/v3/coins/${idCoin}?localization=false&sparkline=true`
}