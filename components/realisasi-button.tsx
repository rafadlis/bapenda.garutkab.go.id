"use client";

import { QuestionIcon } from "@phosphor-icons/react/dist/ssr";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

async function fetchRealisasi(): Promise<{ total: string }> {
  const response = await fetch("/api/realisasi");

  if (!response.ok) {
    throw new Error("Failed to fetch realisasi data");
  }

  return response.json();
}

function formatCurrency(value: string): string {
  const num = Number.parseFloat(value);

  if (Number.isNaN(num)) {
    return "0";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(num);
}

export function RealisasiButton() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["realisasi"],
    queryFn: fetchRealisasi,
    refetchInterval: 30_000,
  });

  let displayValue = formatCurrency(data?.total ?? "0");

  if (isLoading) {
    displayValue = "Memuat...";
  } else if (isError) {
    displayValue = "Gagal memuat";
  }

  return (
    <ButtonGroup>
      <Button className="border-border" variant="secondary">
        Terkumpul
      </Button>
      <Button variant="outline">
        <span className="font-mono">{displayValue}</span>
        <Badge variant="secondary">
          <span aria-hidden="true" className="relative inline-flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-green-700/75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-700" />
          </span>
          <span className="ml-1">Live</span>
        </Badge>
      </Button>
      <Button variant="outline">
        <QuestionIcon />
      </Button>
    </ButtonGroup>
  );
}
