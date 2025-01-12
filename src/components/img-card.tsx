import Image from 'next/image'
import { ReactElement } from 'react'


interface ImgCardProps{
  img: ReactElement<typeof Image>;
  title?: string;
  description?: string;
  rotate?: boolean;
  showText?: boolean;
}


export function ImgCard({rotate = true, showText = false,...props}: ImgCardProps){
  return (
    <div className={`
      relative transition overflow-hidden rounded-xl w-fit
      group shadow-xl p-1 bg-white ${rotate ? "rotate-2 hover:rotate-0" : ""}`
    }>
      {props.img}
      <div className={`transition absolute bottom-0 right-0 left-0 p-2 bg-white/70 ${showText ? "" : "translate-y-36 group-hover:translate-y-0"}`}>
        <h5 className='text-lg font-bold'>{props.title}</h5>
        <p className='text-xs'>{props.description}</p>
      </div>
    </div>
  )
}