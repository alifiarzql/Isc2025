import Header from "../components/Header";
import Footer from "../components/footer";

const KampusLainnya = () => {
  const ptn = [
    { name: "UNDIP" },
    { name: "POLINES" },
    { name: "UIN Walisongo" },
    { name: "AKPOL" },
    { name: "POLTEK PU" },
    { name: "P3B/BPL/PIP" },
    { name: "UNNES" },
    { name: "POLIMARIN" },
    { name: "POLKESMAR" },
  ];

  const swasta = [
    { name: "UNIMUS" },
    { name: "Unaki" },
    { name: "Unisbank" },
    { name: "UDINUS" },
    { name: "Untag" },
    { name: "IKIP Veteran Semarang", wide: true },
    { name: "Unpand" },
    { name: "USM" },
    { name: "Unika Soegijapranata / SCU", wide: true },
    { name: "STEKOM" },
    { name: "Unwahas" },
    { name: "UNISSULA" },
    { name: "IKIP PGRI" },
  ];

  return (
    <>
      <Header />/
      <div className="min-h-screen p-4> font-sans bg-white sm:p-8">
        <div className="max-w-3xl mx-36">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Temukan Kos Nyaman dan Strategis di Sekitarmu!
          </h1>
          <h2 className="mt-1 text-xl font-bold text-gray-800 sm:text-2xl">
            Kost sekitar Semarang
          </h2>

          <div className="mt-8">
            <div className="inline-block px-8 py-3 text-lg font-bold text-blue-800 bg-blue-100 rounded-full shadow-lg">
              Perguruan Tinggi Negeri (PTN) & Kedinasan
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3">
              {ptn.map((campus) => (
                <button
                  key={campus.name}
                  className="px-4 py-2 text-gray-700 transition-colors bg-[#ACB9C9] rounded-full shadow-md hover:bg-gray-300"
                >
                  ({campus.name})
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="inline-block px-8 py-3 text-lg font-bold text-blue-800 bg-blue-100 rounded-full shadow-lg">
              Universitas Swasta & Institut
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3">
              {swasta.map((campus) => (
                <button
                  key={campus.name}
                  className={`bg-[#ACB9C9] text-gray-700 py-2 px-4 rounded-full shadow-md hover:bg-gray-300 transition-colors ${
                    campus.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  {campus.wide ? campus.name : `(${campus.name})`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KampusLainnya;
