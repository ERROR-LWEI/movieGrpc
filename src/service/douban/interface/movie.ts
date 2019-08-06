export default interface Movie {
    reviews_count?: number;
    videos?: MovieVideo[];
    wish_count?: number;
    original_title?: string;
    blooper_urls?: ArrayConstructor;
    collect_count?: number;
    images?: MovieImage;
    douban_site?: string;
    year?:string;
    popular_comments?: PopularComments[];
    alt?: string;
    id?: string;
    photos_count?: number;
    pubdate?: string;
    title?:string;
    // 是否有资源
    has_video?: boolean;
    languages?: string[];
    writers?: Figure[];
    pubdates?: string[];
    tags?: string[];
    durations?: string[];
    genres?: string[];
    casts?: Figure[];
    // 制片国家和地区
    countries?: string[];
    directors?: Figure[];
    aka?: string[];
    summary?: string;
    // 剧照
    photos?: StagePhoto[];
}

export interface PopularComments {
    rating: Rating;
    useful_count: number;
    author: Author;
    subject_id: string;
    content: string;
    created_at: string;
    id: string;
}

export interface Rating {
    max: number;
    value: number;
    min: number;
}
export interface Author {
    uid: string;
    avatar: string;
    signature: string;
    alt: string;
    id: string;
    name: string
}

export interface MovieImage {
    small: string;
    large: string;
    medium: string;
}

export interface MovieVideo {
    source: MovieVideoSource;
    sample_link: string;
    video_id: string;
    need_pay: boolean;
}

export interface MovieVideoSource {
    literal: string;
    pic: string;
    name: string
}

/**
 * 人物接口
 */
export interface Figure {
    avatars: MovieImage;
    name_en: string;
    name: string;
    alt: string;
    id: string;
}

export interface StagePhoto {
    thumb: string;
    image: string;
    cover: string;
    id: string;
}