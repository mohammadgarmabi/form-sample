type TData = {
  id: number;
  title: string;
  subTitle: string;
  name: string;
};

interface IStaticData {
  data: TData[];
}

const StaticData: IStaticData["data"] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
    subTitle: "Excepteur sint occaecat",
    name: "is_allow_download",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
    subTitle: "Excepteur sint occaecat",
    name: "is_allow_clear",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
    subTitle: "Excepteur sint occaecat",
    name: "is_live_chat_icon",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
    subTitle: "Excepteur sint occaecat",
    name: "is_request_user",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5",
    subTitle: "Excepteur sint occaecat",
    name: "is_receive_email",
  },
];

export type { IStaticData };
export { StaticData };
