import { server } from "./src/server/server";

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
