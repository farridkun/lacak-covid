import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Memuat Data...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Statistik angka Covid-19</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Positif"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Angka terdampak positif kasus COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Sembuh"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Angka sembuh sehat kasus COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Meninggal"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Angka meninggal dunia karena COVID-19."
        />
      </Grid>
    </div>
  );
};
export default Info;