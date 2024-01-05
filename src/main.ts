import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
// import { HttpExceptionFilter } from "./exeption/http.exeption";
import { AllExceptionsFilter } from "./exeption/all.exсeption";
// import { JwtAuthGuard } from "./auth/jwt-auth.guard";

const start = async () => {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Advanced Nest Auth")
    .setDescription("REST API documentation")
    .setVersion("1.0.0")
    .addTag("Nets Postgres Seq Docker")
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/api/docs", app, document);
  // app.useGlobalGuards(JwtAuthGuard); use global gurad
  // app.useGlobalFilters(new HttpExceptionFilter());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter({ httpAdapter }));

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

start();
