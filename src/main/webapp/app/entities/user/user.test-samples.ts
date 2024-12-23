import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31707,
  login: 'TYwXL^@nC',
};

export const sampleWithPartialData: IUser = {
  id: 31055,
  login: '-S',
};

export const sampleWithFullData: IUser = {
  id: 26198,
  login: 'nl1',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
