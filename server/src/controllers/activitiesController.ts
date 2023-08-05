import { Request, Response } from "express";
import { Call } from "../models/call";

/**
 * Retrieves all calls from the database and returns them as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const getActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    const calls = await Call.findAll();
    res.json(calls);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Retrieves a call with the specified ID from the database and returns it as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const getActivity = async (req: Request, res: Response): Promise<void | Response> => {
  try {
    const call = await Call.findByPk(req.params.call_id);
    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    } else {
      res.json(call);
    }
  } catch (error) {
    console.error("Error fetching activity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Updates a call with the specified ID in the database and returns a success message as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const patchActivity = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: req.body.is_archived }, { where: { id: req.params.call_id } });
    res.json({ message: "Call updated successfully" });
  } catch (error) {
    console.error("Error updating activity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Archives all calls in the database and returns a success message as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const archiveAllActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: true }, { where: { is_archived: false } });
    res.json({ message: "All calls archived successfully" });
  } catch (error) {
    console.error("Error archiving all activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Unarchives all calls in the database and returns a success message as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const unarchiveAllActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    Call.update({ is_archived: false }, { where: { is_archived: true } });
    res.json({ message: "All calls unarchived successfully" });
  } catch (error) {
    console.error("Error unarchiving all activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


