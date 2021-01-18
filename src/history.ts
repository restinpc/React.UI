import { createBrowserHistory } from "history";

const history = createBrowserHistory();
document["history"] = history;

export default history;
