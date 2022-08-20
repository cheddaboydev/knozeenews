import React, { useState } from 'react';
import { SliderData } from './data'
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';



const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  };



  return (
    
    <Box >
            {SliderData.map((slide, index) => (
                <Paper key={index}>
                            <Box
                                className={index === current ? 'slide active' : 'slide'}
                                sx={{ display: 'flex', flex: 1, justifyContent: 'center', overflow: 'hidden', borderRadius: 1}}
                            >
                                {index === current && (
                                    <Box sx={{display: 'flex', flex: 1, justifyContent: 'center', height: 300}}>
                                        <Image src={slide.image} objectFit="cover" alt="news" layout="fill" />
                                    </Box>
                                )}
                            </Box>
                </Paper>
            ))}
                <ArrowLeft sx={{width: 50, height: 50 }} onClick={prevSlide} />
                <ArrowRight sx={{width: 50, height: 50 }} onClick={nextSlide} />                     
        </Box>
  );
};

export default ImageSlider;