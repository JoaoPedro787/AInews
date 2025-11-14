import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Layouts
import Header from "./header";
import Footer from "./footer";
import HeaderModal from "./header-modal";

const Layout = () => {
  const [isOpen, SetModal] = useState(false);

  const ModalFunc = () => SetModal(!isOpen);

  const location = useLocation();

  useEffect(() => {
    isOpen && SetModal(false);
  }, [location.key]);

  return (
    <>
      {/* Container principal
          IsOpen controla o height do container, 
          fazendo o modal ocupar a pagina inteira.
      */}
      <div
        key={location.key}
        className={`flex flex-col min-h-screen overflow-hidden min-w-[360px] ${
          isOpen && "max-h-screen"
        }`}
      >
        {<Header modalFunc={ModalFunc} />}

        {/* Container para o modal sobrepor */}
        <div className="relative flex flex-col grow">
          {/* Modal da header sobrepõe o Outlet e o Footer */}
          <HeaderModal isOpen={isOpen} closeModal={ModalFunc} />

          {/* Cresce independente do conteudo */}
          <main className="px-layout py-10 grow [&>*]:max-w-max-layout [&>*]:m-auto z-0 bg-layout-secondary">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.key}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>

          {<Footer />}
        </div>
      </div>
    </>
  );
};

export default Layout;
