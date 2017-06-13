import React, { Component } from 'react'
import { pink600, purple600, orange600 } from 'material-ui/styles/colors'
import Assessment from 'material-ui/svg-icons/action/assessment'
import Face from 'material-ui/svg-icons/action/face'
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart'

import InfoBox from '../../components/InfoBox'
import Clock from '../../components/Clock'
import PageBase from '../../components/PageBase'
import ProductSelector from './ProductSelector'
import Bill from './Bill'

class Pos extends Component {
  state = {
    selectedProducts: [],
  }

  onSelection = product => {
    const { selectedProducts } = this.state
    const newArr = selectedProducts
    const index = selectedProducts.findIndex(item => item.id === product.id)
    const newProduct = { ...product }
    if (index >= 0) {
      newProduct.quantity += 1
      newProduct.totalPrice = newProduct.salePrice * newProduct.quantity
      newArr[index] = newProduct
    } else {
      newProduct.quantity = 1
      newProduct.totalPrice = newProduct.salePrice
      newArr.push(newProduct)
    }

    this.setState({
      selectedProducts: [...newArr],
    })
  }

  render() {
    return (
      <PageBase
        top={[
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15" key="clock">
            <Clock />
          </div>,

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15" key="total">
            <InfoBox Icon={ShoppingCart} color={pink600} title="Total Ventas" value="$150.000" />
          </div>,

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 " key="today">
            <InfoBox Icon={Assessment} color={purple600} title="Ventas de hoy" value="460" />
          </div>,

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 " key="lastone">
            <InfoBox Icon={Face} color={orange600} title="New Members" value="248" />
          </div>,
        ]}
        leftTitle="Buscador de Productos"
        left={<ProductSelector />}
        rightTitle="Venta"
        right={<Bill />}
        navigation="Mandarina / POS"
      />
    )
  }
}

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

export default Pos
