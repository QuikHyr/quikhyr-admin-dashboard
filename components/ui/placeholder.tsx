import { cn } from "@/lib/utils";
import { AlertCircle, Hourglass, Loader2 } from "lucide-react";
import { Button } from "./button";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Loader2 className={cn("mr-4 h-6 w-6 animate-spin text-primary")} />
      <span className="text-2xl font-semibold">Loading...</span>
    </div>
  );
};

const Error = ({ refetch }: { refetch?: () => void }) => {
  return (
    <Button
      variant="ghost"
      className="mt-24 flex flex-1 items-center justify-center"
      onClick={() => refetch && refetch()}
    >
      <AlertCircle className={cn("mr-4 h-6 w-6 text-red-700")} />
      <span className="text-2xl font-semibold">
        An error occured! Please try again later.
      </span>
    </Button>
  );
};

const Empty = ({ title }: { title?: string }) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Hourglass className={cn("mr-4 h-6 w-6 text-secondary")} />
      <span className="text-2xl font-semibold">
        No {title || "data"} found.
      </span>
    </div>
  );
};

export { Loader, Error, Empty };
