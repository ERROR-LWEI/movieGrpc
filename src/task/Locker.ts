import { Injectable } from "@nestjs/common";
import { ILocker, IScheduleConfig, InjectSchedule, Schedule } from 'nest-schedule';

@Injectable()
export default class Locker implements ILocker {
    private key: string;
    private config: IScheduleConfig;

    constructor(@InjectSchedule() private readonly schedule: Schedule){}

    init(key: string, config: IScheduleConfig): void {
        this.key = key;
        this.config = config;
        console.log('init my locker: ', key, config);
    }

    release(): any {
        console.log('release my locker');
        return false;
    }

    tryLock(): Promise<boolean> | boolean {
        console.log('apply my locker');
        return true;
    }
}