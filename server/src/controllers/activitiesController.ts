import { Request, Response } from "express";
import { Call } from "../models/call";
import { Op } from 'sequelize';
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
 * Archives all calls in the database and returns the updated list of calls as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const archiveAllActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: true }, { where: { is_archived: false } });
    const updatedCalls = await Call.findAll();
    console.log(updatedCalls);
    res.json(updatedCalls);
  } catch (error) {
    console.error("Error archiving all activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Unarchives all calls in the database and returns the updated list of calls as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const unarchiveAllActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: false }, { where: { is_archived: true } });
    const updatedCalls = await Call.findAll();
    res.json(updatedCalls);
  } catch (error) {
    console.error("Error unarchiving all activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Archives a call with the specified ID in the database and returns the updated call as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const archiveActivity = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: true }, { where: { id: req.params.call_id } });
    const updatedCall = await Call.findByPk(req.params.call_id);
    res.json(updatedCall);
  } catch (error) {
    console.error("Error archiving the activity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Unarchives a call with the specified ID in the database and returns the updated call as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const unarchiveActivity = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: false }, { where: { id: req.params.call_id } });
    const updatedCall = await Call.findByPk(req.params.call_id);
    res.json(updatedCall);
  } catch (error) {
    console.error("Error unarchiving the activity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Archives selected calls in the database and returns the updated list of calls as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const archiveSelectedActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: true }, { where: { id: { [Op.in]: req.body.ids } } });
    const updatedCalls = await Call.findAll();
    res.json(updatedCalls);
  } catch (error) {
    console.error("Error archiving selected activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Unarchives selected calls in the database and returns the updated list of calls as a JSON response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response has been sent.
 */
export const unarchiveSelectedActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    await Call.update({ is_archived: false }, { where: { id: { [Op.in]: req.body.ids } } });
    const updatedCalls = await Call.findAll();
    res.json(updatedCalls);
  } catch (error) {
    console.error("Error unarchiving selected activities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

