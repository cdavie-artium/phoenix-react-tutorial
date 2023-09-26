defmodule ReactTodoListWeb.PageController do
  use ReactTodoListWeb, :controller
  alias ReactTodoList.Todo

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    tasks = Todo.list_tasks()

    render(conn, :home, layout: false, props: Poison.encode!(%{tasks: tasks}))
  end
end
