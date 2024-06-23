import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  postId?: SortOrder;
  shares?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
