import React, {Component, useState} from 'react';
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Products/Product";
import * as S from './style'

export class App extends Component<any,any> {
    constructor(props: any) {
        super(props);

        this.state= {
            product: [],
            mode: false,
            installments: 0,
            total: 0
        };
    }

     toggleMode = (data: any) => {
        let ProductsData:any = this.state.product;
        ProductsData.push(data);


        this.setState({
            mode: true,
            product: ProductsData,

        })

    };

    render(){
        return (
            <>
                <S.Container>
                    <S.TwoColumnGrid>
                        <S.Side>

                            {/*<Filter />*/}
                            {/*<GithubStarButton />*/}
                        </S.Side>
                        <S.Main>
                            <S.MainHeader>
                                {/*    <p>{products?.length} Product(s) found</p>*/}
                            </S.MainHeader>
                            <Product toggleMode={this.toggleMode}/>
                        </S.Main>
                    </S.TwoColumnGrid>
                    <Cart key={'key'} mode={this.state.mode} data={this.state.product}/>
                </S.Container>
            </>
        );
    }

}

export default App
