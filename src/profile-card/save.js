import {useBlockProps, RichText} from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";

export default function Save({attributes}) {
    
    const { name, bio, bgColor, imageUrl, cardWidth, cardHeight, cardPadding, cardBorderRadius, hasShadow, imageBorder, align, titleColor, bioColor, imageBorderRadius, imageWidth, imageHeight, socialLinks, enableSocialLinks, socialIconsColor, socialIconsGap, gapBetweenContents } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {/* <div className="profile-card-wrapper"> */}
            <div className={`profile-card align-${align}${hasShadow ? ' has-shadow' : ''}`}  style={{
                        backgroundColor: bgColor, 
                        borderRadius: cardBorderRadius, 
                        width: cardWidth, 
                        height: cardHeight, 
                        paddingTop:  cardPadding.top+'px',
                        paddingBottom: cardPadding.bottom+'px',
                        paddingLeft: cardPadding.left+'px',
                        paddingRight: cardPadding.right+'px',
                        gap: gapBetweenContents+'px'
                        }}>  

                    { imageUrl &&
                    <img 
                        src={imageUrl} 
                        style={{ 
                            border: `${imageBorder.width} ${imageBorder.style} ${imageBorder.color}`,
                            borderRadius: imageBorderRadius,
                            width: imageWidth,
                            height: imageHeight
                        }}
                    />
                    }
                    { name && <RichText.Content tagName="h4" value={name} style={ {color: titleColor} } /> }
                    { bio && <RichText.Content tagName="p" value={bio} style={ {color: bioColor} } /> }
                            <ul style={{gap: socialIconsGap}}>

                                { enableSocialLinks &&

                                    socialLinks.map( (item, index) => {

                                        return (
                                                <li key={index}>
                                                    <a href={item.link}>
                                                        <Icon style={{color: socialIconsColor}} icon= {item.icon} />
                                                    </a>
                                                                                                            
                                                </li>
                                        )
                                    } )
                                }
                            </ul>
                        {/* </div> */}
                </div>
        </div>
    )
}