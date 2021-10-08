import {
    PAGE_SCROLL, PAGE_END
} from "../page/types";

const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case PAGE_SCROLL:
            return state + 1;
        case PAGE_END:
            return state;
        default:
            return state;
    }
};
export default pageReducer;