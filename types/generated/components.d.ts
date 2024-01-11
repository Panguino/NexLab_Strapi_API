import type { Schema, Attribute } from '@strapi/strapi';

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
      'list.material-group': ListMaterialGroup;
      'list.materials': ListMaterials;
    }
  }
}
