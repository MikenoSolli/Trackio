"use client";
import  handle_logout from "./action"
import { useEffect } from "react"; 

export default function LogoutPage() {
      useEffect(() => {
    handle_logout();
  }, []);
}