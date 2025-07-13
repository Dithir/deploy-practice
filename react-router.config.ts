import type { Config } from "@react-router/dev/config";
import { viteConfig } from "vite.config";

async function prerenderDynamicRoutes(){
  const rowIds = Array.from({length:100},(_,i) => i+1)
  return rowIds.map((id)=>`/rows/${id}`)
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender:true,
 /*  async prerender({getStaticPaths}) {
    return (await prerenderDynamicRoutes()).concat(getStaticPaths())
  }, */
  basename: viteConfig.base,
} satisfies Config;
