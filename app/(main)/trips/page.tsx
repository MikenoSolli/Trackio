import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function TripsPage() {
  const drivers = await prisma.driver.findMany();

  return (
    <div>
      Trip Management
    </div>
  );
}