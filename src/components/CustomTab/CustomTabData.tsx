import CustomTab3 from "./CustomTab3";
export type customDataType = {
  id?: number;
  label: string;
  content: string | React.ReactNode;
};

export const customData: customDataType[] = [
  {
    label: "Tab 1",
    content: "Content for Tab 1",
  },
  {
    label: "Tab 2",
    content: "Content for Tab 2",
  },
  {
    label: "Tab 3",
    content: <CustomTab3 />,
  },
];
