import Image from "next/image";
import { ImgCard } from "~/components/img-card";
import { Navbar } from "~/components/navbar";
import Melon from "~/assets/img/melon.jpg";
import PinapleRotate from "~/assets/img/pinapple-rotate.jpg"
import LeafIcon from "~/assets/icon/leaf.svg";
import RightArrow from "~/assets/icon/right-arrow.svg";
import FeedBack from "~/assets/icon/feedback.svg";
import LabelIcon from "~/assets/icon/label.svg";
import { cn } from "~/libs/tw-merge";

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
                <button className={cn(
                  "bg-orange-400  px-6 py-1 rounded relative flex gap-3 items-center group",
                  " transition-all overflow-hidden")
                }>
                  <div className="group-hover:-translate-x-5 transition-all">
                    <p className="text-xl font-bold text-white box-content ">
                      Pesan Sekarang
                    </p>
                    <small className="text-white ">
                      - 16 klien telah percaya kepada kami -
                    </small>
                  </div>
                  <RightArrow className="w-7 text-white absolute right-0 translate-x-6 group-hover:translate-x-0 transition" />
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

      <section className="py-20 px-44">
        <div className="flex gap-2">
          
          <div className="border p-2 rounded-xl basis-1/3 shadow">
            <h2 className="flex gap-2 text-lg font-bold   items-center">
              <LeafIcon className="w-5 text-orange-500" />
              <p className="text-green-800">Buah Musiman</p>
            </h2>
            <p className="">
              kami selalu menyiapkan buah musiman terbaik sesuai pasar
            </p>
          </div>
          <div className="border p-2 rounded-xl basis-1/3 shadow">
            <h2 className="flex gap-2 text-lg font-bold   items-center">
              <FeedBack className="w-5 text-orange-500" />
              <p className="text-green-800">
                Permintaan
              </p>
            </h2>
            <p className="">
              Kami menerima kustomisasi permintaan untuk bisnis anda.
            </p>
          </div>
          <div className="border p-2 rounded-xl basis-1/3 shadow">
            <h2 className="flex gap-2 text-lg font-bold   items-center">
              <LabelIcon className="w-5 text-orange-500" />
              <p className="text-green-800">
                Buah Import
              </p>
            </h2>
            <p className="">
            Pun Kami juga menyediakan buah import sesuai dengan pesanan anda
            </p>
          </div>

        </div> 
      </section>

    </main>
  );
}
