import type { APIRoute } from "astro";
import { buildIndex } from "../lib/llms";

export const GET: APIRoute = async () =>
  new Response(await buildIndex(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
