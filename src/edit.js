import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {

	const { columns } = attributes;

	const onChangeColumns = (newColumns) => {
		setAttributes( { columns:newColumns } )
	}

	return (
		<div { ...useBlockProps( {
			className: `has-${ columns }-columns`,
		} ) }>

			<InnerBlocks 
			    allowedBlocks={ [ 'create-block/profile-card' ] } 
				orientation='horizontal'
				template={[
					['create-block/profile-card'],
					['create-block/profile-card'],
					['create-block/profile-card']
				]}

			/>
		</div>
	);
}
