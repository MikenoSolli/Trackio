"use client";
import  handle_logout from "./action"
import { useEffect } from "react"; 

export default async function LogoutPage() {
      useEffect(() => {
    handle_logout();
  }, []);
}