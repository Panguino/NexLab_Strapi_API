import type { Schema, Attribute } from '@strapi/strapi';

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
    Style: Attribute.Enumeration<['dark', 'light']>;
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
      'list.buttons': ListButtons;
      'list.material-group': ListMaterialGroup;
      'list.materials': ListMaterials;
      'list.school-links': ListSchoolLinks;
      'list.schools': ListSchools;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
