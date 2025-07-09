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
            <Box pt={1} width={'100%'} sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color='primary' />
            </Box>
          ) : (
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
          )}
          {/* <Grow
            in={!!value}
            style={{ transformOrigin: '0 0 0' }}
            {...(!!value ? { timeout: 1000 } : {})}
          >
            <Box>
              <Stack direction={'row'} spacing={2} paddingBlock={1}>
                <ImageContainer>
                  <StyledImage
                    height={'70px'}
                    src={
                      'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/147663-li-kuan-u-iz-tretego-mira-v-pervyy-istoriya-singapura-1965-2000.webp'
                    }
                  />
                </ImageContainer>
                <Box>
                  <Typography variant='body1' component={'h2'}>
                    Из третьего мира – в первый
                  </Typography>
                  <Typography variant='body2'>
                    {`Когда крохотный Сингапур в 1965 году получил независимость, никто не верил,
                      что ему удастся выжить. Каким же образом фактория Великобритании превратилась
                      в процветающую столицу Азиатского региона с лучшим в мире аэропортом,
                      крупнейшей авиалинией, ключевым торговым портом и заняла четвертое место в
                      мире по уровню дохода на душу населения?`.slice(0, 80) + '...'}
                  </Typography>
                </Box>
              </Stack>{' '}
              <Divider />
            </Box>
          </Grow>

          <Grow
            in={!!value}
            style={{ transformOrigin: '0 0 0' }}
            {...(!!value ? { timeout: 2000 } : {})}
          >
            <Box>
              <Stack direction={'row'} spacing={2} paddingBlock={1}>
                <ImageContainer>
                  <StyledImage
                    height={'70px'}
                    src={
                      'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/147663-li-kuan-u-iz-tretego-mira-v-pervyy-istoriya-singapura-1965-2000.webp'
                    }
                  />
                </ImageContainer>
                <Box>
                  <Typography variant='body1' component={'h2'}>
                    Из третьего мира – в первый
                  </Typography>
                  <Typography variant='body2'>
                    {`Когда крохотный Сингапур в 1965 году получил независимость, никто не верил,
                      что ему удастся выжить. Каким же образом фактория Великобритании превратилась
                      в процветающую столицу Азиатского региона с лучшим в мире аэропортом,
                      крупнейшей авиалинией, ключевым торговым портом и заняла четвертое место в
                      мире по уровню дохода на душу населения?`.slice(0, 80) + '...'}
                  </Typography>
                </Box>
              </Stack>{' '}
              <Divider />
            </Box>
          </Grow>
          <Grow
            in={!!value}
            style={{ transformOrigin: '0 0 0' }}
            {...(!!value ? { timeout: 2000 } : {})}
          >
            <Box>
              <Stack direction={'row'} spacing={2} paddingBlock={1}>
                <ImageContainer>
                  <StyledImage
                    height={'70px'}
                    src={
                      'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/147663-li-kuan-u-iz-tretego-mira-v-pervyy-istoriya-singapura-1965-2000.webp'
                    }
                  />
                </ImageContainer>
                <Box>
                  <Typography variant='body1' component={'h2'}>
                    Из третьего мира – в первый
                  </Typography>
                  <Typography variant='body2'>
                    {`Когда крохотный Сингапур в 1965 году получил независимость, никто не верил,
                      что ему удастся выжить. Каким же образом фактория Великобритании превратилась
                      в процветающую столицу Азиатского региона с лучшим в мире аэропортом,
                      крупнейшей авиалинией, ключевым торговым портом и заняла четвертое место в
                      мире по уровню дохода на душу населения?`.slice(0, 80) + '...'}
                  </Typography>
                </Box>
              </Stack>{' '}
              <Divider />
            </Box>
          </Grow> */}
        </Paper>
      )}
    </Box>
  );
};
