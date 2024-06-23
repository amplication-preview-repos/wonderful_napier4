import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AnalyticsWhereInput = {
  id?: StringFilter;
  likes?: IntNullableFilter;
  postId?: StringNullableFilter;
  shares?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  views?: IntNullableFilter;
};
