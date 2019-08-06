export class FigureDto {
    name: string

    name_en: string

    avatars: string

    info: string

    year: DateConstructor

    nationality: string

    movie: any

    createDate: string

    updateDate: string

    del: string
}

export class FigureUpdateDto extends FigureDto {
    id: string

    doubanId: string
}