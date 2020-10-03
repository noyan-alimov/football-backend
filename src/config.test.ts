import { Server } from "http";
import { app } from "./index";

let server: Server;

beforeAll(done => {
    server = app.listen(done);
});

afterAll(done => {
    server.close(done);
});