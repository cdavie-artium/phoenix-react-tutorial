import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :react_todo_list, ReactTodoList.Repo,
  username: "postgres",
  password: "Phoenix1234",
  hostname: "localhost",
  database: "react_todo_list_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :react_todo_list, ReactTodoListWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "/k7NBRFNidHqrm2nXFB49lSNJM6wWs4lFHQfSWcdhdI5wz2n7ekMHCUCGPoJvrHs",
  server: false

# In test we don't send emails.
config :react_todo_list, ReactTodoList.Mailer, adapter: Swoosh.Adapters.Test

# Disable swoosh api client as it is only required for production adapters.
config :swoosh, :api_client, false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
