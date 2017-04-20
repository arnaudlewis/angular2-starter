import { Injectable } from '@angular/core';

export interface PrismicConfiguration {
  apiEndpoint: String;
  accessToken?: String;
  linkResolver: Function;
};

export const CONFIG: PrismicConfiguration = {
  apiEndpoint: 'https://prismicio-angular2-quickstart.prismic.io/api',
  linkResolver() {
    return '/';
  }
};