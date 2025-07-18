import Footer from "../components/footer";
import Header from "../components/Header";

const TermsCondition = () => {
    return (
      <>
        <Header />
        <div className="max-w-4xl p-8 mx-auto font-sans">
          <h1 className="text-3xl font-bold text-blue-900">
            Temukan Kos Nyaman dan Strategis di Sekitarmu!
          </h1>
          <h2 className="mt-2 text-2xl font-bold text-blue-900">
            Kebijakan Privasi
          </h2>

          <p className="mt-6 leading-relaxed">
            Selamat datang di chekost.com. Privasi Anda sangat penting bagi
            kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, melindungi, dan membagikan informasi pribadi Anda saat
            menggunakan layanan kami.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              1. Informasi yang Kami Kumpulkan
            </h3>
            <p className="mt-2">
              Kami dapat mengumpulkan informasi pribadi seperti:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Nama lengkap</li>
              <li>Alamat email</li>
              <li>Nomor telepon</li>
              <li>Lokasi kost yang dicari</li>
              <li>Data penggunaan aplikasi atau website</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              2. Penggunaan Informasi
            </h3>
            <p className="mt-2">
              Informasi yang dikumpulkan akan kami gunakan untuk:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Menyediakan layanan pencarian kost terbaik</li>
              <li>Menghubungi Anda terkait permintaan atau informasi kost</li>
              <li>Meningkatkan fitur dan pelayanan kami</li>
              <li>Mengirimkan informasi promosi (jika Anda menyetujuinya)</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              3. Keamanan Data
            </h3>
            <p className="mt-2">
              Kami berkomitmen menjaga keamanan informasi pribadi Anda. Data
              Anda disimpan dengan aman dan tidak akan dijual kepada pihak
              ketiga.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">4. Cookies</h3>
            <p className="mt-2">
              Website kami menggunakan cookies untuk pengalaman pengguna yang
              lebih baik. Anda dapat menonaktifkan cookies melalui pengaturan
              browser Anda.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">5. Hak Anda</h3>
            <p className="mt-2">Anda memiliki hak untuk:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Mengakses data pribadi Anda</li>
              <li>Memperbarui atau menghapus informasi Anda</li>
              <li>Menarik persetujuan kapan saja</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              6. Perubahan Kebijakan Privasi
            </h3>
            <p className="mt-2">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
              Perubahan akan kami beri tahu melalui email atau pemberitahuan di
              situs kami.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default TermsCondition;
