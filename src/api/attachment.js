import request from "@/uitls/request";

export function searchPage(pageParams){
    return request({
        url:"/attachment/searchPage",
        method:"post",
        params:pageParams,
    })
}

export function upload(formData){
    return request({
        url: '/attachment/upload',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:formData
    })
}
