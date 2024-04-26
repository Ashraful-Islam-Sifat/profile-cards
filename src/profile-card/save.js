import {useBlockProps, RichText} from "@wordpress/block-editor";

export default function Save({attributes}) {
    
    const { name, bio } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className="profile-card-wrapper">
                <div className="profile-card">
                    <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1714124064~exp=1714124664~hmac=af399b71c35f0c5717b97c08fb691e3a6a600a871cfc40b322863a965790e122"/>
                    { name && <RichText.Content tagName="h4" value={name} /> }
                    { bio && <RichText.Content tagName="p" value={bio} /> }
                </div>
            </div>
        </div>
    )
}