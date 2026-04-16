import { prisma } from "@/lib/prisma";

export default async function DriversPage() {
  const drivers = await prisma.driver.findMany();

  return (
    <div>
      <h1>Drivers</h1>
      {drivers.map((d) => (
        <div key={d.id}>{d.name}</div>
      ))}
    </div>
  );
}