import Header from "../components/Header";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* Search Section */}
      <div className="py-12">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex justify-start">
            <div className="relative">
              <input
                type="text"
                placeholder="Mau cari dimana?"
                className="px-4 py-3 pl-12 border border-blue-300 rounded-full w-80 focus:outline-none focus:border-blue-500"
              />
              <svg
                className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            Temukan Kos Nyaman dan Strategis di Sekitarmu!
          </h1>
          <p className="text-lg italic text-gray-600">
            "Ratusan pilihan kos terverifikasi, dekat kampus dan tempat kerja.
            <br />
            Booking cepat dan mudah!"
          </p>
        </div>

        {/* Location Cards Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-2xl font-bold text-center">
            Tahukah kamu? Setiap hari punya kisah bersejarah!
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Lawang Sewu Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-xl font-bold">Lawang Sewu</h3>
              <p className="mb-4 text-sm text-gray-600">
                "Lawang Sewu terletak di kawasan Tugu Muda, Semarang, dan
                merupakan bangunan bersejarah peninggalan Belanda. Dibangun
                tahun 1904, bangunan ini dulunya 'seribu pintu' karena memiliki
                banyak pintu dan jendela. Sekarang bangunan ini difungsikan
                sebagai museum dan destinasi wisata edukatif yang melestarikan
                sejarah perkembangan."
              </p>
              <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                Lihat Detail
              </button>
            </div>

            {/* Museum Kota Lama Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <div className="mb-4">
                <img
                  src="/api/placeholder/300/150"
                  alt="Museum Kota Lama"
                  className="object-cover w-full h-32 rounded-lg"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold">Museum Kota Lama</h3>
              <p className="mb-4 text-sm text-gray-600">
                "Museum Kota Lama terletak di kawasan Kota Lama Semarang dan
                diresmikan pada tahun 2021. Museum ini menampilkan bangunan
                kolonial yang memadukan arsitektur Eropa dengan sentuhan masa
                kolonial hingga modern. Dilengkapi dengan teknologi interaktif,
                museum ini menjadi sarana edukasi dan pelestarian budaya kota."
              </p>
              <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                Lihat Detail
              </button>
            </div>

            {/* Kota Lama Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <div className="mb-4">
                <img
                  src="/api/placeholder/300/150"
                  alt="Kota Lama"
                  className="object-cover w-full h-32 rounded-lg"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold">Kota Lama</h3>
              <p className="mb-4 text-sm text-gray-600">
                "Kota Lama berada di pusat Semarang dan merupakan kawasan
                bersejarah peninggalan kolonial Belanda. Dijuluki 'Little
                Netherland', kawasan ini dipenuhi bangunan bergaya Eropa yang
                eksotis. Sekarang menjadi destinasi wisata budaya serta sarana
                edukasi dan pelestarian sejarah kota."
              </p>
              <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>

        {/* Tentang CheKost Section */}
        <div className="mb-16">
          <div className="p-8 text-white bg-[#5294FF] rounded-3xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold">Tentang CheKost </h2>
            </div>

            <div className="p-8 text-center bg-white/20 backdrop-blur-sm rounded-2xl">
              <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                <p>
                  Chekost menyediakan sistem terpusat yang mempertemukan pencari
                  kost dan pemilik properti dalam satu platform yang aman,
                  modern, dan mudah digunakan.
                </p>
                <p>
                  Mahasiswa dapat melakukan pencarian berdasarkan lokasi, harga,
                  fasilitas, dan ulasan dari pengguna lain, serta melakukan
                  pemesanan secara langsung melalui aplikasi.
                </p>
                <p>
                  Di sisi lain, pemilik kost dapat memasarkan properti mereka,
                  mengelola penyewa, serta memantau statistik sewa dengan lebih
                  profesional dan efisien.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* University Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-3xl font-bold text-center text-blue-600">
            Kampus yang bisa anda temukan!
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {/* UNIMUS */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <span className="text-sm font-bold text-white">UN</span>
                </div>
                <span className="text-lg font-bold text-blue-600">UNIMUS</span>
              </div>
            </div>

            {/* UNDIP */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full">
                  <span className="text-sm font-bold text-white">UD</span>
                </div>
                <span className="text-lg font-bold text-blue-600">UNDIP</span>
              </div>
            </div>

            {/* UNNES */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                  <span className="text-sm font-bold text-white">UN</span>
                </div>
                <span className="text-lg font-bold text-blue-600">UNNES</span>
              </div>
            </div>

            {/* UPGRIS */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full">
                  <span className="text-sm font-bold text-white">UP</span>
                </div>
                <span className="text-lg font-bold text-blue-600">UPGRIS</span>
              </div>
            </div>

            {/* UNIKA */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                  <span className="text-sm font-bold text-white"></span>
                </div>
                <span className="text-lg font-bold text-blue-600">
                  UNISSULA
                </span>
              </div>
            </div>

            {/* UDINUS */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full">
                  <span className="text-sm font-bold text-white">UD</span>
                </div>
                <span className="text-lg font-bold text-blue-600">USM</span>
              </div>
            </div>

            {/* UNISSULA */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full">
                  <span className="text-sm font-bold text-white">UD</span>
                </div>
                <span className="text-lg font-bold text-blue-600">Udinus</span>
              </div>
            </div>

            {/* UNSOED */}
            <div className="flex items-center justify-center p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
                  <span className="text-sm font-bold text-white"></span>
                </div>
                <span className="text-lg font-bold text-blue-600">POLINES</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a href="">Lihat lainnya</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
