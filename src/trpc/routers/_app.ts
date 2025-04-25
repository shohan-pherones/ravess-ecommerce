import { authRouter } from "@/modules/auth/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { productsRouter } from "@/modules/products/server/procedures";
import { tagsRouter } from "@/modules/tags/server/procedures";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  categories: categoriesRouter,
  tags: tagsRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
