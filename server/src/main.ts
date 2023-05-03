// .js в импортах потому что "module": "NodeNext" в tsconfig.json
import { analytics } from "./modules/analytics.js";

const message = "Hello ahahhahha";

console.log(message);
analytics();
