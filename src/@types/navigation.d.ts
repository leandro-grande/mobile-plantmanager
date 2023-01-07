import { PlantProps } from "../storage/getPlant";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      UserIdentification: undefined;
      Confirmation: {
        title: string;
        subtitle: string;
        nextpage: string;
        buttonTitle: string;
      },
      PlantSelect: undefined
      PlantSave: {
        plant: PlantProps
      }
      MyPlants: undefined;
      NovaPlanta: undefined;
    }
  }
}
