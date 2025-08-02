import { Router } from "express";
import { userRouter } from "../app/modules/user/user.router";
export const router = Router();
const modulesRoutes = [
  {
    path: "/users",
    route: userRouter,
  },
];

modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
