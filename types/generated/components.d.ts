import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksDegree extends Struct.ComponentSchema {
  collectionName: 'components_blocks_degrees';
  info: {
    displayName: 'Degree';
    icon: 'layer';
  };
  attributes: {
    degrees: Schema.Attribute.Relation<'oneToMany', 'api::degree.degree'>;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface BlocksInfoWithCloudImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_with_cloud_images';
  info: {
    description: '';
    displayName: 'Info with Cloud Image';
    icon: 'cloud';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    Buttons: Schema.Attribute.Component<'list.buttons', true>;
    heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    smallHeading: Schema.Attribute.String;
  };
}

export interface BlocksPageHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_page_headings';
  info: {
    description: '';
    displayName: 'Page Heading';
    icon: 'layout';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    Buttons: Schema.Attribute.Component<'list.buttons', true>;
    heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'RichText';
    icon: 'file';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface BlocksStaff extends Struct.ComponentSchema {
  collectionName: 'components_blocks_staff';
  info: {
    displayName: 'Staff';
    icon: 'apps';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface BlocksStormChasingSchedule extends Struct.ComponentSchema {
  collectionName: 'components_blocks_storm_chasing_schedules';
  info: {
    description: '';
    displayName: 'Storm Chasing Schedule';
    icon: 'bulletList';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    Button: Schema.Attribute.Component<'list.buttons', false>;
    heading: Schema.Attribute.String;
    Trips: Schema.Attribute.Component<'list.trips', true>;
  };
}

export interface BlocksTwoPanelIconInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_two_panel_icon_infos';
  info: {
    displayName: 'Two Panel Icon Info';
    icon: 'grid';
  };
  attributes: {
    iconInfoPanel: Schema.Attribute.Component<'list.panel-icon-info', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 2;
        },
        number
      >;
  };
}

export interface BlocksVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_videos';
  info: {
    displayName: 'Video';
    icon: 'television';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface ListButtons extends Struct.ComponentSchema {
  collectionName: 'components_list_buttons';
  info: {
    description: '';
    displayName: 'Buttons';
    icon: 'link';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    Style: Schema.Attribute.Enumeration<['solid', 'outline']> &
      Schema.Attribute.DefaultTo<'solid'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface ListFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_list_footer_links';
  info: {
    displayName: 'Footer Links';
    icon: 'bulletList';
  };
  attributes: {
    target: Schema.Attribute.String;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ListGroup extends Struct.ComponentSchema {
  collectionName: 'components_list_groups';
  info: {
    displayName: 'Group';
    icon: 'bulletList';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'list.footer-links', true>;
  };
}

export interface ListMaterialGroup extends Struct.ComponentSchema {
  collectionName: 'components_list_material_groups';
  info: {
    description: '';
    displayName: 'Material Group';
    icon: 'bulletList';
  };
  attributes: {
    Materials: Schema.Attribute.Component<'list.materials', true>;
    Name: Schema.Attribute.String;
  };
}

export interface ListMaterials extends Struct.ComponentSchema {
  collectionName: 'components_list_materials';
  info: {
    description: '';
    displayName: 'Materials';
    icon: 'bulletList';
  };
  attributes: {
    File: Schema.Attribute.Media<'files'>;
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface ListPanelIconInfo extends Struct.ComponentSchema {
  collectionName: 'components_list_panel_icon_infos';
  info: {
    description: '';
    displayName: 'Panel Icon Info';
    icon: 'grid';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    body: Schema.Attribute.Text;
    buttonLabel: Schema.Attribute.String;
    ButtonTarget: Schema.Attribute.Enumeration<['_self', '_blank']>;
    buttonUrl: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ListSchoolLinks extends Struct.ComponentSchema {
  collectionName: 'components_list_school_links';
  info: {
    description: '';
    displayName: 'SchoolLinks';
    icon: 'link';
  };
  attributes: {
    Link: Schema.Attribute.String;
    School: Schema.Attribute.String;
  };
}

export interface ListSchools extends Struct.ComponentSchema {
  collectionName: 'components_list_schools';
  info: {
    description: '';
    displayName: 'Schools';
    icon: 'bulletList';
  };
  attributes: {
    SchoolLinks: Schema.Attribute.Component<'list.school-links', true>;
    SchoolList: Schema.Attribute.String;
  };
}

export interface ListTrips extends Struct.ComponentSchema {
  collectionName: 'components_list_trips';
  info: {
    displayName: 'Trips';
    icon: 'calendar';
  };
  attributes: {
    Assistant: Schema.Attribute.String;
    endDate: Schema.Attribute.Date;
    Instructor: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    Status: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.degree': BlocksDegree;
      'blocks.gallery': BlocksGallery;
      'blocks.info-with-cloud-image': BlocksInfoWithCloudImage;
      'blocks.page-heading': BlocksPageHeading;
      'blocks.rich-text': BlocksRichText;
      'blocks.staff': BlocksStaff;
      'blocks.storm-chasing-schedule': BlocksStormChasingSchedule;
      'blocks.two-panel-icon-info': BlocksTwoPanelIconInfo;
      'blocks.video': BlocksVideo;
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
