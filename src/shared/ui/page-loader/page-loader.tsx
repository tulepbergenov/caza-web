import { Spinner } from "@/shared/ui/spinner";

export function PageLoader() {
  return (
    <div className="flex h-full items-center justify-center">
      <Spinner className="size-8 animate-spin text-current" />
    </div>
  );
}
