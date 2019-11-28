//as we need to store the data related to actual collections on our shop page -its state full comp
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';

//Creating the WithSpinner Wrapped HOC Components
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, updateCollections}) => {
  const [loading, setLoading] = useState(true);
  // let unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log('snapshot: ', collectionsMap);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  });

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}/>
      <Route path={`${match.path}/:collectionId`}
             render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

ShopPage.propTypes = {
  updateCollections: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ShopPage);
/*
//Class Component
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=> {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

ShopPage.propTypes = {
  updateCollections: PropTypes.func.isRequired
};

export default connect(null,mapDispatchToProps)(ShopPage);
* */