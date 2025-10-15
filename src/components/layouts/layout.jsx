import { useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import HeaderModal from "./header-modal";

const Layout = () => {
  const [isOpen, SetModal] = useState(false);

  const ModalFunc = () => SetModal(!isOpen);

  return (
    <>
      {/* Apenas um container */}
      <div className="flex flex-col min-h-screen overflow-hidden min-w-[360px]">
        {<Header modalFunc={ModalFunc} />}

        {/* Container para o modal sobrepor */}
        <div className="relative flex flex-col grow">
          {/* Modal da header sobrepõe o Outlet e o Footer */}
          <HeaderModal isOpen={isOpen} />

          {/* Cresce independente do conteudo*/}
          <main className="px-layout py-10 grow [&>*]:max-w-[1280px] [&>*]:m-auto z-0 bg-layout-secondary">
            {<Outlet />}
          </main>

          {<Footer />}
        </div>
      </div>
    </>
  );
};

export default Layout;
