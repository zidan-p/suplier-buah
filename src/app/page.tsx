import Image from "next/image";
import { ImgCard } from "~/components/img-card";
import { Navbar } from "~/components/navbar";
import Melon from "~/assets/img/melon.jpg";
import PinapleRotate from "~/assets/img/pinapple-rotate.jpg"
import LeafIcon from "~/assets/icon/leaf.svg";
import LeafOrange from "~/assets/icon/leaf-orange.svg?url";
import RightArrow from "~/assets/icon/right-arrow.svg";
import FeedBack from "~/assets/icon/feedback.svg";
import LabelIcon from "~/assets/icon/label.svg";
import { cn } from "~/libs/tw-merge";
import LoadGoodsIMG from "~/assets/img/load-goods.jpg"
import CrisltallIMG from "~/assets/img/crystal.jpg";
import Orange2IMG from "~/assets/img/orange-2.jpg"
import AvocadoIMG from "~/assets/img/avocado.jpg";
import DragonFruitCOntainer from "~/assets/img/dragon-fruit-conatiner.jpg";
import MangoIMG from "~/assets/img/mango.jpg";
import MangosteenIMG from "~/assets/img/mangosteen.jpg"
import OrageIMG from "~/assets/img/orange.jpg"
import PinenappleIMG from "~/assets/img/pinapple.jpg";
import RambutanIMG from "~/assets/img/rambutan-load.jpg"
import SalakIMG from "~/assets/img/salak-2.jpg"
import WaterMelonIMG from "~/assets/img/watermelon.jpg"


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

      {/* transition section */}
      <section
        style={{
          height: "30px",
          backgroundImage: "url(" + LeafOrange.src + ")",
          backgroundSize: "contain"
        }}
      >
      </section>

        {/* features section */}
      <section className="py-20 px-64">
        <h1 className="text-5xl font-bold text-center text-green-800">
          <span className="text-orange-600">~ </span> 
            Fitur Kami
          <span className="text-orange-600"> ~</span>
        </h1>

        <p className="text-center mb-16">
          apa yang bisa anda dapat dari kami
        </p>
        <div className="flex gap-2">
          
          <div className="border p-5 rounded-xl basis-1/3 shadow-sm">
            <h2 className="flex gap-2 text-lg font-bold   items-center">
              <LeafIcon className="w-5 text-orange-500" />
              <p className="text-green-800">Buah Musiman</p>
            </h2>
            <p className="">
              kami selalu menyiapkan buah musiman terbaik sesuai pasar
            </p>
          </div>
          <div className="border p-5 rounded-xl basis-1/3 shadow-sm">
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
          <div className="border p-5 rounded-xl basis-1/3 shadow-sm">
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

      {/* benefit section */}
      <section className="py-20 px-64">

        <h1 className="text-5xl font-bold text-center text-green-800">
          <span className="text-orange-600">~ </span> 
          Benefit Kami
          <span className="text-orange-600"> ~</span>
        </h1>

        <p className="text-center mb-16">
          Benefit didapatkan  yang bisa membuat bisnis Anda lebih efektif, efisien, dan menguntungkan.
        </p>

        <div className="flex flex-col md:flex-row md:justify-center gap-10 items-center mb-20 md:mb-10">
          <div className="basis-1/2">
            <ImgCard
              title='Pengawasan Kami'
              description='setiap ayam yang kami polihara selalu dalam pengawasan kami 24 jam. kebutuhan mereka selalu kita penuhi untuk hasil produk yang memuaskan'
              img={<Image src={LoadGoodsIMG} alt='ini adalah chicken farm' className="rounded-lg" width={"600"} height={"600"} />}
            />
          </div>
          <div className="basis-1/2">
            <h2 className='text-3xl font-bold mb-8 text-green-800'>Pemasokan Rutin</h2>
            <p className='text-lg'>
            Kami memastikan pasokan kopi Anda tetap lancar dan tersedia sesuai kebutuhan. Dengan sistem distribusi yang andal dan terorganisir, pelanggan tidak perlu khawatir akan kekurangan stok atau ketidakpastian dalam pengiriman. Ketersediaan kopi berkualitas tetap terjaga untuk memenuhi permintaan bisnis atau konsumsi pribadi Anda setiap saat.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse md:justify-center gap-10 items-center mb-20 md:mb-10">
          <div className="basis-1/2">
            <ImgCard
              title='Pengawasan Kami'
              description='setiap ayam yang kami polihara selalu dalam pengawasan kami 24 jam. kebutuhan mereka selalu kita penuhi untuk hasil produk yang memuaskan'
              img={<Image src={CrisltallIMG} alt='ini adalah chicken farm' className="rounded-lg" width={"500"} height={"600"} />}
            />
          </div>
          <div className="basis-1/2">
            <h2 className='text-3xl font-bold mb-8 text-green-800'>Beragam Pilihan</h2>
            <p className='text-lg'>
            Kami menyediakan berbagai pilihan buah, mulai dari buah lokal hingga buah impor dengan kualitas premium. Beragam pilihan ini memungkinkan Anda untuk menyesuaikan produk yang diinginkan berdasarkan kebutuhan pasar, musim, atau preferensi konsumen. Dengan variasi buah yang lengkap, Anda bisa memenuhi kebutuhan pelanggan dari berbagai segmen dengan lebih fleksibel.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center gap-10 items-center mb-20 md:mb-10">
          <div className="basis-1/2">
            <ImgCard
              title='Pengawasan Kami'
              description='setiap ayam yang kami polihara selalu dalam pengawasan kami 24 jam. kebutuhan mereka selalu kita penuhi untuk hasil produk yang memuaskan'
              img={<Image src={Orange2IMG} alt='ini adalah chicken farm' className="rounded-lg" width={"600"} height={"600"} />}
            />
          </div>
          <div className="basis-1/2">
            <h2 className='text-3xl font-bold mb-8 text-green-800'>Komitmen terjaga</h2>
            <p className='text-lg'>
            Kami memastikan bahwa setiap buah yang kami suplai sesuai dengan standar kualitas yang ketat. Dengan kontrol mutu yang terjaga di setiap tahap, dari panen hingga distribusi, kami memberikan jaminan bahwa setiap pengiriman memenuhi ekspektasi. Selain itu, komitmen kami dalam menjaga hubungan yang baik dengan pelanggan juga tercermin dalam pelayanan yang responsif dan profesional.            </p>
          </div>
        </div>

      </section>

      {/* product section */}
      <section className="py-20 px-64">
        <h1 className="text-5xl font-bold text-center text-green-800">
          <span className="text-orange-600">~ </span> 
          Produk Kami
          <span className="text-orange-600"> ~</span>
        </h1>

        <p className="text-center mb-16">
          Benefit didapatkan  yang bisa membuat bisnis Anda lebih efektif, efisien, dan menguntungkan.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div 
            style={{
              backgroundImage: `url(${CrisltallIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Jambu Kristal
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${Orange2IMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Jeruk
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${AvocadoIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Alpukat
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${DragonFruitCOntainer.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Buah Naga
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${MangoIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Mangga
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${MangosteenIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Manggis
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${PinenappleIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Nanas
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${RambutanIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Rambutan
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${SalakIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Salak
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${WaterMelonIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Semangka
            </p>
          </div>
          <div 
            style={{
              backgroundImage: `url(${Melon.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative brightness-75 hover:brightness-100 transition-all group overflow-hidden" 
          >
            <p className={cn(
              "text-lg font-bold py-1 px-2 absolute right-0 left-0 -translate-y-9",
              " group-hover:translate-y-0 transition-all bg-white/45")}>
              Melon
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
