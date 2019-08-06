import { Injectable } from "@nestjs/common";
import { NestSchedule, Cron, UseLocker } from "nest-schedule";
import Locker from './Locker';
import { MLogger } from './../mlogger/mlogger.service';
import { MovieService } from './../movie/movie.service';
import { getMovieProId } from "src/service/douban";

@Injectable()
export default class ScheduleService extends NestSchedule {
    constructor(
        private readonly mLogger: MLogger,
        private readonly movieService: MovieService
    ){ super() }


    @Cron('30 * * * * *', {
        startTime: new Date(), 
        endTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    })
    @UseLocker(Locker)
    async cronJob() {
        this.mLogger.log('定时任务执行', JSON.stringify(new Date()));
        const _data = await getMovieProId('1');
        console.log(_data) 
        console.log('executing cron job', new Date());
    }
}