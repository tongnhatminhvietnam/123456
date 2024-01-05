import RequestUtil from "service/helper/request_util";

const urlMap = {
    base: {
        prefix: "gala/attendee",
        endpoints: {
            check: "check",
        }
    }
};

export const urls = RequestUtil.prefixMapValues(urlMap.base);
