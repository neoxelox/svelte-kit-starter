import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export default dayjs;
