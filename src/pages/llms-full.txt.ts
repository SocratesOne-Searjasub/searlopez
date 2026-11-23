import type { APIRoute } from "astro";
import { buildFull } from "../lib/llms";

export const GET: APIRoute = async () =>
  new Response(await buildFull(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
