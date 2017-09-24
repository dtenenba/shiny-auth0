fluidPage(
  titlePanel("Client data and query string example"),

  fluidRow(
    column(8,
      h3("session$clientdata values"),
      verbatimTextOutput("summary"),
      h3("You are logged in as"),
      verbatimTextOutput("queryText", placeholder = TRUE)
    )
  )
)
