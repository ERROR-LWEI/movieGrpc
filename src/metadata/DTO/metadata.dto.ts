export class MetadataDto {
    value: string;

    name: string;

    enumName: string;

    parentId: BigInt;

    del: string;

    page: number;

    pageSize: number;
}

export class FindAndUpdateMetadataDto extends MetadataDto {
    id: string;

    ids: string[];

    values: string[];

    names: string[];

    enumNames: string[];

    parentIds: BigInt[];

    createDate: Date;

    updateDate: Date;
}