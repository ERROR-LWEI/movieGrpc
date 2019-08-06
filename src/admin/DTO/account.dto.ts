import { IsEmail, IsNotEmpty, IsString, IsArray, IsDateString, IsEmpty, IsOptional } from 'class-validator';

export interface AccountInterface {
    id?: string;
    account?: string;
    password?: string;
    terrace?: string;
    terraceId?: string;
    createDate?: DateConstructor;
    updateDate?: DateConstructor;
    del?: string;
}

export class UpdateaccountDto implements AccountInterface {
    @IsString()
    id: string;

    @IsString()
    @IsOptional()
    account: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    del: string;
}

export class AddaccountDto implements AccountInterface {

    @IsString()
    account: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    terrace: string;

    @IsString()
    @IsOptional()
    terraceId: string;
}

export class RemoveaccountDto implements AccountInterface {

    @IsOptional()
    @IsString()
    id: string;
}

export class FindaccountDto implements AccountInterface {

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    account: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    terrace: string;

    @IsString()
    @IsOptional()
    terraceId: string;

    @IsDateString()
    @IsOptional()
    createDate: DateConstructor;

    @IsDateString()
    @IsOptional()
    updateDate: DateConstructor;

    @IsString()
    @IsOptional()
    del: string;

}