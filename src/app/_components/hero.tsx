import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
import Imagepet from '../../../public/nobre.png'
import Image from 'next/image'
import local from '../../../public/na.jpg'
import dog from '../../../public/hero-dog.webp'

export function Hero (){
    return (
        <section className="bg-[#fbd404] text-black relative overflow-hidden">

            <div>
                <Image
                  src={Imagepet}
                  alt='foto da loja'
                  fill
                  sizes='100vw'
                  priority
                  quality={100}
                  className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-30 md:hidden'></div>
            </div>

        <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                <div className='space-y-6'>
                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading 10">Aqui o seu cachorro é tratato como Rei</h1>
                 <p className=" lg: text-lg">
                   Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas. 
                 </p>

                 <div>
                    <a href="#"
                    className="bg-black px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit text-white gap-2 hover:scale-105 transition-transform duration-400 ease-in-out"
                    >
                        <WhatsappLogo className='w-5 h-5 text-white'/>
                        Contato via WhatsApp
                    </a>
                 </div>
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra
                        </p>

                       <div className='flex mt-4'>
                        <div className='w-32 hidden lg:block'>
                            <Image
                              src={dog}
                              alt='foto do dog'
                              quality={100}
                              className='object-fill'
                            />
                         </div>
                       </div>

                    </div>
                </div>

                <div className='hidden md:block h-full relative'>
                    <Image
                     src={Imagepet}
                     alt="foto da logo"
                     fill
                     className='object-contain'
                     sizes='(max-width: 768px) ovw, 50vw'
                     quality={100}
                     priority
                    />
                </div>  
         
            </article>
        </div>
          
        </section>
    )
}