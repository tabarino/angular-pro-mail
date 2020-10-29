import { Request, Response } from 'express';
import { MESSAGES } from './db-data';

export function getMessages(req: Request, res: Response) {
    const queryParams = req.query;
    const folder = queryParams.folder;
    const messages = Object.values(MESSAGES);

    if (folder) {
        // @ts-ignore
        const folderMessages = messages.filter(searchMessages => searchMessages.folder == folder);
        res.status(200).json({ payload: folderMessages });
    } else {
        res.status(200).json({ payload: Object.values(MESSAGES) });
    }
}

export function getMessageById(req: Request, res: Response) {
    const messageId = req.params.id;
    const messages: any = Object.values(MESSAGES);
    const message = messages.find(searchMessage => searchMessage.id == messageId);

    res.status(200).json(message);
}
