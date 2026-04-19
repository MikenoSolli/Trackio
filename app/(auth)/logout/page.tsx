import { redirect } from "next/navigation";
import { deleteSession } from "@/app/_lib/sessions";

export default async function LogoutPage() {
    await deleteSession(); // Clear the session cookie
    redirect("/"); // Redirect to the login page

}