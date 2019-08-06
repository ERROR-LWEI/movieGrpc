
export class MovieDto {

    name: string;

    vindicator: Array<any>;

    vindicatorId: string;

    name_en: string;

    type: Array<String>;

    year: Date;

    site: Array<String>;

    info: string;

    img: string;

    language: Array<String>;
}

export class MovieUpdateDto extends MovieDto {
    constructor() { super() }

    id: string

    del: string

    createDate: DateConstructor

    updateDate: DateConstructor
}