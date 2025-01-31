import express, {Request, Response, NextFunction} from 'express'


export const  getInfo = (req: Request, res: Response, next: NextFunction) => {

    res.status(200).json({
        email: 'preciousifeanyi.api@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/PreciousAnyi/hng12'
    })
}