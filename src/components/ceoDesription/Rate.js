import React from 'react'

import {
  Box,
  Typography,
  CardMedia,
  Rating
} from '@mui/material';

import capterra from '../../img/rate/capterra.png';
import clutch from '../../img/rate/capterra.png';
import getapp from '../../img/rate/getapp.png';
import trustpilot from '../../img/rate/trustpilot.png';
import zigzag from '../../img/rate/zigzag.png';

const rates = [
  {
    image: capterra,
    star: 4.5
  },
  {
    image: trustpilot,
    star: 4.5
  },
  {
    image: getapp,
    star: 4.5
  },
  {
    image: clutch,
    star: 4.5
  },
]

const rateStyle = {
  container: {
    marginTop: '150px',
    position: 'relative'
  },
  box: {
    width: "1176px",
    margin: "0 auto",
    padding: "50px 10px 50px 70px",
    backgroundColor: "#181818",
    border: "2px dashed #333",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: "1",
    position: "relative",
  },
  leftText: {
    fontSize: "20px",
    color: "white",
    fontFamily: "'Arimo', sans-serif",
  },
  boxContain: {
    backgroundColor: "#181818",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    "& > :not(:last-child)": {
      borderRight: "1px solid #535353",
    },
  },
  card: {
    backgroundColor: "#181818",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  }
}

const Rate = () => {

  return (
    <Box sx={rateStyle.container}>
      <Box sx={rateStyle.box}>
        <Typography sx={rateStyle.leftText}>
          4.8 out of 5 star based<br></br>
          on 1200 reviews
        </Typography>

        <Box sx={rateStyle.boxContain}>
          {
            rates.map((item, index) => (
              <Box
                sx={rateStyle.card}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{
                    objectFit: "none",
                    width: "auto",
                  }}
                />
                <Rating
                  value={item.star}
                  readOnly
                  size="small"
                  sx={{
                    paddingTop: '14px'
                  }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "'Arimo', sans-serif",
                    marginTop: "6px",
                  }}
                >
                  {item.star}/5
                </Typography>
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: '0',
          zIndex: '0',
          bottom: '0'
        }}
      >
        <img src={zigzag} alt="" />
      </Box>
    </Box>
  )
}

export default Rate