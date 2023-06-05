import request from "@/uitls/request";

export function insertCategory(category){
    return request({
        url:"/category/save",
        method:"post",
        data:category,
    })
}

export function getCategories(){
    return request({
        url:"/category/searchList",
        method:"post"
    })
}

export function selectPage(pageParams){
    return request({
        url:"/category/searchPage",
        method:"post",
        params:pageParams,
    })
}
