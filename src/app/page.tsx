import Image from "next/image";
import { ImgCard } from "~/components/img-card";
import { Navbar } from "~/components/navbar";
import Melon from "~/assets/img/melon.jpg";
import PinapleRotate from "~/assets/img/pinapple-rotate.jpg"
import LeafIcon from "~/assets/icon/leaf.svg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen sm:h-screen bg-green-600 py-20 px-36 ">
        <div className="flex flex-col justify-center gap-10 items-center h-full container mx-auto">
          <div className="flex flex-col md:flex-row w-full justify-between gap-20 items-center">
            <div className="basis-1/3">
              <h1 className={" text-5xl font-bold text-white mb-2"}>
                Supplier buah 
                <span className='text-yellow-500'> terpercaya </span> 
              </h1>
              <p className=' text-white'>
                menyediakan berbagai buah musiman dan lokal, kustomisasi tergantung kebutuhan anda. Komitmen kami untuk memberikan kulaitas
              </p>
              <div className="mt-10">
                <button className="bg-orange-400 px-3 py-1 rounded block hover:border-yellow-300 border-orange-400 border-4 ">
                  <p className="text-xl font-bold text-white box-content">
                    Pesan Sekarang
                  </p>
                  <small className="text-white">
                    - 16 klien telah percaya kepada kami -
                  </small>
                </button>
              </div>
            </div>
            <div className="basis-2/3">
                <ImgCard
                  img={
                    <Image 
                      className='rounded-2xl hover:shadow-2xl' 
                      src={PinapleRotate} 
                      alt='melon in hand' 
                      width={"800"} 
                      height={"400"}
                    />
                  }
                  title='Produksi Telur'
                  description='Hasil Telur dari kami setiap harinya. rata-rata bisa menghasilkan 2 peti lebih'
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-36">
        <div className="flex gap-2">
          
          <div className="border p-2 rounded">
            <h2 className="flex gap-2 text-lg font-bold   items-center">
              {/* <LeafIcon className="w-5" /> */}
              Buah Musiman
            </h2>
            <p className="">
              kami selalu menyiapkan buah musiman terbaik sesuai pasar
            </p>
          </div>

        </div> 
      </section>

    </main>
  );
}
