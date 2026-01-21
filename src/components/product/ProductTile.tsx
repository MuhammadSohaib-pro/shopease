import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductTile = () => {
  return (
    <>
      <div className=" flex items-center justify-start gap-3 h-32 p-3 rounded-md border border-border w-full bg-background card-shadow hover:card-shadow-hover">
        <img
          src="https://picsum.photos/140/140"
          alt=""
          className="object-cover h-28 w-28 rounded-md"
        />
        <div className="flex flex-col items-start justify-between gap-2 w-full min-w-0">
          <div className="w-full overflow-hidden">
            <h5 className="truncate">Men Casual Premium shirt</h5>
          </div>
          <span className="text-accent text-base font-bold">$22.30</span>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                className="cursor-pointer rounded-sm bg-muted"
              >
                <Minus className="text-primary" />
              </Button>
              <span className="text-primary text-base font-medium">2</span>
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                className="cursor-pointer rounded-sm bg-muted"
              >
                <Plus className="text-primary" />
              </Button>
            </div>
            <Button
              size={"icon"}
              className="cursor-pointer p-3 rounded-full bg-destructive/30 hover:bg-destructive/45"
            >
              <Trash2 className="text-destructive w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTile;
