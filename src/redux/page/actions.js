import {
  PAGE_SCROLL,
  PAGE_END
} from "./types";

export const pageIncrement = () => {
  return {
    type: PAGE_SCROLL,
  }
};
