/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import Shopbanner from 'components/banners/shopbanner';
import { FiltersToggle } from 'components/common';
import Filters from 'components/common';
import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';

const Shop = () => {
  useDocumentTitle('Shop | MEDIK-420');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className=" shop-content flex flex-col px-10">
      <Shopbanner/>
      {/* <FiltersToggle>
          <button className="button-muted button-small" type="button">
            Filters &nbsp;
            <FilterOutlined />
          </button>
        </FiltersToggle> */}
      {/* <FiltersToggle /> */}
      <section className="product-list-wrapper product-display-grid">
        <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
        <ProductList {...store}>
          <ProductGrid products={store.filteredProducts} />
        </ProductList>
      </section>
    </main>
  );
};

export default Shop;
