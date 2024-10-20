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
          <div 
            style={{
              backgroundImage: `url(${OrageIMG.src})`,
              backgroundSize: "cover",
              width: "100%",
              height: "300px"
            }}
            className="rounded relative transition-all overflow-hidden" 
          >
            <div className="h-full w-full bg-black/70 absolute" />
            <div className=" justify-center relative flex flex-col h-full w-full ">
              <p className="text-white text-center font-bold">Dan Lebih Banyak Lagi</p>
              <button className={cn(
                  "bg-orange-400  px-6 py-1 mx-auto  rounded relative  flex gap-3 items-center group",
                  " transition-all overflow-hidden")
                }>
                  <div className="group-hover:-translate-x-5 transition-all">
                    <p className="text-xl font-bold text-white box-content ">
                      Pesan Sekarang
                    </p>
                  </div>
                  <RightArrow className="w-7 text-white absolute right-0 translate-x-6 group-hover:translate-x-0 transition" />
                </button>
            </div>
          </div>
        </div>
      </section>

      <footer className={cn(
        "md:px-36 md:py-20 md:flex-row",
        "px-10 py-5 gap-6 items-center flex flex-col-reverse justify-between",
        "text-white bg-green-800"
        )}>
        <div className="md:mb-0">
          <h3 className={cn(
            "text-xl md:text-3xl font-bold",
            "text-yellow-400 text-center md:text-start"
          )}>
            AufaJayaSejahtera
          </h3>
          <p className="text-gray text-center md:text-start">2024, AufaJayaSejahtera ©</p>
        </div>
        <div className="flex md:block items-center gap-3">
          <p className="text-center text-sm">Contact Us</p>
          <div className="flex justify-center">

              <a href="https://wa.me/6281217692430" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-full mx-auto"
                  viewBox="0 0 22 22"
                  width="24px"
                  height="24px"
                >
                  <path fill="currentColor" d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
                </svg>
              </a>

              <a href="https://www.instagram.com/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                <svg aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
