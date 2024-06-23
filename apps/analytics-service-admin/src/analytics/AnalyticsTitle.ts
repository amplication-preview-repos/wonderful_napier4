import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "postId";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.postId?.toString() || String(record.id);
};
