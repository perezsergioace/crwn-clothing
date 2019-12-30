import React from 'react';
import './collectionpreview.scss';
import CollectionItem from '../collectionitem/CollectionItem';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => <CollectionItem key={id} {...otherItemProps} />)}
		</div>
	</div>
);

export default CollectionPreview;
