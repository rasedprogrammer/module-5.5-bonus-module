// import { add as addTwo, subtract } from "./module";
// import * as Methods from "./module";
// const add = (param1: number, param2: number): number => {
// 	return param1 + param2;
// };
// const result1 = subtract(4, 3);
// const result1 = Methods.subtract(4, 3);

// Default Import
// import divide from "./module";
// const result2 = divide(4, 3);

// Default Import With Normal Import
// import average, { add as addTwo, subtract } from "./module";
// const result3 = average(4, 3);

// Multiple Default Module Import
// import allDefaultModules from "./module";
// const result3 = allDefaultModules.add(4, 3);

// Complex & Import from multiple file Default Import Option
import add from "./utils/add";
// We can alos change default import function name as well as i want
import minus from "./utils/substract";
import divide from "./utils/divide";
