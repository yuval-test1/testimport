import { Yyy as TYyy } from "../api/yyy/Yyy";

export const YYY_TITLE_FIELD = "id";

export const YyyTitle = (record: TYyy): string => {
  return record.id?.toString() || String(record.id);
};
