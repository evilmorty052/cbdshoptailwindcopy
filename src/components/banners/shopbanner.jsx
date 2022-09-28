import React from 'react'
import bannerImg from '../banners/bannerimages/cbdleaf.png'
import { Link } from 'react-router-dom';



const Shopbanner = () => {
  return (
    <div>
        <div className="banner cc">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Free Shipping <br/>FOR SUBSCRIBERS</strong>
              {/* <strong>SHOP CBD</strong> */}
              {/* &nbsp;CBD with&nbsp; */}
              {/* <strong>WITH MEDIK420</strong> */}
            </h1>
            <p>
            AND MUCH MORE
            </p>
            <br />
            {/* <Link to={SHOP} className="button">
              SHOP CBD &nbsp;
              <ArrowRightOutlined />
            </Link> */}
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" className='image'/></div>
        </div>
    </div>
  )
}

export default Shopbanner