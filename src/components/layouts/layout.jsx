import { useState } from "react";
import { Outlet } from "react-router-dom";

// Layouts
import Header from "./header";
import Footer from "./footer";
import HeaderModal from "./header-modal";

const Layout = () => {
  const [isOpen, SetModal] = useState(false);

  const ModalFunc = () => SetModal(!isOpen);

  return (
    <>
      {/* Container principal
          IsOpen controla o height do container, 
          fazendo o modal ocupar a pagina inteira.
      */}
      <div
        className={`flex flex-col min-h-screen overflow-hidden min-w-[360px] ${
          isOpen && "max-h-screen"
        }`}
      >
        {<Header modalFunc={ModalFunc} />}

        {/* Container para o modal sobrepor */}
        <div className="relative flex flex-col grow">
          {/* Modal da header sobrepõe o Outlet e o Footer */}
          <HeaderModal isOpen={isOpen} closeModal={ModalFunc} />

          {/* Cresce independente do conteudo*/}
          <main className="px-layout py-10 grow [&>*]:max-w-max-layout [&>*]:m-auto z-0 bg-layout-secondary">
            {<Outlet />}
          </main>

          {<Footer />}
        </div>
      </div>
    </>
  );
};

export default Layout;
