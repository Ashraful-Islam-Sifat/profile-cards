import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

 registerBlockType( 'create-block/profile-card', {
    title: __('Profile Card', 'profile-cards'),
    description: __('A Profile Card Item', 'profile-cards'),
    parent: ['create-block/profile-cards'],
    icon: 'admin-users',
    supports: {
        reusable: false,
        html: false,
        align: [ 'left', 'right', 'center' ]
    },
    attributes: {
        name: {
            type: "string",
            source: "html",
            selector: "h4"
        },
        bio: {
            type: "string",
            source: "html",
            selector: "p"
        },
        bgColor: {
            type: "string",
            default: "rgb(114, 114, 114)"
        },
        imageId: {
            type: "number",
            default: 0
        },
        imageUrl: {
            type: "string",
            default: "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
        },
        cardHeight: {
            type: "number",
            default: 400
        },
        cardWidth: {
            type: "number",
            default: 300
        },
        cardBorderRadius: {
            type: "number",
            default: 10
        },
        cardPadding: {
            type: 'object'
        },
        hasShadow: {
            type: "boolean",
            default: false
        },
        imageHeight: {
            type: "number",
            default: 120
        },
        imageWidth: {
            type: "number",
            default: 120
        },
        imageBorder: {
            type: "object"
        },
        imageBorderRadius: {
            type: "number"
        },
        align: {
            type: 'string',
            default: 'center'
        },
        titleColor: {
            type: 'string'
        },
        bioColor: {
            type: 'string'
        }
    },
    edit:  Edit,
    save:  Save
 } );