"use server";
import { prisma } from "@/lib/prisma";

export async function saveContact(formData: FormData) {
  try {
    await prisma.contactForm.create({
      data: {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
        subscribe: !!formData.get("newsletter"),
      },
    });
    return { ok: true }; 
  } catch (err) {
    
    console.error("Server Action Error:", err);
    return { ok: false, error: "DB write failed" }; 
  }
}

