import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {id: 1, name: `O'Donnell's Pour House`, shortName: `O'Donnell's`, imgURL: `http://odonnellspourhouse.com/assets/images/galleries/full/hsCom.jpg`, description: `Upbeat Irish pub offering American fare, including steaks & seafood, plus frequent live music.`, phone: `609.263.5600`, address: `3907 Landis Ave`, website: `http://odonnellspourhouse.com/`, websiteName: `odonnellspourhouse.com/`},
        {id: 2, name: `Hank's Sauce`, shortName: `Hank's`, imgURL: `https://cdn.shopify.com/s/files/1/0452/5593/files/restaurant2_1200x.jpg?v=1572378651`, description: `Casual haunt for creative comfort eats, such as cheesesteak tacos, burgers & lobster mac ’n’ cheese.`, phone: `609.486.5132`, address: `806 Landis Ave`, website: `https://www.hanksauce.com/`, websiteName: `hanksauce.com/`},
        {id: 3, name: `Mike's Seafood`, shortName: `Mike's`, imgURL: `https://digitalmarketing.blob.core.windows.net/8577/images/items/image566895.jpg`, description: `Located in Sea Isle City's Historic Fish Alley, Mike's Seafood and Dock Restaurant is committed to satisfying our customers with a wide selection of fresh, locally caught seafood for lunch and dinner.`, phone: `609.263.3458`, address: `4222 Park Road`, website: `https://www.mikesseafood.com/home`, websiteName: `mikesseafood.com/`},
        {id: 4, name: `Basilico's Ristorante`, shortName: `Basilico's`, imgURL: `https://img1.wsimg.com/isteam/ip/3d5254c9-e40b-4ff9-a9e3-94e5596accfe/9650638f-2ca0-4250-90b9-36ae64e667a2.JPG/:/rs=w:1140,h:900,cg:true,m/cr=w:1140,h:900,a:cc`, description: `Homemade pastas & other traditional Italian dishes offered in an informal environment.`, phone: `609.263.1010`, address: `27 43rd Street`, website: `https://basilicosristorante.com/entree-take-out`, websiteName: `basiliocsristorante.com/`}],
      bars: [
        {id: 1, name: `The Ocean Drive`, shortName: `The OD`, imgURL: `https://media-cdn.tripadvisor.com/media/photo-s/03/90/37/bf/getlstd-property-photo.jpg`, description: `Festive bar that draws rollicking crowds for nightly live tunes, afternoon happy hours & pub grub.`, phone: `609.263.1000`, address: `3915 Landis Ave`, website: `http://theod.com/`, websiteName: `theod.com/`},
        {id: 2, name: `Kix-McNutley's`, shortName: `Kix`, imgURL: `https://cdn.usarestaurants.info/assets/uploads/9c3ed6135bc148cfd389c2cd6e08003e_-united-states-new-jersey-cape-may-county-sea-isle-city-751255-kix-mcnutleyshtm.jpg`, description: `Sprawling, high-energy nightspot featuring regular live music, multiple bars, a dance floor & patio.`, phone: `609.263.6341`, address: `120 63rd Street`, website: `https://www.kixmcnutleys.com/`, websiteName: `kixmcnutleys.com/`},
        {id: 3, name: `Henri's Bar`, shortName: `Henri's`, imgURL: `https://s3-media0.fl.yelpcdn.com/bphoto/HsOsdxT8O79qF3YFOFIiIA/l.jpg`, description: `Come pull up a seat at the Henri’s Bar for your favorite cocktail or order at your table. A local favorite, Henri’s Bar is  our outside  bar and eatery where good friends and family come together to celebrate or unwind.`, phone: `609.263.2233`, address: `18 Kennedy & Beach`, website: `https://www.thebracacafe.com/`, websiteName: `thebracacafe.com/`}]
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h2>Restaurants</h2>
        <Grid container spacing={1}>
        {
          this.state.restaurants.map((restaurant) => {
            return(
              <Grid item xs={12}>
              <Paper id='things-to-do-box'>
                <h3 id='activity-header'>{restaurant.name}</h3>
                <div id='things-to-do-details'>
                  <div id='activity-pic'>
                    <img src={restaurant.imgURL} alt={restaurant.shortName} id='activity-pic'></img>
                  </div>
                  <div id='things-to-do-description'>
                    <p>{restaurant.description}</p>
                  </div>
                  <div id='things-to-do-info'>
                    <p>Phone: {restaurant.phone} <br></br> Address: {restaurant.address} <br></br>Website: <a href={restaurant.website}>{restaurant.websiteName}</a></p>
                  </div>
                </div>
              </Paper>
            </Grid>
            )
          })
        }
        </Grid>
        <h2>Bars and Nightlife</h2>
          <Grid container spacing={1}>
          {
            this.state.bars.map((bar) => {
              return(
                <Grid item xs={12}>
                <Paper id='things-to-do-box'>
                  <h3 id='activity-header'>{bar.name}</h3>
                  <div id='things-to-do-details'>
                    <div id='activity-pic'>
                      <img src={bar.imgURL} alt={bar.shortName} id='activity-pic'></img>
                    </div>
                    <div id='things-to-do-description'>
                      <p>{bar.description}</p>
                    </div>
                    <div id='things-to-do-info'>
                      <p>Phone: {bar.phone} <br></br> Address: {bar.address} <br></br>Website: <a href={bar.website}>{bar.websiteName}</a></p>
                    </div>
                  </div>
                </Paper>
              </Grid>
              )
            })
          }
          </Grid>
      </div>
    );
  }

}

export default ThingsToDo;
