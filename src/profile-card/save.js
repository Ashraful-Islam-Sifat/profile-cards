import {useBlockProps, RichText} from "@wordpress/block-editor";

export default function Save({attributes}) {
    
    const { name, bio, bgColor, imageUrl } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className="profile-card-wrapper">
                <div className="profile-card" style={{ backgroundColor: bgColor }}>
                { imageUrl && <img src={ imageUrl } /> }
                    { name && <RichText.Content tagName="h4" value={name} /> }
                    { bio && <RichText.Content tagName="p" value={bio} /> }
                </div>
            </div>
        </div>
    )
}