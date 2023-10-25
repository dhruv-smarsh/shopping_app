import React, { Component } from 'react'
import * as S from './style'
import {equal} from "assert";
import {connect} from "react-redux";

export class Cart extends Component<any,any> {

  constructor(props: any) {
    super(props);

    this.state= {
      Open: false,
      total: 0,
      installments: 0
    };
  }



  handleToggleCart = () => {
      console.log(this.props)
    this.setState({
      Open: !this.state.Open
    });
  };
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    this.handleCart(prevProps)
  }
 handleCart = (prevProps:any) => {
      console.log(this.props)
    if(prevProps !== this.props){
      let total = 0;
      let  installments = 0
      let sum = 0;
      this.props.data.map((res: any) => {
        sum += res.price;
        total= sum;
      });
      installments = Math.max(...this.props.data.map((o: any)=> o.installments));
      this.setState({
        installments,
        total,
        Open:true
      })
    }
 }


  render() {
    console.log("it should call render")
    return (
        <>
          <S.Container isOpen={this.state.Open}>
            <S.CartButton onClick={this.handleToggleCart}>
              {this.state.Open ? (
                  <span>X</span>
              ) : (
                  <S.CartIcon>
                    <S.CartQuantity title="Products in cart quantity">
                      {this.props.data.length}
                    </S.CartQuantity>
                  </S.CartIcon>
              )}
            </S.CartButton>

            {this.state.Open && (
                <S.CartContent>
                  <S.CartContentHeader>
                    <S.CartIcon >
                      <S.CartQuantity>{this.props.data.length}</S.CartQuantity>
                    </S.CartIcon>
                    <S.HeaderTitle>Cart</S.HeaderTitle>
                  </S.CartContentHeader>

                  {/*<CartProducts products={products} />*/}

                  <S.CartFooter>
                    <S.Sub>SUBTOTAL</S.Sub>
                    <S.SubPrice>
                      <S.SubPriceValue>{this.state.total > 0 ? `$ ${this.state.total}` : `$ 0.00`}</S.SubPriceValue>
                      <S.SubPriceInstallment>
                        {this.props.data.length > 0 ? (
                            <span>
                    {`OR UP TO ${this.state.installments} x ${(this.state.total/this.state.installments).toFixed(2)}`}
                  </span>
                        ) : null}
                      </S.SubPriceInstallment>
                    </S.SubPrice>
                    <S.CheckoutButton autoFocus>
                      Checkout
                    </S.CheckoutButton>
                  </S.CartFooter>
                </S.CartContent>
            )}
          </S.Container>
        </>
    )
  }
}

export default connect((state: any) => ({
    data: state.products
    //the State.App & state.App.Items.List/Filters are reducers used as an example.
}), null /** no second argument */)(Cart);
