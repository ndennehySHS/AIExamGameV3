const MODEL_JUDGE_ENV_VARS = {
  JUDGE_LLM: "",
  JUDGE_EMBEDDING_MODEL: "",
};
export const EVAL_ENV_VARS = {
  ...MODEL_JUDGE_ENV_VARS,
};

export const TRACING_ENV_VARS = {
  ...MODEL_JUDGE_ENV_VARS,
};

export const SLACK_ENV_VARS = {
  SLACK_BOT_TOKEN: "",
  SLACK_COMMENT_CONVERSATION_ID: "",
};
