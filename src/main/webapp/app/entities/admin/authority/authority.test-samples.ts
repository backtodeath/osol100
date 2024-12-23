import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '50075121-0a59-4ab0-aaa7-6f28f1a48da6',
};

export const sampleWithPartialData: IAuthority = {
  name: 'd83f10fd-66ac-4a61-82e8-32f876b1ba2a',
};

export const sampleWithFullData: IAuthority = {
  name: 'c37b93e3-e2b3-424e-b227-104a5bdeb125',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
