import { IconButton, styled } from '@mui/material';
import React, { ReactNode } from 'react';
import Slider from 'react-slick';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

// Кастомная стрелка
interface CustomArrowProps {
  onClick?: () => void; // Типизация для onClick
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <IconButton
      sx={{ position: 'absolute', left: '-25px', top: '50%' }}
      className='next-arrow'
      onClick={onClick}
    >
      <ArrowCircleLeftRoundedIcon color='primary' />
    </IconButton>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <IconButton
      sx={{ position: 'absolute', right: '-25px', top: '50%' }}
      className='next-arrow'
      onClick={onClick}
    >
      <ArrowCircleRightRoundedIcon color='primary' />
    </IconButton>
  );
};

type SliderProps = {
  children?: ReactNode;
};
export const ProductsSliderContainer = ({ children }: SliderProps) => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4, // Количество видимых слайдов
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export const SliderContainer = styled(ProductsSliderContainer)(() => ({}));
