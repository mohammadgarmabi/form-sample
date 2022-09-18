/// <reference path="axios/index.d.ts" />
import { AxiosStatic, AxiosRequestConfig } from "axios";

declare module "axios" {
  type AxiosStatic = AxiosStatic;
  interface AxiosRequestConfig extends AxiosRequestConfig {}
}
