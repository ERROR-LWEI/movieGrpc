import { Controller, UseInterceptors, UsePipes, ValidationPipe, UseFilters } from '@nestjs/common';
import { FigureService } from './figure.service';
import { GrpcMethod } from '@nestjs/microservices';
import { FigureDto } from './dto/Figure.dto';
import ResIntercept from '../middleware/Intercept/ResIntercept';
import AllExceptions from '../middleware/Exceptions/AllExceptions';

@Controller('figure')
export class FigureController {
    constructor(
        private readonly figureService: FigureService
    ){}

    /**
     * 添加人物信息
     * @param data
     * @param metadata
     */
    @GrpcMethod('MovieGrpcService', 'AddFigure')
    @UseInterceptors(new ResIntercept<any>())
    @UsePipes(new ValidationPipe())
    @UseFilters(new AllExceptions())
    async addFigure(data: FigureDto, metadata: any) {
        return await this.figureService.add(data);
    }
}
