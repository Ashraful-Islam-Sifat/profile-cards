import {useBlockProps, RichText} from "@wordpress/block-editor";

export default function Save({attributes}) {
    
    const { name, bio, bgColor, imageUrl, cardBorderRadius, hasShadow, imageBorder, align, titleColor, bioColor } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className="profile-card-wrapper">
                <div className={`profile-card align-${align}${hasShadow ? ' has-shadow' : ''}`} style={{ backgroundColor: bgColor , borderRadius: cardBorderRadius}}>
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
                    { name && <RichText.Content tagName="h4" value={name} style={ {color: titleColor} } /> }
                    { bio && <RichText.Content tagName="p" value={bio} style={ {color: bioColor} } /> }
                </div>
            </div>
        </div>
    )
}