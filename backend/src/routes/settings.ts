import { Router, Request, Response } from "express";

const router = Router();

router.get("/settings", (req: Request, res: Response) => {
  const hostname =
    (req.headers["x-forwarded-host"] as string) ||
    req.headers["host"] ||
    "localhost";
  res.json({
    hostname,
    version: "1.0.0",
  });
});

export default router;
