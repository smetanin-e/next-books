import { ImageContainer, StyledImage } from '@/styles';
import React from 'react';

type ImageContainerProps = {
  src: string;
  heigth: number;
  maxWidth: number;
};

export const ProductImage = ({ maxWidth, src, heigth }: ImageContainerProps) => {
  return (
    <ImageContainer maxWidth={maxWidth}>
      <StyledImage height={heigth} src={src} alt='image' />
    </ImageContainer>
  );
};
