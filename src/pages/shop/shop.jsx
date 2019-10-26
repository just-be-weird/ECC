//as we need to store the data related to actual collectons on our shop page -its state full comp
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps} />))
        }
      </div>
    );
  }
}

ShopPage.propTypes = {
  collections: PropTypes.array,
};

export default ShopPage;