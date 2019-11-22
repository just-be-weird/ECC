//as we need to store the data related to actual collectons on our shop page -its state full comp
import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview';

const ShopPage = () => (
	<div className='shop-page'>
		<CollectionsOverview />
	</div>
);

export default ShopPage;
