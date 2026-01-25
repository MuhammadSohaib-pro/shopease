import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  removeFromCart,
  updateQuantity,
  type CartItem,
} from "@/store/cart/CartSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";

const ProductTile = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className=" flex items-center justify-start gap-3 p-3 my-3 rounded-md border border-border w-full bg-background card-shadow hover:card-shadow-hover">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain aspect-square h-28 w-28 rounded-md"
        />
        <div className="flex flex-col items-start justify-between gap-2 w-full min-w-0">
          <div className="w-full overflow-hidden">
            <h5 className="truncate">{item.title}</h5>
          </div>
          <span className="text-accent text-base font-bold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Button
                size={"icon-sm"}
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    }),
                  )
                }
                variant={"ghost"}
                className="cursor-pointer rounded-sm bg-muted"
              >
                <Minus className="text-primary" />
              </Button>
              <span className="text-primary text-base font-medium">
                {item.quantity}
              </span>
              <Button
                size={"icon-sm"}
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    }),
                  )
                }
                variant={"ghost"}
                className="cursor-pointer rounded-sm bg-muted"
              >
                <Plus className="text-primary" />
              </Button>
            </div>
            <Button
              size={"icon"}
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
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
