import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoInfoGroup extends Schema.Component {
  collectionName: 'components_info_info_groups';
  info: {
    displayName: 'InfoGroup';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    MoreInfoLink: Attribute.Component<'info.more-info'>;
    Description: Attribute.Component<'info.info'>;
  };
}

export interface InfoInfo extends Schema.Component {
  collectionName: 'components_info_infos';
  info: {
    displayName: 'Info';
    icon: 'file';
  };
  attributes: {
    Details: Attribute.Text;
  };
}

export interface InfoMoreInfo extends Schema.Component {
  collectionName: 'components_info_more_infos';
  info: {
    displayName: 'MoreInfo';
    icon: 'link';
  };
  attributes: {
    MoreInfoLink: Attribute.String;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'info.info-group': InfoInfoGroup;
      'info.info': InfoInfo;
      'info.more-info': InfoMoreInfo;
      'list.material-group': ListMaterialGroup;
      'list.materials': ListMaterials;
    }
  }
}
