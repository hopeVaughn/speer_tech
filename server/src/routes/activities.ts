import express from "express";
import { getActivities, getActivity, patchActivity, archiveAllActivities, unarchiveAllActivities } from "../controllers/activitiesController";

const router = express.Router();

router.get("/", getActivities);
router.get("/activity/:call_id", getActivity);
router.patch("/:call_id", patchActivity);
router.put("/archiveAll", archiveAllActivities);
router.put("/unarchiveAll", unarchiveAllActivities);
export default router;
