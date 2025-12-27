import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { CustomCard } from "@/components/CustomCard";
import { SalesOverviewChart } from "@/components/SalesOverviewChart";
import { IMAGES } from "@/utils/images";
import ArgonImageCard from "@/components/ArgonImageCard/ArgonImageCard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-fluid">
      <Navbar />

      <div className="mt-4">
        <div className="row g-4">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <CustomCard
              title={"Today's Money"}
              amount={"$53,000"}
              percentage={"+55%"}
              description={"since yesterday"}
              iconClass={"bi bi-backpack4"}
            />
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <CustomCard
              title={"Today's Money"}
              amount={"$53,000"}
              percentage={"+55%"}
              description={"since yesterday"}
              iconClass={"bi bi-award-fill"}
              iconBgClass="bg-warning"
            />
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <CustomCard
              title={"Today's Money"}
              amount={"$53,000"}
              percentage={"+55%"}
              description={"since yesterday"}
              iconClass={"bi bi-app-indicator"} iconBgClass="bg-danger"
            />
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <CustomCard
              title={"Today's Money"}
              amount={"$53,000"}
              percentage={"+55%"}
              description={"since yesterday"}
              iconClass={"bi bi-cart-check"}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4 g-4">
        {/* LEFT: SALES OVERVIEW */}
        <div className="col-xl-7 col-md-6 col-sm-12">
          <SalesOverviewChart />
        </div>

        {/* RIGHT: IMAGE CARD */}
        <div className="col-xl-5 col-md-6 col-sm-12">
          <div className="card h-100 shadow-sm border-0 overflow-hidden">

            <ArgonImageCard />
          </div>
        </div>
      </div>
      <div className="row mt-4 g-4">
        {/* LEFT: SALES OVERVIEW */}
        <div className="col-xl-7 col-md-6 col-sm-12">
          <SalesOverviewChart />
        </div>

        {/* RIGHT: IMAGE CARD */}
        <div className="col-xl-5 col-md-6 col-sm-12">
          <div className="card h-100 shadow-sm border-0 overflow-hidden">

            <ArgonImageCard />
          </div>
        </div>
      </div>

    </div>
  );
}
