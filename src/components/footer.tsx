import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3B82F6] text-white">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Kolom Kiri */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-2xl font-bold">chekost.com</h2>
            <p className="mb-4">
              Tempat ternyaman setelah rumah. Rasakan kenyamanan dan kehangatan
              di setiap sudut kost kami!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>

          {/* Kolom Tengah (kosong untuk spasi) */}
          <div className="hidden md:block"></div>

          {/* Kolom Kanan */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  <span className="mr-2">&gt;</span> Pusat bantuan
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  <span className="mr-2">&gt;</span> Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  <span className="mr-2">&gt;</span> Syarat dan Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 text-center border-t border-white/20">
          <p>cheKost © 2025 All-rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;