import request from "@/uitls/request";

export function insertTag(tag){
    return request({
        url:"/tag/save",
        method:"post",
        data:tag,
    })
}

export function getTags(){
    return request({
        url:"/tag/searchList",
        method:"post"
    })
}

export function selectPage(pageParams){
    return request({
        url:"/tag/searchPage",
        method:"post",
        params:pageParams,
    })
}
