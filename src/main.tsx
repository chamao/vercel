import "@logseq/libs";
import "virtual:windi.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { logseq as PL } from "../package.json";
import { defineWebComponent } from "./define-web-component";

const magicKey = `__${PL.id}__loaded__`;

function main() {
  const pluginId = logseq.baseInfo.id;
  console.info(`#${pluginId}: MAIN`);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("app")
  );

  logseq.setMainUIInlineStyle({
    zIndex: 20,
    filter: "drop-shadow(0 0 12px rgba(0, 0, 0, 0.2))",
    position: "fixed",
  });

  // @ts-expect-error
  top[magicKey] = true;

  defineWebComponent();
}

// @ts-expect-error
if (top[magicKey]) {
  top.location.reload();
}

logseq.ready(main).catch(console.error);
