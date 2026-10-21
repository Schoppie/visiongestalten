import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getService, serviceHead } from "@/content/services";

const service = getService("/business-coaching");

export const Route = createFileRoute("/business-coaching")({
  head: () => serviceHead(service),
  component: () => <ServicePage service={service} />,
});
