export function Checkheading(str){

    return  /^(\*)(\*)(.*)\*$/.test(str)
}

export function Replaceheading(str){
    return str.replace(/^(\*)(\*)|(\*)$/g,'')
}