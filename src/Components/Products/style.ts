import styled from 'styled-components/macro';

export const BuyButton = styled.button`
  background-color: #1b1a20;
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border: 0;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid #eabf00;
  }
`;

interface IImage {
  alt: string;
}
export const Image = styled.div<IImage>``;

interface IContainer {
  sku: number | string;
}
export const Container = styled.div<IContainer>`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  cursor: default;
  outline: none;

  &:focus-visible {
    outline: 3px solid #eabf00;
  }

  ${Image} {
    width: 100%;
    height: 270px;
    position: relative;
    background-image: ${({ sku }) =>
      `url(${require(`../../static/products/${sku}-1-product.webp`)})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ::before {
      content: '';
      display: block;
      position: absolute;
      background: #eee;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    @media only screen and (min-width: 768px) {
      height: 320px;
    }
  }

  &:hover {
    ${Image} {
      background-image: ${({ sku }) =>
        `url(${require(`../../static/products/${sku}-2-product.webp`)})`};
    }

    ${BuyButton} {
      background-color: #eabf00;
    }
  }
`;

export const Stopper = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.6em;
  background-color: #1b1a20;
  cursor: default;
  z-index: 1;
`;

export const Title = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;

  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: #eabf00;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const Price = styled.div`
  height: 60px;

  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  margin: 0;
  b {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;

export const Installment = styled.p`
  margin: 0;
  color: #9c9b9b;
`;

export const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width:768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
