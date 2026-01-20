import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-10 border-b border-muted-foreground">
          <div className=" flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center justify-center gap-2">
              <div className="bg-accent w-8 h-8 rounded-sm flex items-center justify-center">
                <h4 className="text-primary text-lg font-bold">S</h4>
              </div>
              <h4 className="text-xl text-primary-foreground font-semibold">
                ShopEase
              </h4>
            </Link>
            <p className="text-primary-foreground">
              Your destination for quality products at great prices. Shop with
              confidence.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-lg text-primary-foreground font-semibold">
              Quick Links
            </h4>
            <ul>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  All Products
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Cart
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-lg text-primary-foreground font-semibold">
              Categories
            </h4>
            <ul>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Electronics
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Jewelry
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Men's Clothing
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-lg text-primary-foreground font-semibold">
              Support
            </h4>
            <ul>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Contact Us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  FAQs
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Shipping Info
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={""}
                  className="cursor-pointer text-primary-foreground text-base"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-muted-foreground py-10">
          &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
