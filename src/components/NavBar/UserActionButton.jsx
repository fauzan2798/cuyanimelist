
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async() => {
    const user = await authUserSession()

    const actionLabel = user ? "Logout" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2">
            {
                !user ? null : <Link href={"/users/dashboard"} className="py-1">Dashboard</Link>
            }
            <Link 
                href={actionURL} 
                className="bg-color-dark text-color-accent py-1 px-12"
            >
            {actionLabel}
            </Link>
        </div>
    )
}

export default UserActionButton
