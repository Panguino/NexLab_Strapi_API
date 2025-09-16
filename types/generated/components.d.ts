import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAnimatorBackgroundHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_animator_background_heroes';
  info: {
    displayName: 'Animator Background Hero';
    icon: 'sun';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'list.buttons', true>;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjAwNzQ3NzFlLTljMTEtNDZiMC04MDNkLWQ0NDc4Y2RlZjI1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImU2YWIwMzhhIn0.GpIsNENbfZ9D4_CL1Go1xs7h8ycVnXq-rrQLj3c-h4do2kxO5s3S7PfPSn0J2Yg-01PmRsSmyuFPUCB4zakwAQ';
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BlocksClassesOverview extends Struct.ComponentSchema {
  collectionName: 'components_blocks_classes_overviews';
  info: {
    displayName: 'Classes Overview';
    icon: 'bulletList';
  };
  attributes: {
    classes_overview: Schema.Attribute.Component<'list.classes-overview', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

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

export interface BlocksFaqs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faqs';
    icon: 'lightbulb';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'list.buttons', true>;
    faq_tags: Schema.Attribute.Relation<'oneToMany', 'api::faq-tag.faq-tag'>;
    intro_text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjAwNzQ3NzFlLTljMTEtNDZiMC04MDNkLWQ0NDc4Y2RlZjI1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImU2YWIwMzhhIn0.GpIsNENbfZ9D4_CL1Go1xs7h8ycVnXq-rrQLj3c-h4do2kxO5s3S7PfPSn0J2Yg-01PmRsSmyuFPUCB4zakwAQ';
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BlocksFeatureData extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_data';
  info: {
    displayName: 'Feature Data';
    icon: 'bulletList';
  };
  attributes: {
    data_info_panels: Schema.Attribute.Component<'list.data-info-panel', true>;
    intro_text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjAwNzQ3NzFlLTljMTEtNDZiMC04MDNkLWQ0NDc4Y2RlZjI1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImU2YWIwMzhhIn0.GpIsNENbfZ9D4_CL1Go1xs7h8ycVnXq-rrQLj3c-h4do2kxO5s3S7PfPSn0J2Yg-01PmRsSmyuFPUCB4zakwAQ';
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BlocksFeaturePanels extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_panels';
  info: {
    displayName: 'Feature Panels';
    icon: 'apps';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'list.buttons', true>;
    description: Schema.Attribute.Text;
    feature_panel: Schema.Attribute.Component<'list.feature-panel', true>;
    title: Schema.Attribute.String;
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

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
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

export interface BlocksSimpleCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_simple_ctas';
  info: {
    displayName: 'SimpleCTA';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files'>;
    background_full: Schema.Attribute.Boolean;
    button: Schema.Attribute.Component<'list.buttons', true>;
    intro_text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjAwNzQ3NzFlLTljMTEtNDZiMC04MDNkLWQ0NDc4Y2RlZjI1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImU2YWIwMzhhIn0.GpIsNENbfZ9D4_CL1Go1xs7h8ycVnXq-rrQLj3c-h4do2kxO5s3S7PfPSn0J2Yg-01PmRsSmyuFPUCB4zakwAQ';
          output: 'HTML';
          preset: 'rich';
        }
      >;
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

export interface BlocksStormChasingInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_storm_chasing_infos';
  info: {
    displayName: 'Storm Chasing Info';
    icon: 'bulletList';
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

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'quote';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'list.testimonial', true>;
  };
}

export interface BlocksTwoColumnRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_two_column_rich_texts';
  info: {
    displayName: 'Two Column Rich Text';
    icon: 'pencil';
  };
  attributes: {
    left_buttons: Schema.Attribute.Component<'list.buttons', true>;
    left_text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjAwNzQ3NzFlLTljMTEtNDZiMC04MDNkLWQ0NDc4Y2RlZjI1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImU2YWIwMzhhIn0.GpIsNENbfZ9D4_CL1Go1xs7h8ycVnXq-rrQLj3c-h4do2kxO5s3S7PfPSn0J2Yg-01PmRsSmyuFPUCB4zakwAQ';
          output: 'HTML';
          preset: 'rich';
        }
      >;
    right_buttons: Schema.Attribute.Component<'list.buttons', true>;
    right_text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjAwNzQ3NzFlLTljMTEtNDZiMC04MDNkLWQ0NDc4Y2RlZjI1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImU2YWIwMzhhIn0.GpIsNENbfZ9D4_CL1Go1xs7h8ycVnXq-rrQLj3c-h4do2kxO5s3S7PfPSn0J2Yg-01PmRsSmyuFPUCB4zakwAQ';
          output: 'HTML';
          preset: 'rich';
        }
      >;
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

export interface ListClassInfo extends Struct.ComponentSchema {
  collectionName: 'components_list_class_infos';
  info: {
    displayName: 'Class Info';
    icon: 'bulletList';
  };
  attributes: {
    blue_text: Schema.Attribute.String;
    class_description: Schema.Attribute.Text;
    class_name: Schema.Attribute.String;
  };
}

export interface ListClassesOverview extends Struct.ComponentSchema {
  collectionName: 'components_list_classes_overviews';
  info: {
    displayName: 'Classes Overview';
    icon: 'apps';
  };
  attributes: {
    class_info: Schema.Attribute.Component<'list.class-info', true>;
    intro_text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjAwNzQ3NzFlLTljMTEtNDZiMC04MDNkLWQ0NDc4Y2RlZjI1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImU2YWIwMzhhIn0.GpIsNENbfZ9D4_CL1Go1xs7h8ycVnXq-rrQLj3c-h4do2kxO5s3S7PfPSn0J2Yg-01PmRsSmyuFPUCB4zakwAQ';
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ListDataInfoPanel extends Struct.ComponentSchema {
  collectionName: 'components_list_data_info_panels';
  info: {
    displayName: 'Data Info Panel';
    icon: 'chartBubble';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttons: Schema.Attribute.Component<'list.buttons', true>;
    buttons_title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    main_button: Schema.Attribute.Component<'list.buttons', false>;
    title: Schema.Attribute.String;
  };
}

export interface ListFeaturePanel extends Struct.ComponentSchema {
  collectionName: 'components_list_feature_panels';
  info: {
    displayName: 'Feature Panel';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface ListTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_list_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    author_title: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files'>;
    Quote: Schema.Attribute.Text;
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
      'blocks.animator-background-hero': BlocksAnimatorBackgroundHero;
      'blocks.classes-overview': BlocksClassesOverview;
      'blocks.degree': BlocksDegree;
      'blocks.faqs': BlocksFaqs;
      'blocks.feature-data': BlocksFeatureData;
      'blocks.feature-panels': BlocksFeaturePanels;
      'blocks.gallery': BlocksGallery;
      'blocks.image': BlocksImage;
      'blocks.info-with-cloud-image': BlocksInfoWithCloudImage;
      'blocks.page-heading': BlocksPageHeading;
      'blocks.rich-text': BlocksRichText;
      'blocks.simple-cta': BlocksSimpleCta;
      'blocks.staff': BlocksStaff;
      'blocks.storm-chasing-info': BlocksStormChasingInfo;
      'blocks.storm-chasing-schedule': BlocksStormChasingSchedule;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.two-column-rich-text': BlocksTwoColumnRichText;
      'blocks.two-panel-icon-info': BlocksTwoPanelIconInfo;
      'blocks.video': BlocksVideo;
      'list.buttons': ListButtons;
      'list.class-info': ListClassInfo;
      'list.classes-overview': ListClassesOverview;
      'list.data-info-panel': ListDataInfoPanel;
      'list.feature-panel': ListFeaturePanel;
      'list.footer-links': ListFooterLinks;
      'list.group': ListGroup;
      'list.material-group': ListMaterialGroup;
      'list.materials': ListMaterials;
      'list.panel-icon-info': ListPanelIconInfo;
      'list.school-links': ListSchoolLinks;
      'list.schools': ListSchools;
      'list.testimonial': ListTestimonial;
      'list.trips': ListTrips;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
