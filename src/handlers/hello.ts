import { Request, Response } from 'express';
import { HelloService } from '../service/hello_service';

class HelloHandler {

    handle(req: Request, res: Response) {
        const helloService = new HelloService(); 
        const hello = helloService.sayHello();
        res.send(hello)
    }
    
}

export default HelloHandler;