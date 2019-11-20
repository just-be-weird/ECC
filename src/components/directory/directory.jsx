import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item';

const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSections
});
Directory.propTypes = {
	sections: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(Directory);
