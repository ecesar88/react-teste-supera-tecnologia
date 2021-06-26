import { NextFunction, Request, Response } from 'express'

export interface RequestType {
  (req: Request, res: Response, next?: NextFunction): Promise<unknown>
}
