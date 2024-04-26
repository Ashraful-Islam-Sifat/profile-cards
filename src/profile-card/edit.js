import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( {attributes, setAttributes} ) {

    const { name, bio } = attributes;

    const onChangeName = (newName) => {
        setAttributes({name: newName})
    };

    const onChangeBio = (newBio) => {
        setAttributes({bio: newBio})
    };
    
    return (
        <div { ...useBlockProps() } >
            <div className="profile-card-wrapper">
                <div className="profile-card">
                    <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1714124064~exp=1714124664~hmac=af399b71c35f0c5717b97c08fb691e3a6a600a871cfc40b322863a965790e122"/>
                    <RichText 
                        placeholder={ __('Name', 'profile-cards') }
                        tagName='h4'
                        onChange={ onChangeName }
                        value={ name }
                        allowedFormats={['core/bold', 'core/italic']}
                    />
                    <RichText 
                        placeholder={ __('Bio', 'profile-cards') }
                        tagName='p'
                        onChange={onChangeBio}
                        value={bio}
                        allowedFormats={[ ]}
                    />
                </div>
            
            </div>
        </div>
    )
}