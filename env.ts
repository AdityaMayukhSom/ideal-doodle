import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  POSTS_DIR: str(),
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),
});

export default env;
