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
      restaurants: [{id: 1, name: `O'Donnell's Pour House`, shortName: `O'Donnell's`, imgURL: `http://odonnellspourhouse.com/assets/images/galleries/full/hsCom.jpg`, description: `Upbeat Irish pub offering American fare, including steaks & seafood, plus frequent live music.`, phone: `609.263.5600`, address: `3907 Landis Ave`, website: `http://odonnellspourhouse.com/`, websiteName: `odonnellspourhouse.com/`}, {id: 2, name: `Hank's Sauce`, shortName: `Hank's`, imgURL: `https://cdn.shopify.com/s/files/1/0452/5593/files/restaurant2_1200x.jpg?v=1572378651`, description: `Casual haunt for creative comfort eats, such as cheesesteak tacos, burgers & lobster mac ’n’ cheese.`, phone: `609.486.5132`, address: `806 Landis Ave`, website: `https://www.hanksauce.com/`, websiteName: `hanksauce.com/`}]
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
        {/* <Grid item xs={12}>
            <Paper id='things-to-do-box'>
              <h4 id='activity-header'>O'Donnell's Pour House</h4>
              <div id='things-to-do-details'>
                <div id='activity-pic'>
                  <img src="http://odonnellspourhouse.com/assets/images/galleries/full/hsCom.jpg" alt="odonnells" id='activity-pic'></img>
                </div>
                <div id='things-to-do-description'>
                  <p>Upbeat Irish pub offering American fare, including steaks & seafood, plus frequent live music.</p>
                </div>
                <div id='things-to-do-info'>
                  <p>Phone: 609.263.5600 <br></br> Address: 3907 Landis Ave <br></br>Website: <a href="http://odonnellspourhouse.com/">odonnellspourhouse.com</a></p>
                </div>
              </div>
            </Paper>
          </Grid> */}
        </Grid>
      </div>
    );
  }

}

export default ThingsToDo;
