import express from "express";
import { getActivities, getActivity, patchActivity } from "../controllers/activitiesController";

const router = express.Router();

router.get("/", getActivities);
router.get("/:call_id", getActivity);
router.patch("/:call_id", patchActivity);

export default router;
