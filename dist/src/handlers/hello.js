"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_service_1 = require("../service/hello_service");
class HelloHandler {
    handle(req, res) {
        const helloService = new hello_service_1.HelloService();
        const hello = helloService.sayHello();
        res.send(hello);
    }
}
exports.default = HelloHandler;
//# sourceMappingURL=hello.js.map