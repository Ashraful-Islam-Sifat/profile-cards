import {useBlockProps, RichText} from "@wordpress/block-editor";

export default function Save({attributes}) {
    
    const { name, bio, bgColor, imageUrl, cardWidth, cardHeight, cardBorderRadius, hasShadow, imageBorder, align, titleColor, bioColor, imageBorderRadius, imageWidth, imageHeight } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className="profile-card-wrapper">
            <div className={`profile-card align-${align}${hasShadow ? ' has-shadow' : ''}`}  style={{ backgroundColor: bgColor , borderRadius: cardBorderRadius, width: cardWidth, height: cardHeight}}>  
                    { imageUrl &&
                    <img 
                        src={imageUrl} 
                        style={{ 
                            borderColor: imageBorder ? imageBorder.color : undefined, 
                            borderWidth: imageBorder ? imageBorder.width : undefined, 
                            borderStyle: imageBorder ? imageBorder.style : undefined,
                            borderRadius: imageBorderRadius,
                            width: imageWidth,
                            height: imageHeight
                        }}
                    />
                    }
                    { name && <RichText.Content tagName="h4" value={name} style={ {color: titleColor} } /> }
                    { bio && <RichText.Content tagName="p" value={bio} style={ {color: bioColor} } /> }
                </div>
            </div>
        </div>
    )
}