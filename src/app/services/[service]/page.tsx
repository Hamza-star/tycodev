import DigitalMarketingService from "@/components/services/DigitalMarketingService";
import MobileService from "@/components/services/MobileService";
import WebService from "@/components/services/WebService";
import { notFound } from "next/navigation";

type Props = {
  params: {
    service: string;
  };
};

// 👇 Make function async
export default async function ServicePage({ params }: Props) {
  const { service } = params; // ✅ OK now in async context

  switch (service) {
    case "web-app":
      return <WebService />;
    case "mobile-app":
      return <MobileService />;
    case "digital-marketing":
      return <DigitalMarketingService />;
    default:
      notFound(); // ✅ fallback
  }
}
