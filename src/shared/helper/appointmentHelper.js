import { status } from "@constants/constants";

export const getStatusLabel = (selectedStatus) =>
  status.find((s) => s.value === selectedStatus).label;
