import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      events: require.resolve('events/'), // ← вот это добавляем
    },
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFields: ['index'],
    alias: {},
  };
}
