import react from 'react'

import React, { Component } from 'react';

import {Cards,Charts,CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api';
import corona from './images/covidImg.png'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper, Switch } from '@material-ui/core';



class App extends Component {
    
    state = {
        data: [],
        country: '',
        darkMode: false,
        setDarkMode:false
    }


    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    
    }
    
    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country)
        this.setState({
            data: fetchedData,
            country: country
        })
    }

    setDarkMode(darkMode) {
        console.log(darkMode)
        if (darkMode) {
            return this.setState({
                darkMode: true
            })
        }
        else {
            return this.setState({
                darkMode: false
            })
        }
    }
     
    render() {
        const { data, country, darkMode,setDarkMode } = this.state

        const theme = createMuiTheme({
            palette: {
                type: darkMode ? 'dark' : 'light'
            }
        })

        return (
            <ThemeProvider theme={theme}>
                <Paper>
                    
                    <div className={styles.container}>
                        Apply DarkMode<Switch checked={darkMode} onChange={() => this.setDarkMode(!darkMode)} />
                <img className={styles.images} src={corona} alt="covid img"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                        <Charts data={data} country={country} color="blue"/>
                    </div>
                </Paper>
            </ThemeProvider>
        );
    }
 }

export default App;