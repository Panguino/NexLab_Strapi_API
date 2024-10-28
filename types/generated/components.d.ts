import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksDegree extends Schema.Component {
  collectionName: 'components_blocks_degrees';
  info: {
    displayName: 'Degree';
    icon: 'layer';
  };
  attributes: {
    degrees: Attribute.Relation<
      'blocks.degree',
      'oneToMany',
      'api::degree.degree'
    >;
  };
}

export interface BlocksInfoWithCloudImage extends Schema.Component {
  collectionName: 'components_blocks_info_with_cloud_images';
  info: {
    displayName: 'Info with Cloud Image';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    smallHeading: Attribute.String;
    heading: Attribute.String;
    body: Attribute.Blocks;
    Buttons: Attribute.Component<'list.buttons', true>;
    Image: Attribute.Media;
  };
}

export interface BlocksPageHeading extends Schema.Component {
  collectionName: 'components_blocks_page_headings';
  info: {
    displayName: 'Page Heading';
    icon: 'layout';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    body: Attribute.Blocks;
    Buttons: Attribute.Component<'list.buttons', true>;
    Image: Attribute.Media;
  };
}

export interface BlocksRichText extends Schema.Component {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'RichText';
    icon: 'file';
  };
  attributes: {
    body: Attribute.Blocks;
  };
}

export interface BlocksStormChasingSchedule extends Schema.Component {
  collectionName: 'components_blocks_storm_chasing_schedules';
  info: {
    displayName: 'Storm Chasing Schedule';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    Button: Attribute.Component<'list.buttons'>;
    body: Attribute.Blocks;
    Trips: Attribute.Component<'list.trips', true>;
  };
}

export interface BlocksTwoPanelIconInfo extends Schema.Component {
  collectionName: 'components_blocks_two_panel_icon_infos';
  info: {
    displayName: 'Two Panel Icon Info';
    icon: 'grid';
  };
  attributes: {
    iconInfoPanel: Attribute.Component<'list.panel-icon-info', true> &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
  };
}

export interface ListButtons extends Schema.Component {
  collectionName: 'components_list_buttons';
  info: {
    displayName: 'Buttons';
    icon: 'link';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Link: Attribute.String;
    Style: Attribute.Enumeration<['solid', 'outline']> &
      Attribute.DefaultTo<'solid'>;
    target: Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface ListFooterLinks extends Schema.Component {
  collectionName: 'components_list_footer_links';
  info: {
    displayName: 'Footer Links';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    target: Attribute.String;
  };
}

export interface ListGroup extends Schema.Component {
  collectionName: 'components_list_groups';
  info: {
    displayName: 'Group';
    icon: 'bulletList';
  };
  attributes: {
    Heading: Attribute.String;
    Links: Attribute.Component<'list.footer-links', true>;
  };
}

export interface ListMaterialGroup extends Schema.Component {
  collectionName: 'components_list_material_groups';
  info: {
    displayName: 'Material Group';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Materials: Attribute.Component<'list.materials', true>;
  };
}

export interface ListMaterials extends Schema.Component {
  collectionName: 'components_list_materials';
  info: {
    displayName: 'Materials';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    File: Attribute.Media;
    Link: Attribute.String;
  };
}

export interface ListPanelIconInfo extends Schema.Component {
  collectionName: 'components_list_panel_icon_infos';
  info: {
    displayName: 'Panel Icon Info';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    heading: Attribute.String;
    body: Attribute.Text;
    buttonLabel: Attribute.String;
    buttonUrl: Attribute.String;
    ButtonTarget: Attribute.Enumeration<['_self', '_blank']>;
    backgroundImage: Attribute.Media;
  };
}

export interface ListSchoolLinks extends Schema.Component {
  collectionName: 'components_list_school_links';
  info: {
    displayName: 'SchoolLinks';
    icon: 'link';
    description: '';
  };
  attributes: {
    School: Attribute.String;
    Link: Attribute.String;
  };
}

export interface ListSchools extends Schema.Component {
  collectionName: 'components_list_schools';
  info: {
    displayName: 'Schools';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    SchoolList: Attribute.String;
    SchoolLinks: Attribute.Component<'list.school-links', true>;
  };
}

export interface ListTrips extends Schema.Component {
  collectionName: 'components_list_trips';
  info: {
    displayName: 'Trips';
    icon: 'calendar';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    Status: Attribute.String;
    Instructor: Attribute.String;
    Assistant: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.degree': BlocksDegree;
      'blocks.info-with-cloud-image': BlocksInfoWithCloudImage;
      'blocks.page-heading': BlocksPageHeading;
      'blocks.rich-text': BlocksRichText;
      'blocks.storm-chasing-schedule': BlocksStormChasingSchedule;
      'blocks.two-panel-icon-info': BlocksTwoPanelIconInfo;
      'list.buttons': ListButtons;
      'list.footer-links': ListFooterLinks;
      'list.group': ListGroup;
      'list.material-group': ListMaterialGroup;
      'list.materials': ListMaterials;
      'list.panel-icon-info': ListPanelIconInfo;
      'list.school-links': ListSchoolLinks;
      'list.schools': ListSchools;
      'list.trips': ListTrips;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
