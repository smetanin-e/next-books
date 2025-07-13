import { HoveredStack, ImageContainer, StyledImage, StyledLink } from '@/styles';
import { Box, CircularProgress, Divider, Grow, Paper, Typography } from '@mui/material';
import { Book } from '@prisma/client';

import React from 'react';

interface Props {
  className?: string;
  value: string;
  products: Book[];
  cleareInput: () => void;
  loading: boolean;
}

export const SearchResult: React.FC<Props> = ({ value, products, cleareInput, loading }) => {
  return (
    <Box zIndex={1} position={'absolute'} top={'100%'} left={0} width={'100%'}>
      {value && (
        <Paper elevation={2} sx={{ mt: 1 }}>
          {loading ? (
            <Box pt={1} pb={1} width={'100%'} sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color='primary' />
            </Box>
          ) : products.length > 0 ? (
            products.map((obj) => (
              <StyledLink key={obj.id} href={`/products/book/${obj.id}`} onClick={cleareInput}>
                <Grow
                  in={!!value}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(!!value ? { timeout: 1000 } : {})}
                >
                  <Box>
                    <HoveredStack paddingInline={1} direction={'row'} spacing={2} paddingBlock={1}>
                      <ImageContainer>
                        <StyledImage height={'70px'} src={obj.imageUrl} />
                      </ImageContainer>
                      <Box>
                        <Typography variant='body1' component={'h2'}>
                          {obj.title}
                        </Typography>
                        <Typography variant='body2'>
                          {obj.description.slice(0, 80) + '...'}
                        </Typography>
                      </Box>
                    </HoveredStack>
                    <Divider />
                  </Box>
                </Grow>
              </StyledLink>
            ))
          ) : (
            <Typography p={1}>Ничего не найдено...</Typography>
          )}
        </Paper>
      )}
    </Box>
  );
};
