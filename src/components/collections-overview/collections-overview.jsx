//as we need to store the data related to actual collectons on our shop page -its state full comp
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

CollectionsOverview.propTypes = {
	collections: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CollectionsOverview);
