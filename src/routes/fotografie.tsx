import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getService, serviceHead } from "@/content/services";

const service = getService("/fotografie");

export const Route = createFileRoute("/fotografie")({
  head: () => serviceHead(service),
  component: () => <ServicePage service={service} />,
});
