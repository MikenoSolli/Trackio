import { redirect } from "next/navigation";
import { deleteSession } from "@/app/_lib/sessions";

export default function LogoutPage() {
    deleteSession(); // Clear the session cookie
    redirect("/login"); // Redirect to the login page

}