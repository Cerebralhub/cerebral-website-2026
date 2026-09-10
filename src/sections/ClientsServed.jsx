import React from "react";
import apc from "../assets/clients_logo/apc.jpg";
import fccpc from "../assets/clients_logo/fccpc.webp";
import gamsu from "../assets/clients_logo/gamsu.webp";
import ichooselife from "../assets/clients_logo/ichooselife.png";
import nerc from "../assets/clients_logo/nerc.png";
import npa from "../assets/clients_logo/npa.jpg";
import total from "../assets/clients_logo/total.png";

const ClientsServed = () => {
  const clientLogos = [fccpc, gamsu, ichooselife, nerc, npa, total, apc];
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-10 text-cerebralGrey-600">
          Clients Served
        </h2>
        <div class="grid justify-items-center gap-8 sm:gap-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-7 ">
          {clientLogos.map(client => (
            <div class="flex justify-center items-center h-full w-20 md:w-28 lg:w-full">
              <img src={client} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsServed;
