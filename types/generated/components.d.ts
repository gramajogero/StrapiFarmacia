import type { Schema, Attribute } from '@strapi/strapi';

export interface GrupoNumGrupoNum extends Schema.Component {
  collectionName: 'components_grupo_num_grupo_nums';
  info: {
    displayName: 'grupoNum';
  };
  attributes: {
    grupoNum: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'grupo-num.grupo-num': GrupoNumGrupoNum;
    }
  }
}
