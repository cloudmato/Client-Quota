import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"

//로그인한 유저와 로그인 상태에 대한 정보에 접근할 수 있는 hook
export const useAuth = () => {
    return useContext(AuthContext);
};