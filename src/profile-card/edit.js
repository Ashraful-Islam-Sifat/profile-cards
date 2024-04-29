import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPicker, TextControl, RangeControl } from '@wordpress/components'; 
import { __ } from '@wordpress/i18n';

export default function Edit( {attributes, setAttributes} ) {

    const { name, bio, bgColor, imageUrl, cardBorderRadious } = attributes;

    const onChangeName = ( newName ) => {
        setAttributes( { name: newName } )
    };

    const onChangeBio = ( newBio ) => {
        setAttributes( { bio: newBio } )
    };

    const onChangeimgUrl = ( newUrl ) => {
        setAttributes( { imageUrl: newUrl } )
    }

    const onChangeBgColor = ( newColor ) => {
        setAttributes( { bgColor: newColor } )
    }

    const onChangeCardBorderRadious = ( newValue ) => {
        setAttributes( { cardBorderRadious: newValue } )
    }
    
    return (
        <>
        <InspectorControls>

            <PanelBody title={__('Profile Image', 'profile-cards')}>
                <TextControl 
                    label={__('Profile Image', 'profile-cards')}
                    placeholder= {__('Image URL', 'profile-cards')}
                    onChange= { onChangeimgUrl }
                    value={ imageUrl }
                />

                { imageUrl &&
                <PanelBody title={__('Image Settings', 'profile-cards')}>

                </PanelBody>
                }

            </PanelBody>

            <PanelBody title={__('Card Container', 'profile-cards')}>

                <RangeControl 
                    label= {__('Border Radious', 'profile-cards')}
                    min= { 0 }
                    max={ 100 }
                    onChange={ onChangeCardBorderRadious }
                    value={ cardBorderRadious }
                />
                
                <PanelBody title={__('Background Color', 'profile-cards')}>

                    <ColorPicker onChange={ onChangeBgColor } allowReset={true} />

                </PanelBody>
                
            </PanelBody>
            
        </InspectorControls>
            <div { ...useBlockProps() } >
                <div className="profile-card-wrapper">
                    <div className="profile-card" style={{ backgroundColor: bgColor , borderRadius: cardBorderRadious}}>                    
                        { imageUrl && <img src={ imageUrl } /> }
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
       </>
    )
}