import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './Country.module.css'
import { fetchCountries } from '../../api';
import { Spinner } from 'reactstrap';



const CountryPicker = ({ handleCountryChange }) => {
    const [ fetchedCountries, setfetchedCountries ] = useState([])

    useEffect(() => {

        const fetchAPI = async () => {
            setfetchedCountries(await fetchCountries())
        }
        
        fetchAPI()
    }, [setfetchedCountries])

    

    return (
        
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} > { country } </option>)}
            </NativeSelect>
            </FormControl>
        
        )
          
    
}

export default CountryPicker;