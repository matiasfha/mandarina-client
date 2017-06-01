import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/InfoBox';

import {typography} from 'material-ui/styles';
import {grey600} from 'material-ui/styles/colors';

const styles = {
  navigation: {
    fontSize: 15,
    fontWeight: typography.fontWeightLight,
    color: grey600,
    paddingBottom: 15,
    display: 'block'
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20
  },
  paper: {
    padding: 30
  },
  clear: {
    clear: 'both'
  }
};


const Pos = () => {

  return (
    <div>
      <h3 style={styles.navigation}>Punto de Venta</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ShoppingCart}
                   color={pink600}
                   title="Ganancia Total"
                   value="$150.000"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ThumbUp}
                   color={cyan600}
                   title="Likes"
                   value="4231"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={purple600}
                   title="Sales"
                   value="460"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Face}
                   color={orange600}
                   title="New Members"
                   value="248"
          />
        </div>
      </div>

      
    </div>
  );
};

/*
<div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <NewOrders data={Data.dashBoardPage.newOrders}/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlySales data={Data.dashBoardPage.monthlySales}/>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <BrowserUsage data={Data.dashBoardPage.browserUsage}/>
        </div>
      </div>*/

export default Pos;