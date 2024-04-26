import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
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
