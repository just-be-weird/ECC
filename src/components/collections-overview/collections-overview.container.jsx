import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);

export default CollectionOverviewContainer;