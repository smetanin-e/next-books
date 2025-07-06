import { ImageContainer, StyledImage } from '@/styles';
import React from 'react';

type ImageContainerProps = {
  src: string;
  heigth: number;
};

export const ProductImage = ({ src, heigth }: ImageContainerProps) => {
  return (
    <ImageContainer width={'100%'}>
      <StyledImage height={heigth} src={src} alt='image' />
    </ImageContainer>
  );
};
