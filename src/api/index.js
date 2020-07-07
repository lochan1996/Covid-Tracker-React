import Axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changableUrl = url;
    if (country) {
        changableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, deaths, recovered, countries, lastUpdate } } = await Axios.get(changableUrl);
        
        return { confirmed, deaths, recovered, countries, lastUpdate }

        
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await Axios.get(`${url}/daily`)
       
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total,
            date: dailyData.reportDate,
        }))

        
        return modifiedData
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await Axios.get(`${url}/countries`)

        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}