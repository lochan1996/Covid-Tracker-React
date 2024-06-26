import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = ({ data: { confirmed, deaths, recovered, countries, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={confirmed.value}
                                    duration={2.5}
                                    separator=','
                                    />
                            </Typography>
                            <Typography color="textPrimary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" >No of active cases</Typography>

                        </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={recovered.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography color="textPrimary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" >No of Recovered cases</Typography>

                        </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={deaths.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography color="textPrimary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" >No of Deaths cases</Typography>

                        </CardContent>
                </Grid>
                </Grid>
            </div>
        );
    }


export default Cards;