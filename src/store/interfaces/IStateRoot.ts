import { IStateApp } from './IStateApp';
import { IStateData } from './IStateData';

export default interface IStateRoot {
  app: IStateApp;
  data: IStateData;
};
