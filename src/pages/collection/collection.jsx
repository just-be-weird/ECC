import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item';
import './category.styles.scss';

const CollectionPage = ({collection}) => {
  const {title, items} = collection;
  return (
    <div className='collection-page'>
      <h2 className={'title'}>{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};
/*
	This is some neat trick as this is necessary because unlike other selectors
	selectCollection selector needs a part of the state depending on the URL param
	Note: mapStateToProps gets two args:
				1. Unified state object from redux store
				2. props of this component which can be default/passed props from other components
*/
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);