import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import bannerImg from 'images/herobanner.png';
import { MobileNavigation } from 'components/common';
import React from 'react';
import { Link } from 'react-router-dom';
import Test from './test';
import Test2 from './test2';
import Test3 from './test3';
import Test4 from './test4';
import Test5 from './test5';
import Test6 from './test6';
import Test7 from './test7';


const Home = () => {
  useDocumentTitle('MEDIK 420 | Home');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <>
    <main className="shop-content px-10 ">
      <div className="home space-y-10 md:space-y-20">
        <div className="banner mt-20 cc">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>SHOP CBD <br/>WITH MEDIK 420</strong>
              {/* <strong>SHOP CBD</strong> */}
              {/* &nbsp;CBD with&nbsp; */}
              {/* <strong>WITH MEDIK420</strong> */}
            </h1>
            <p>
             WE ALWAYS DELIVER YOUR SMILE WITH A SMILE
            </p>
            <br />
            <Link to={SHOP} className="button">
              SHOP CBD &nbsp;
              {/* <ArrowRightOutlined /> */}
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" className='image'/></div>
        </div>
        <div className="display">
          <div className="display-header mb-5">
            <h1 className='featured-header text-blk  text-4xl mb-5'>FEATURED</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header mb-5 ">
            <h1 className=' text-blk  text-4xl mb-5'>RECOMMENDED</h1>
            <Link to={RECOMMENDED_PRODUCTS} >See All</Link>
          </div>
          {(errorRecommended && !isLoadingRecommended) ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className='flex flex-col space-y-40'>
        <Test/>
        <Test2/>
        <Test3/>
        <Test4/>
        <Test5/>
        <Test6/>
        {/* <Test7/> */}
        </div>
        
      </div>
    </main>
    </>
  );
};

export default Home;
