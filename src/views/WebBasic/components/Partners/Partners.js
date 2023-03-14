import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  {'imgSource':'https://residential.directvdealer.com/wp-content/uploads/2023/01/5798-Born-Free-Logo-206K-p2.jpg', 'linkTo':'/'},
  {'imgSource':'https://nationalbroadband.com/content/img/logos/frontier-logo-color.png', 'linkTo':'/'},
  {'imgSource':'https://corporate.comcast.com/media/img/original/2019/02/corporate_Creative_xfinity_Logo.png', 'linkTo':'/'},
  {'imgSource':'https://residential.directvdealer.com/wp-content/themes/directv-rebrand/assets/images/directv-dealer-badge-color-black.png', 'linkTo':'https://residential.directvdealer.com/massachusetts/springfield/born-free-marketing/'},
  {'imgSource':'https://us1-photo.nextdoor.com/business_logo/06/b9/06b9509d2ddab21b5750575f77f37f81.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=1&resize_type=resize&density=2', 'linkTo':'/'},
];

const Partners = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box maxWidth={120} key={i} marginX={3}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item.imgSource}
              alt="..."
              onClick={()=>window.location.href=item.linkTo}
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Partners;
