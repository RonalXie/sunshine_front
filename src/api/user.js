import request from "@/uitls/request";

export function login(user){
    return request({
        url:"/user/login",
        method:"post",
        data:user,
    })
}
