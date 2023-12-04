import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Icon, Divider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <><Box sx={{ display: 'flex', overflow: 'auto',flexDirection: 'column', height: 'max-content' }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'white',
          boxShadow: 0,
          borderBottom: 1,
          borderColor: '#D3D3D3',
          height: 64,
          top: `${scrollPosition}px`,
          // transition: 'top 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', height: '100%' }}>
          <Typography variant="h5" color="#e24f43" component="div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Icon>
              <img src="/heart.svg" alt="heart" />
            </Icon>
            <Icon>
              <img src="/facts.svg" alt="second-icon" />
            </Icon>
            <Divider orientation="vertical" flexItem />
            <Icon>
              <img src="/cart.svg" alt="third-icon" />
            </Icon>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#D3D3D3'
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: 'auto', padding: '24px',backgroundColor:'white'}}>
        <Grid container style={{ padding: '20px' }} spacing={2}>
          <Grid item sx={{ margin: 0 }} style={{ width: '150px', height: 'auto', paddingLeft: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ margin: 0 }}>
                <Paper elevation={3} style={{ width: '100%', height: '150px' }}>
                  {/* Your second image content */}
                  <img src="/second-image.jpg" alt="Second" style={{ width: '100%', height: '100%' }} />
                </Paper>
              </Grid>
              <Grid item xs={12} sx={{ margin: 0 }}>
                <Paper elevation={3} style={{ width: '100%', height: '150px' }}>
                  {/* Your second image content */}
                  <img src="/second-image.jpg" alt="Second" style={{ width: '100%', height: '100%' }} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ margin: 0 }} style={{ width: '450px', paddingLeft: 0, marginLeft: '16px' }}>
            <Paper elevation={3} style={{ height: '482px', width: '100%' }}>
              <img src="/first-image.jpg" alt="First" style={{ width: '100%', height: '10%' }} />
            </Paper>
          </Grid>
          <Grid item sx={{ margin: 0, width: '600px', paddingLeft: 0 }}>
            <Grid container spacing={2} style={{ height: '498px' }} alignItems="stretch">
              <Grid item xs={12} style={{ alignSelf: 'flex-start' }}>
                <Typography style={{ fontSize: '24px', fontFamily: 'Open Sans', margin: 0 }}>
                  Lorem Ipsum dolor sit amet, consectetur adipisicing elit
                </Typography>
                <div style={{ fontSize: '16px', fontFamily: 'Open Sans' }}>
                  by <span style={{ color: '#6f91a4' }}>supplier name</span>
                </div>
                <Grid container style={{ marginBottom: '30px', marginTop: '10px' }}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Grid item key={index}>
                      <Icon>
                        <img src="/star.svg" alt={`icon-${index}`} />
                      </Icon>
                    </Grid>
                  ))}
                </Grid>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography style={{ marginRight: '5px' }}>
                    25000 EUR
                  </Typography>
                  <span style={{ color: 'grey', fontSize: '12px', fontFamily: 'Open Sans', marginRight: '5px' }}>+34,00 EUR shipping</span>
                  <Icon fontSize='16px'><img src="/discount.svg" alt="Discount Icon" /></Icon>
                </div>
                <div style={{ color: 'grey', fontSize: '12px', fontFamily: 'Open Sans' }}>all prices inc. 10% taxes</div>
              </Grid>
              <Grid item xs={12} style={{ alignSelf: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Paper elevation={3} style={{ width: '10%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '10px' }}>
                    1
                  </Paper>
                  <span style={{ marginLeft: '10px' }}>Pcs</span>
                  <Button style={{ textTransform: 'none', marginLeft: '30px', borderRadius: 0, gap: '10px', color: 'white', backgroundColor: '#e24f43', width: 'auto', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '10px' }}>
                    <Icon style={{ display: 'flex' }}><img src="/add.svg"></img></Icon>Add to cart
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: '30px',width:'75%',wordBreak:'break-word' }} >
        <div style={{color: '#e24f43',fontFamily:'Open Sans',fontWeight: '600'}}>DESCRIPTION</div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat nibh vitae gravida egestas. Pellentesque mollis volutpat faucibus. Morbi ipsum ligula, elementum eget facilisis in, mattis non magna. Aliquam pulvinar ullamcorper pretium. Suspendisse pretium bibendum ligula, at pellentesque nisi finibus ut. Quisque quis lectus rutrum, condimentum nibh a, facilisis massa. Donec vestibulum urna eu ex elementum consectetur. Suspendisse potenti. Nulla facilisi. Ut placerat varius scelerisque. Aliquam neque tortor, commodo id mattis non, semper non lacus. Cras ac dignissim enim. In sit amet erat in sem pellentesque ornare. Cras non tortor non lorem auctor dictum sed nec nisl. Vivamus feugiat ipsum sed urna volutpat blandit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat nibh vitae gravida egestas. Pellentesque mollis volutpat faucibus. Morbi ipsum ligula, elementum eget facilisis in, mattis non magna. Aliquam pulvinar ullamcorper pretium. Suspendisse pretium bibendum ligula, at pellentesque nisi finibus ut. Quisque quis lectus rutrum, condimentum nibh a, facilisis massa. Donec vestibulum urna eu ex elementum consectetur. Suspendisse potenti. Nulla facilisi. Ut placerat varius scelerisque. Aliquam neque tortor, commodo id mattis non, semper non lacus. Cras ac dignissim enim. In sit amet erat in sem pellentesque ornare. Cras non tortor non lorem auctor dictum sed nec nisl. Vivamus feugiat ipsum sed urna volutpat blandit.
</Box>
    </Box>
      </Box></>
  );
}
