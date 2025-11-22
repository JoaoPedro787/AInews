import { useEffect, useState } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Storage
import {
  getRefreshStorage,
  setRefreshStorage,
  setRecommendedStorage,
  getRecommendationStorage,
} from "../../utils/recommendation-algorithm";

// Layouts
import Header from "./header";
import Footer from "./footer";
import HeaderModal from "./header-modal";

// Services
import genaiAPI from "../../services/genAI";

// Data
import { Links } from "../../data/header-links";

const Layout = () => {
  const [isOpen, SetModal] = useState(false);

  const [params] = useSearchParams();

  const ModalFunc = () => SetModal(!isOpen);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    isOpen && SetModal(false);

    // Dynamic title
    const title = Links.find(
      (el) => el.link === location.pathname + location.search
    )?.id;

    document.title =
      title === "Home"
        ? "AI News"
        : title || params.get("q") || params.get("section") || "AI News";
  }, [location.key]);

  useEffect(() => {
    const refresh = getRefreshStorage();
    const recommendations = getRecommendationStorage();

    // Preventing from running multiple times when switching pages
    const timeoutId = setTimeout(() => {
      if (!refresh && recommendations?.length >= 9) {
        genaiAPI
          .post("/ai/recommendation", { storage: recommendations })
          .then((res) => {
            setRecommendedStorage(res);
            setRefreshStorage();
          });
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
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
          isOpen && "max-[801px]:max-h-screen"
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
