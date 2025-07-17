import { FiSearch, FiUser, FiInfo } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/footer";

const PusatBantuan: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl p-8 mx-auto font-sans">
        <h1 className="text-2xl font-bold text-gray-800">
          Temukan Kos Nyaman dan Strategis di Sekitarmu!
        </h1>
        <h2 className="mt-1 text-4xl font-bold text-gray-800">Pusat Bantuan</h2>
        <p className="mt-4 text-lg text-gray-600">
          Selamat datang di Pusat Bantuan chekost.com! Kami siap membantu kamu
          menemukan kost terbaik dan menjawab pertanyaan seputar penggunaan
          layanan kami.
        </p>

        <div className="relative mt-6">
          <div className="flex items-center px-4 py-2 border border-blue-300 rounded-full">
            <FiSearch className="text-blue-500" />
            <input
              type="text"
              placeholder="Perlu Bantuan??"
              className="w-full ml-2 bg-transparent outline-none"
            />
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Anda bisa telusuri kategori informasi sesuai tipe akun berikut ini
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 text-center md:grid-cols-2">
          <div>
            <div className="h-40 transition-shadow bg-pink-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg"></div>
            <p className="mt-2 font-semibold text-gray-700">Penyewa Kost</p>
          </div>
          <div>
            <div className="h-40 transition-shadow bg-orange-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg"></div>
            <p className="mt-2 font-semibold text-gray-700">Pemilik Kost</p>
          </div>
        </div>

        <h3 className="mt-16 text-3xl font-bold text-gray-800">
          Paling Sering dicari
        </h3>

        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
          {/* Card Akun Pemilik */}
          <div className="flex flex-col items-center p-6 text-center border border-gray-200 rounded-lg shadow-md bg-blue-50">
            <FiUser className="text-3xl text-blue-500" />
            <h4 className="mt-2 font-bold text-blue-800">Akun Pemilik</h4>
            <a href="#" className="mt-2 text-sm text-blue-600 hover:underline">
              Saya lupa password pemilik kost
            </a>
            <a
              href="#"
              className="pt-4 mt-auto text-xs text-gray-500 hover:underline"
            >
              Selengkapnya
            </a>
          </div>

          {/* Card Akun Penyewa */}
          <div className="flex flex-col items-center p-6 text-center border border-gray-200 rounded-lg shadow-md bg-blue-50">
            <FiUser className="text-3xl text-blue-500" />
            <h4 className="mt-2 font-bold text-blue-800">Akun Penyewa</h4>
            <a href="#" className="mt-2 text-sm text-blue-600 hover:underline">
              Saya lupa password penyewa kost
            </a>
            <a
              href="#"
              className="pt-4 mt-auto text-xs text-gray-500 hover:underline"
            >
              Selengkapnya
            </a>
          </div>

          {/* Card Kebijakan Privasi */}
          <div className="flex flex-col items-center p-6 text-center border border-gray-200 rounded-lg shadow-md bg-blue-50">
            <FiInfo className="text-3xl text-blue-500" />
            <h4 className="mt-2 font-bold text-blue-800">Kebijakan Privasi</h4>
            <a href="#" className="mt-2 text-sm text-blue-600 hover:underline">
              Kebijakan Privasi chekost
            </a>
            <a
              href="#"
              className="pt-4 mt-auto text-xs text-gray-500 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PusatBantuan;
