import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPicker, TextControl, RangeControl, ToggleControl, __experimentalBorderControl as BorderControl, TabPanel, PanelRow, ColorPalette } from '@wordpress/components'; 
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function Edit( {attributes, setAttributes} ) {

    const { name, bio, bgColor, imageUrl, cardBorderRadius, hasShadow, imageBorder, align, titleColor, bioColor } = attributes;

    const onChangeName = ( newName ) => {
        setAttributes( { name: newName } )
    };

    const onChangeBio = ( newBio ) => {
        setAttributes( { bio: newBio } )
    };

    const onChangeimgUrl = ( newUrl ) => {
        setAttributes( { imageUrl: newUrl } )
    };

    const onChangeBgColor = ( newColor ) => {
        setAttributes( { bgColor: newColor } )
    };

    const onChangeCardBorderRadius = ( newValue ) => {
        setAttributes( { cardBorderRadius: newValue } )
    };

    const onToggleShadow = ( value ) => {
        setAttributes( { hasShadow: value } )
    };

    const onChangeImageBorder = ( newBorder ) => {
        setAttributes( { imageBorder: newBorder } )
    }

    const onChangeTitileColor = ( newColor ) => {
        setAttributes( { titleColor: newColor } )
    }

    const onChangeBioColor = ( newColor ) => {
        setAttributes( { bioColor: newColor } )
    }

    const [activeTab, setActiveTab] = useState('tab1');


    return (
        <>
        <InspectorControls>

        <TabPanel
        className="my-tab-panel"
        activeClass="active-tab"
        onSelect={(tabName) => setActiveTab(tabName)}
        activeTab={activeTab}
        orientation='horizontal'
        tabs={ [
            {
                name: 'card container',
                title: 'Card Container',
                className: 'tab-one',
            },
            {
                name: 'card contents',
                title: 'Card Contents',
                className: 'tab-two',
            },
        ] }
    >
        {(tab) => (
                    <PanelRow>
                        {tab.name === 'card container' && (
                            <div className='pc-tabs-content'>
                                <ToggleControl
                                    label="Enable Box Shadow"
                                    onChange={ onToggleShadow }
                                    checked = { hasShadow }
                                />

                                <RangeControl 
                                    label= {__('Border Radious', 'profile-cards')}
                                    min= { 0 }
                                    max={ 100 }
                                    onChange={ onChangeCardBorderRadius }
                                    value={ cardBorderRadius }
                                />
                
                                <PanelBody title={__('Background Color', 'profile-cards')}>
                
                                    <ColorPicker value={ bgColor } onChange={ onChangeBgColor } allowReset={true} />
                
                                </PanelBody>
                            </div>
                        )}
                        {tab.name === 'card contents' && (
                            <div className='pc-tabs-content'>
                                <TextControl 
                                    label={__('Profile Image', 'profile-cards')}
                                    placeholder= {__('Image URL', 'profile-cards')}
                                    onChange= { onChangeimgUrl }
                                    value={ imageUrl }
                                    help={__('Put a valid link here for inserting an image', 'profile-cards')}
                                />

                        { imageUrl &&
                            <PanelBody title={__('Image Border', 'profile-cards')}>
                                <BorderControl 
                                    colors={[
                                      {
                                        color: '#fff',
                                        name: 'White'
                                      },
                                      {
                                        color: '#000',
                                        name: 'Black'
                                      },
                                      {
                                        color: '#e65054',
                                        name: 'Red 40'
                                      },
                                      {
                                        color: '#8a2424',
                                        name: 'Red 70'
                                      },
                                      {
                                        color: '#f2d675',
                                        name: 'Yellow 10'
                                      },
                                      {
                                        color: '#bd8600',
                                        name: 'Yellow 40'
                                      }
                                    ]}
                                   onChange={ onChangeImageBorder }
                                   value= { imageBorder }
                                />
                            </PanelBody>
                            }
                            { name &&
                            <PanelBody title={__('Title Color', 'profile-cards')}>
                                <ColorPalette
                                    colors={[
                                        {
                                          color: '#fff',
                                          name: 'White'
                                        },
                                        {
                                          color: '#000',
                                          name: 'Black'
                                        }
                                    ]}
                                    onChange={ onChangeTitileColor }
                                    value={ titleColor }
                               />
                            </PanelBody>
                            
                            }

                            { bio &&
                            <PanelBody title={__('Bio Color', 'profile-cards')}>
                                <ColorPalette
                                    colors={[
                                        {
                                          color: '#fff',
                                          name: 'White'
                                        },
                                        {
                                          color: '#000',
                                          name: 'Black'
                                        }
                                    ]}
                                    onChange={ onChangeBioColor }
                                    value={ bioColor }
                               />
                            </PanelBody>
                            
                            } 
                            </div>
                        )}
                    </PanelRow>
                )}
    </TabPanel>
            
        </InspectorControls>
            <div { ...useBlockProps() } >
                {/* <div className="profile-card-wrapper"> */}
                    <div className={`profile-card align-${align}${hasShadow ? ' has-shadow' : ''}`}  style={{ backgroundColor: bgColor , borderRadius: cardBorderRadius}}>                    
                        { imageUrl && 
                        <img 
                            src={imageUrl} 
                            style={imageBorder ? { 
                              borderColor: imageBorder.color, 
                              borderWidth: imageBorder.width, 
                              borderStyle: imageBorder.style  
                            } : {}} 
                        />
                         }
                        <RichText 
                            placeholder={ __('Name', 'profile-cards') }
                            tagName='h4'
                            onChange={ onChangeName }
                            value={ name }
                            allowedFormats={['core/bold', 'core/italic']}
                            style={ {color: titleColor} }
                        />
                        <RichText 
                            placeholder={ __('Bio', 'profile-cards') }
                            tagName='p'
                            onChange={onChangeBio}
                            value={bio}
                            allowedFormats={[ ]}
                            style={ {color: bioColor} }
                        />
                    </div>
                {/* </div> */}
            </div>
       </>
    )
}