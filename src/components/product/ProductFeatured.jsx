import { ImageLoader } from 'components/common';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

const ProductFeatured = ({ product }) => {
  const history = useHistory();
  const onClickItem = () => {
    if (!product) return;

    history.push(`/product/${product.id}`);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div className="product-display" onClick={onClickItem} role="presentation">
        <div className="product-display-img">
          {product.image ? (
            <ImageLoader
              className="product-card-img"
              src={product.image} alt="yy"
            />
          ) : <Skeleton width="100%" height="100%" />}
        </div>
        <div className="product-display-details ">
          <h2>{product.name || <Skeleton width={80} />}</h2>
          <p className="price">
            {product.price? (`${'$'} ${product.price}` || <Skeleton width={40} />): "fetching your price"}
          </p>
          <p >
            {product.brand }
          </p>
          {/* <p className="text-subtle text-italic">
            {product.brand }
          </p> */}
        </div>
      </div>
    </SkeletonTheme>
  );
};

ProductFeatured.propTypes = {
  product: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string
  }).isRequired
};

export default ProductFeatured;


{/* <div class="Card_card__D1ApC" id="0" style="margin: 0px; padding: 0px; opacity: 1;">
  <img src="https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188604/cyberpunk_n6jitl.jpg" class="Card_img__OR8OW" alt="Game Cover Image"/>
    <div class="Card_price__cIEfx">
            <div class="AddToCart_addToCart__zbJPe" id="0">
                <h4 style="color: rgb(153, 153, 153);">Add to cart</h4>
                <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.364 60.364" xml:space="preserve" class="AddToCart_add__YT66r" style="fill: rgb(153, 153, 153);"><g><path d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269 L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91 c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z">
                    </path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    <g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            </div>$59.99
     </div>
         <h2 class="Card_name__rZ4o+">Cyberpunk 2077</h2>
         <button class="Card_like__VGO2A" id="0" aria-label="Like">
                <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 230 230" xml:space="preserve" class="Card_likeSVG__rBcQ2" style="fill: rgb(204, 204, 204);">
                  <path d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083 c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083 C235.26,57.99,236.537,96.466,213.588,120.982z">
                    </path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
         </button>
</div> */}