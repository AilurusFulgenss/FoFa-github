import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    description: '';
    displayName: 'Card Grid';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    HeroPicture: Schema.Attribute.Component<'shared.hero-banner', true>;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksSectionYoutube extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_youtubes';
  info: {
    description: '';
    displayName: 'Section Youtube';
  };
  attributes: {
    Clip: Schema.Attribute.Component<'shared.youtube-clip', true>;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    Icon: Schema.Attribute.Component<'shared.link', true>;
    map: Schema.Attribute.Component<'shared.map', false>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    Logo: Schema.Attribute.Component<'shared.link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    description: '';
    displayName: 'heroBanner';
  };
  attributes: {
    Image: Schema.Attribute.Media<'files' | 'images'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: '';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SharedMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    map: Schema.Attribute.RichText;
  };
}

export interface SharedYoutubeClip extends Struct.ComponentSchema {
  collectionName: 'components_shared_youtube_clips';
  info: {
    displayName: 'youtubeClip';
  };
  attributes: {
    clip: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.hero': BlocksHero;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.section-youtube': BlocksSectionYoutube;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.card': SharedCard;
      'shared.hero-banner': SharedHeroBanner;
      'shared.link': SharedLink;
      'shared.map': SharedMap;
      'shared.youtube-clip': SharedYoutubeClip;
    }
  }
}
