import { Response } from "express";

export const successfulResponse = (res: Response, statusCode: number, data: any) => {
    res.status(statusCode).json({ success: true, data });
}

export const unsuccessfulResponse = (res: Response, statusCode: number, message: string) => {
    res.status(statusCode).json({ success: false, message });
}