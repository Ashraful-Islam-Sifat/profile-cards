import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, ColorPicker, TextControl, RangeControl, ToggleControl, __experimentalBorderControl as BorderControl, TabPanel, PanelRow, ColorPalette, ColorIndicator, __experimentalBoxControl as BoxControl, Button, Icon, Panel } from '@wordpress/components'; 
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function Edit( {attributes, setAttributes} ) {

    const { name, bio, bgColor, imageUrl, imageId, cardBorderRadius, hasShadow, align, titleColor, bioColor, cardHeight, cardWidth, imageBorder, imageBorderRadius, imageHeight, imageWidth, cardPadding, enableSocialLinks, socialLinks, socialIconsColor, socialIconsGap, gapBetweenContents } = attributes;

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

    const onRemoveImage = () => {
        setAttributes({ imageUrl: ''} )
    }

    const onChangeTitileColor = ( newColor ) => {
        setAttributes( { titleColor: newColor } )
    };

    const onChangeBioColor = ( newColor ) => {
        setAttributes( { bioColor: newColor } )
    };

    const onChangeCardHeight = ( newHeight ) => {
        setAttributes( { cardHeight: newHeight } )
    };

    const onChangeCardWidth = ( newWidth ) => {
        setAttributes( { cardWidth: newWidth } )
    };

    const onChangeImgBorderRadius = ( newValue ) => {
        setAttributes( { imageBorderRadius: newValue } )
    };

    const onChangeImgHeight = ( newHeight ) => {
        setAttributes( { imageHeight: newHeight } )
    };

    const onChangeImgWidth = ( newWidth ) => {
        setAttributes( { imageWidth: newWidth } )
    };

    const onChangeCardPadding = ( newPadding ) => {
        setAttributes( { cardPadding: newPadding } )
    };

    const onSelectImage = ( newImage ) => {
        if( !newImage || !newImage.url ) {
            setAttributes( { imageUrl: undefined, imageId: undefined } );
            return;
        }
        setAttributes( { imageId:newImage.id, imageUrl:newImage.url } )
    };

    const onChangeImageBorder = ( newBorder ) => {
        setAttributes( {imageBorder: newBorder} )
    };

    const onToggleIcon = ( value ) => {
        setAttributes( { enableSocialLinks: value } )
    }

    const addNewSocialLink = () => {
        setAttributes( { 
            socialLinks : [ ...socialLinks, { icon: 'wordpress', link: '' } ]
         } )
    }

    const onRemoveSocialIcon = ( num ) => {
        setAttributes( {
            socialLinks: [
                ...socialLinks.slice(0, num),
                ...socialLinks.slice(num + 1),
            ],
        } )
    }

    const handleLinkChange = (newValue, index) => {
        const updatedLinks = [...socialLinks];
        updatedLinks[index].link = newValue;
        setAttributes({ socialLinks: updatedLinks });
    };

    const handleIconChange = (newValue, index) => {
        const updatedLinks = [...socialLinks];
        updatedLinks[index].icon = newValue;
        setAttributes({ socialLinks: updatedLinks });
    };

    const onChangeSocialIconColor = ( newColor ) => {
        setAttributes( { socialIconsColor: newColor } )
    };

    const onChangeIconsGap = ( newValue ) => {
        setAttributes( { socialIconsGap: newValue } )
    }

    const onChangeContentsGap = ( newValue ) => {
        setAttributes( { gapBetweenContents: newValue } )
    }

    const [activeTab, setActiveTab] = useState('card container');
    
    return (
        <>
        <InspectorControls>

            <PanelBody title={__('Profile Image')}>
           
            <div className='editor-post-featured-image'>
                <MediaUploadCheck>

                    <MediaUpload
                        onSelect={ onSelectImage }
                        value={ imageId }
                        allowedTypes={ ['image'] }
                        render={({ open }) => (
                            <Button 
                                className={imageId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                onClick={open}
                            >
                                {
                                    (imageUrl == 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg' || imageUrl == undefined || imageUrl == '')
                                        ? __(' + Choose an Image', 'profile-cards')
                                        : __('Replace Image', 'profile-cards')
                                }
                                {imageUrl != undefined && 
                                    <img className='pc-sidebar-preview-img-style' src={imageUrl} />
                                }
                            </Button>
                        )}
                    />
        
                </MediaUploadCheck>

                {
                    (imageUrl !== 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg' && imageUrl !== undefined && imageUrl !== '')                

                        ? (
                            <MediaUploadCheck>
                                <Button onClick={onRemoveImage}  variant="link" isDestructive>
                                    {__('Remove image', 'profile cards')}
                                </Button>
                            </MediaUploadCheck>
                        )
                        : null
                }
            </div>

        

        <TextControl 
            label={__('Image Link', 'profile-cards')}
            placeholder= {__('Image URL', 'profile-cards')}
            onChange= { onChangeimgUrl }
            value={ imageUrl }
            help={__('Put a valid link here for inserting an image', 'profile-cards')}
        />

      </PanelBody>   

        <PanelBody title={__('Social Icons', 'profile-cards')}>

            <div className='profile-cads-social-icons-controller'>

                <ToggleControl
                    onChange={ onToggleIcon } 
                    checked={ enableSocialLinks } 
                    label={__('Enable Social Icons', 'profile-cards')}
                />

                { enableSocialLinks && socialLinks.map((item, index)=> {

                   return (
                    <div className='profile-cads-social-icon-controller'>
                        <TextControl
                            label={__('Icon Name', 'profile-cards')}
                            placeholder= {__('icon name', 'profile-cards')}
                            value={ item.icon }
                            onChange={(newValue) => handleIconChange(newValue, index)}
                        />

                        <TextControl
                            label={__('Navigation Link', 'profile-cards')}
                            placeholder= {__('navigation link', 'profile-cards')}
                            value={ item.link }
                            onChange={(newValue) => handleLinkChange(newValue, index)}
                        />

                        <button onClick={() => onRemoveSocialIcon(index)}  className='remove-button'>
                            {__('Remove Icon', 'profile cards')}
                        </button>

                    </div>
                   )
                })}
                { enableSocialLinks && 
                <button onClick={ addNewSocialLink }>{__('Add More Icon', 'profile-cards')}</button>
                }
                
            </div>

        </PanelBody>

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

                                    <ColorPalette
                                        colors={[
                                            {
                                              color: '#263961',
                                              name: 'blue'
                                            },
                                            {
                                              color: '#000',
                                              name: 'Black'
                                            }
                                        ]}
                                        value={ bgColor }
                                        onChange={ onChangeBgColor }
                                    />
                
                                </PanelBody>
                            </div>
                        )}
                        {tab.name === 'card contents' && (
                            <div className='pc-tabs-content'>
                                
                            <RangeControl 
                                label= {__('Gap between contents', 'profile-cards')}
                                min= { 10 }
                                max={ 70 }
                                onChange={ onChangeContentsGap }
                                value={ gapBetweenContents }
                            />

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
                                    colors={[
                                      {
                                        color: '#72aee6',
                                        name: 'Blue 20'
                                      },
                                      {
                                        color: '#3582c4',
                                        name: 'Blue 40'
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
                                    label="Borders"
                                    onChange={ onChangeImageBorder }
                                    value={ imageBorder }
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


                            <Panel header={__('Title Color', 'profile-cards')}>
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
                            </Panel>

                            <Panel header={__('Bio Color', 'profile-cards')}>
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
                            </Panel>

                            <PanelBody title={__('Icons Settings', 'profile-cards')}>

                                <Panel header='Icons Color'>
                                    <ColorPalette
                                        colors={[
                                            {
                                              color: '#fff',
                                              name: 'white'
                                            },
                                            {
                                              color: '#000',
                                              name: 'Black'
                                            }
                                        ]}
                                        value={ socialIconsColor }
                                        onChange={ onChangeSocialIconColor }
                                    />
                                </Panel>

                                <RangeControl 
                                    label= {__('Gap between icons', 'profile-cards')}
                                    min= { 10 }
                                    max={ 60 }
                                    onChange={ onChangeIconsGap }
                                    value={ socialIconsGap }
                                />
                                
                            </PanelBody>
                           
                            </div>
                        )}
                    </PanelRow>
                )}
    </TabPanel>
            
        </InspectorControls>
            <div { ...useBlockProps() } >

                    <div className={`profile-card align-${align}${hasShadow ? ' has-shadow' : ''}`}  
                      style={{
                         backgroundColor: bgColor, 
                         borderRadius: cardBorderRadius, 
                         width: cardWidth, 
                         height: cardHeight, 
                         paddingTop:  cardPadding.top+'px',
                         paddingBottom: cardPadding.bottom+'px',
                         paddingLeft: cardPadding.left+'px',
                         paddingRight: cardPadding.right+'px',
                         gap: gapBetweenContents+'px'
                         }}
                    >                    
                        { imageUrl && 
                        <img 
                            src={imageUrl} 
                            style={{ 
                                border: `${imageBorder.width} ${imageBorder.style} ${imageBorder.color}`,
                                borderRadius: imageBorderRadius || 0,
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

                        {/* <div className='wp-block-create-block-profile-cards-socialLinks'> */}
                            <ul style={{gap: socialIconsGap+'px'}}>

                                { enableSocialLinks &&

                                    socialLinks.map( (item, index) => {
                                        return (
                                                <li key={index}>
                                                        <Icon style={{ color: socialIconsColor }} icon= {item.icon} />                                                    
                                                </li>
                                        )
                                    } )
                                }
                            </ul>
                        {/* </div> */}
                    </div>
            </div>
       </>
    )
}