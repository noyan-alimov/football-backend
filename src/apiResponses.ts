import { Response } from "express";

export const successfulResponse = (res: Response, statusCode: number, specificData: any) => {
    res.status(statusCode).json({ success: true, data: specificData });
}

export const unsuccessfulResponse = (res: Response, statusCode: number, message: string) => {
    res.status(statusCode).json({ success: false, message });
}