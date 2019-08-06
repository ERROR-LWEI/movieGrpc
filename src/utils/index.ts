export function KeyToValue(meta: any, keyVal: string, separator: string) {
    return keyVal.split(separator).map((kv) => meta[kv]).filter((v) => v).join(separator);
}

export function queryOrParams(params: object) {
    const keys = Object.keys(params);
    let str='';
    keys.forEach((key) => {
        str+= `${key}="${params[key]}"`;
    });
    if (str == '' || !str) {
        return null;
    }
    return str;
}