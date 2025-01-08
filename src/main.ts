import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

function getTargetDOM(id: string) {
  const d = document;
  return d.getElementById(id) || d.body.appendChild(d.createElement("div"));
}

const app = mount(App, { target: getTargetDOM("app") });

export default app;
