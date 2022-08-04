import { $authHost, $host } from "./index";

export const registration = async (username, password) => {
    const response = await $host.post('/auth/registration/', {username, password, role: 'ADMIN'})
    return response
}

export const login = async (username, password) => {
    const response = await $host.post('/auth/login/', {username, password})
    return response
}

export const check = async () => {
    const response = await $host.post('/registration')
    return response
}