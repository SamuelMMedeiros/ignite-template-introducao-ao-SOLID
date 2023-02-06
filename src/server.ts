import SwaggerUi from "swagger-ui-express";

import { app } from ".";
import swaggerFile from "./swagger.json";

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
