import express from "express";
import { getActivities, getActivity, patchActivity, archiveAllActivities, unarchiveAllActivities } from "../controllers/activitiesController";

const router = express.Router();

router.get("/", getActivities);
router.get("/:call_id", getActivity);
router.patch("/:call_id", patchActivity);
router.patch("/archiveAll", archiveAllActivities);
router.patch("/unarchiveAll", unarchiveAllActivities);
export default router;
