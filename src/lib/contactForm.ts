"use server"; // Server-side utility (hook-like)

import { prisma } from "@/lib/prisma";

export async function useContactFormCount() {
  return prisma.contactForm.count();
}
