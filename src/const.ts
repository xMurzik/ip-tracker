export const API_KEY = 'at_Q4En18bOTtlmFVpsz6ggYbnAbZRBI';

export const API_CURRENT_POSITION = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

export interface IResponsData {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: Array<string>;
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

export const REG_IP = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/gi;

export const REG_DOMAIN =
  /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
