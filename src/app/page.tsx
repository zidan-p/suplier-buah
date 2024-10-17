import Image from "next/image";
import { ImgCard } from "~/components/img-card";
import { Navbar } from "~/components/navbar";
import Melon from "~/assets/img/melon.jpg";
import PinapleRotate from "~/assets/img/pinapple-rotate.jpg"

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
              <div className="flex mt-10">
                <button>Hello</button>
                {/* <GotoButton link='https://wa.me/6281217692430' text='hubungi kami' /> */}
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
              {/* <div className="">
              </div> */}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
