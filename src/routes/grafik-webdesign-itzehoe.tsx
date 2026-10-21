import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getService, serviceHead } from "@/content/services";

const service = getService("/grafik-webdesign-itzehoe");

export const Route = createFileRoute("/grafik-webdesign-itzehoe")({
  head: () => serviceHead(service),
  component: () => <ServicePage service={service} />,
});
