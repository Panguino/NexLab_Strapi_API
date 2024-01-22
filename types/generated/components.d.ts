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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.buttons': ListButtons;
      'list.material-group': ListMaterialGroup;
      'list.materials': ListMaterials;
      'list.school-links': ListSchoolLinks;
      'list.schools': ListSchools;
    }
  }
}
