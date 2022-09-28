import { CheckOutlined,EyeOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ImageLoader } from 'components/common';
import { displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

const ProductItem = ({ product, isItemOnBasket, addToBasket }) => {
  const history = useHistory();

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      history.push(`/product/${product.id}`);
    }
  };

  const itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  const handleAddToBasket = () => {
    if (addToBasket) addToBasket({ ...product, selectedSize: product.sizes[0] });
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card relative ${!product.id ? 'product-loading' : ''}`}
        style={{
          border: product && itemOnBasket ? '1px solid #a6a5a5' : '',
          boxShadow: product && itemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
        }}
      >
        {itemOnBasket && <CheckOutlined className="fa fa-check product-card-check" />}
        <div
          className="product-card-content mb-20"
          
          role="presentation"
        >
          <div className="product-card-img-wrapper">
            {product.image ? (
              <ImageLoader
                alt={product.name}
                className="product-card-img"
                src={product.image}
              />
            ) : <Skeleton width="100%" height="90%" />}
          </div>
          <div className="product-details w-full space-y-3 py-5 px-3 mb-10 ">
            <h5 className="product-card-name text-left margin-auto">
              {product.name || <Skeleton width={80} />}
            </h5>
            <p className="product-card-brand text-left">
              {product.brand || <Skeleton width={60} />}
            </p>
            <h4 className="product-card-price text-left  ">
              {product.price ? displayMoney(product.price) : <Skeleton width={40} />}
            </h4>
            
            
          </div>
          <div className='flex absolute left-0 bottom-0 ml-5 mb-5' >
            <EyeOutlined style={{ fontSize: '2.8rem '  }} onClick={onClickItem}/>
            </div>
            
            <div className=" w-full flex items-center absolute right-0 bottom-0 mr-5 mb-5">
            
          {<ShoppingCartOutlined  className='mine absolute right-0 bottom-0   ' style={{ fontSize: '2.8rem '  }} onClick={handleAddToBasket}/> || <Skeleton width={80} />}
            </div>
        </div>
        {/* {product.id && (
          <button
            className={`product-card-button button-small button button-block ${itemOnBasket ? 'button-border button-border-gray' : ''}`}
            onClick={handleAddToBasket}
            type="button"
          >
            {itemOnBasket ? 'Remove from basket' : 'Add to basket'}
          </button>
        )} */}

      </div>
    </SkeletonTheme>
  );
};

ProductItem.defaultProps = {
  isItemOnBasket: undefined,
  addToBasket: undefined
};

ProductItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropType.object.isRequired,
  isItemOnBasket: PropType.func,
  addToBasket: PropType.func
};

export default ProductItem;
