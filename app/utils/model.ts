type StrapiResponse<T> = {
  data: T;
  message: string;
};

export interface Attribute {
  url: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
}

export interface Data {
  id: number;
  attributes: Attribute;
}

export interface Picture {
  data: Data;
}

export interface Button {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  type: string;
}

export interface ContentSection {
  id: number;
  __component: string;
  title: string;
  description: string;
  picture: Picture;
  buttons: Button[];
}

export interface Attribute {
  shortName: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  heading?: any;
  description?: any;
  contentSections: ContentSection[];
}

export interface Data {
  id: number;
  attributes: Attribute;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  limit: number;
  start: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface RootObject {
  data: Data[];
  meta: Meta;
}

export interface ContactProps {
  id: string;
  officeAddress: string;
  officeEmail: string;
  officePhoneNumber1: string;
  officePhoneNumber2: string;
  officePhoneNumber3: string;
  telegramId: string;
  whatsAppId: string;
  openHours: string;
  openDays: string;
}

export interface ShortProject {
  id: string;
  attributes: {
    title: string;
    description: string;
    shortDescription: string;
    square: string;
    roomAmount: number;
    bedroomAmount: number;
    bathroomAmount: number;
    location: string;
    propertyType: string;
    developer: string;
    tags: Tag[];
    disposition: Picture;
    exteriorGallery: Picture[];
    interiorGallery: Picture[];
    address: string;
    price: string;
    cardHeaderTitle: string;
    area: string;
  };
}

export interface Tag {
  id: number;
  name: string;
}
