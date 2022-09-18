import { axiosInstance } from "..";
import { IFromRequest, IFromResponse } from "../../types/DTO/Home";

enum EFormValues {
  form = "/24991ae5-bfb5-43cf-bcb3-2ad01894a91b",
}

const formValuesAPIs = {
  get: () => {
    return axiosInstance.get<IFromResponse['data']>(EFormValues.form);
  },
};

export const loadInitialForm = async (): Promise<IFromResponse['data']> => {
  try {
    const response = await (await formValuesAPIs.get()).data;

    return response


  } catch (err) {
    throw new Error();
  }
};
