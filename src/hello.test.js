"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hello_service_1 = require("./src/services/hello_service");
describe("Test hello world service", () => {
    it("should return hello world", () => {
        const helloService = new hello_service_1.HelloService();
        const result = helloService.sayHello();
        (0, chai_1.expect)(result).to.equal("Hello, world! from service");
    });
});
//# sourceMappingURL=hello.test.js.map