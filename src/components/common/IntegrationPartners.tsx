import Image from "next/image";
import { Card } from "../ui/card";

const IntegrationPartners = () => {
  const partners = [
    {
      name: "Discord",
      description: "Coming Soon",
      icon: "/discord.svg"
    },
    {
      name: "Telegram",
      description: "Coming Soon",
      icon: "/telegram.svg"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Integration Partners
          </span>
        </h2>
        <p className="text-gray-600">Connect with your favorite platforms</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <Card key={partner.name} className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 relative mb-4">
              <Image
                src={partner.icon}
                alt={`${partner.name} icon`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
            <p className="text-gray-600">{partner.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default IntegrationPartners; 