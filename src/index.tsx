import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Padaria",
          type: "withdraw",
          category: "Lanche",
          amount: 400,
          createdAt: new Date("2022-04-12 09:15:00"),
        },
        {
          id: 2,
          title: "Freela",
          type: "deposit",
          category: "Work",
          amount: 7000,
          createdAt: new Date("2021-12-12 17:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
