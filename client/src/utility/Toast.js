import { toast } from "react-toastify"


export const createtost = (msg) => {
    return toast.error(msg)
}

export const createtostSuccess = (msg) => {
    return toast.success(msg)
}