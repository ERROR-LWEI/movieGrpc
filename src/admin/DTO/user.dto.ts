import { IsEmail, IsNotEmpty, IsString, IsArray, IsDateString, IsOptional } from 'class-validator';

export interface UserInterface {
    id?: string;
    name?: string;
    accountId?: string;
    label?: string;
    info?: string;
    avatar?: string;
    createDate?: DateConstructor;
    updateDate?: DateConstructor; 
    del?: string;
}

export class UpdateuserDto implements UserInterface {

    @IsString()
    id: string;

    @IsString()
    @IsOptional()
    accountId: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    label: string;

    @IsString()
    @IsOptional()
    info: string;

    @IsString()
    @IsOptional()
    avatar: string;

    @IsString()
    @IsOptional()
    del: string;
}

export class FinduserDto implements UserInterface {
    
    @IsString()
    @IsOptional()
    id: string;

    @IsArray()
    @IsOptional()
    ids: string[];

    @IsString()
    @IsOptional()
    accountId: string;

    @IsArray()
    @IsOptional()
    accountIds: string[];

    @IsString()
    @IsOptional()
    name: string;

    @IsArray()
    @IsOptional()
    names: string[];

    @IsString()
    @IsOptional()
    label: string;

    @IsArray()
    @IsOptional()
    labels: string[];

    @IsString()
    @IsOptional()
    del: string;
}
