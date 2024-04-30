import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPicker, TextControl, RangeControl, ToggleControl, __experimentalBorderControl as BorderControl, TabPanel, PanelRow, ColorPalette, __experimentalBoxControl as BoxControl } from '@wordpress/components'; 
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function Edit( {attributes, setAttributes} ) {

    const { name, bio, bgColor, imageUrl, cardBorderRadius, hasShadow, imageBorder, align, titleColor, bioColor, cardHeight, cardWidth, imageBorderRadius, imageHeight, imageWidth, cardPadding } = attributes;

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

    console.log(imageBorder);

    const onChangeTitileColor = ( newColor ) => {
        setAttributes( { titleColor: newColor } )
    }

    const onChangeBioColor = ( newColor ) => {
        setAttributes( { bioColor: newColor } )
    }

    const onChangeCardHeight = ( newHeight ) => {
        setAttributes( { cardHeight: newHeight } )
    }

    const onChangeCardWidth = ( newWidth ) => {
        setAttributes( { cardWidth: newWidth } )
    }

    const onChangeImgBorderRadius = ( newValue ) => {
        setAttributes( { imageBorderRadius: newValue } )
    }

    const onChangeImgHeight = ( newHeight ) => {
        setAttributes( { imageHeight: newHeight } )
    }

    const onChangeImgWidth = ( newWidth ) => {
        setAttributes( { imageWidth: newWidth } )
    }

    const onChangeCardPadding = ( newPadding ) => {
        setAttributes( { cardPadding: newPadding } )
    }
   
   
    const [activeTab, setActiveTab] = useState('card container');
    return (
        <>
        <InspectorControls>

        <TextControl 
            label={__('Profile Image', 'profile-cards')}
            placeholder= {__('Image URL', 'profile-cards')}
            onChange= { onChangeimgUrl }
            value={ imageUrl }
            help={__('Put a valid link here for inserting an image', 'profile-cards')}
        />

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
                              
                                <RangeControl
                                        label= {__('Height (px)', 'profile-cards')}
                                        min= { 150 }
                                        max={ 600 }
                                        onChange={ onChangeCardHeight }
                                        value={ cardHeight }
                                />

                                <RangeControl
                                        label= {__('Width (px)', 'profile-cards')}
                                        min= { 100 }
                                        max={ 500 }
                                        onChange={ onChangeCardWidth }
                                        value={ cardWidth }
                                /> 

                                <BoxControl
                                    label= {__('Padding (px)', 'profile-cards')}
                                    onChange={ onChangeCardPadding }
                                    values={ cardPadding }
                                />
                              

                               <ToggleControl label={__('Enable Box Shadow')} onChange={onToggleShadow} checked={hasShadow}/>

                                <RangeControl 
                                    label= {__('Border Radious (px)', 'profile-cards')}
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
                                

                        { imageUrl &&
                            <PanelBody title={__('Image Settings', 'profile-cards')}>

                                <RangeControl 
                                    label= {__('Image Height (px)', 'profile-cards')}
                                    min= { 0 }
                                    max={ 400 }
                                    onChange={ onChangeImgHeight }
                                    value={ imageHeight }
                                />

                                <RangeControl 
                                    label= {__('Image Width (px)', 'profile-cards')}
                                    min= { 0 }
                                    max={ 400 }
                                    onChange={ onChangeImgWidth }
                                    value={ imageWidth }
                                />

                                <BorderControl 
                                    label='Image Border'
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

                                <RangeControl 
                                    label= {__('Border Radious (px)', 'profile-cards')}
                                    min= { 0 }
                                    max={ 100 }
                                    onChange={ onChangeImgBorderRadius }
                                    value={ imageBorderRadius }
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
                    <div className={`profile-card align-${align}${hasShadow ? ' has-shadow' : ''}`}  
                      style={{
                         backgroundColor: bgColor, 
                         borderRadius: cardBorderRadius, 
                         width: cardWidth, 
                         height: cardHeight, 
                         paddingTop: cardPadding ? cardPadding.top+'px' : undefined,
                         paddingBottom: cardPadding ? cardPadding.bottom+'px' : undefined,
                         paddingLeft: cardPadding ? cardPadding.left+'px' : undefined,
                         paddingRight: cardPadding ? cardPadding.right+'px' : undefined,
                         }}
                    >                    
                        { imageUrl && 
                        <img 
                            src={imageUrl} 
                            style={{ 
                                borderColor: imageBorder ? imageBorder.color+'px' : undefined, 
                                borderWidth: imageBorder ? imageBorder.width+'px' : undefined, 
                                borderStyle: imageBorder ? imageBorder.style+'px' : undefined,
                                borderRadius: imageBorderRadius,
                                width: imageWidth,
                                height: imageHeight
                            }}
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