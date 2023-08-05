import express from "express";
import { getActivities, getActivity, patchActivity, archiveAllActivities, unarchiveAllActivities, archiveActivity, unarchiveActivity, archiveSelectedActivities, unarchiveSelectedActivities } from "../controllers/activitiesController";

const router = express.Router();

router.get("/", getActivities);
router.get("/activity/:call_id", getActivity);
router.patch("/:call_id", patchActivity);
router.put("/:call_id/archive", archiveActivity);
router.put("/:call_id/unarchive", unarchiveActivity);
router.put("/archiveAll", archiveAllActivities);
router.put("/unarchiveAll", unarchiveAllActivities);
router.put("/archiveSelected", archiveSelectedActivities);
router.put("/unarchiveSelected", unarchiveSelectedActivities);

export default router;
