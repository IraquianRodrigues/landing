import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr'

export function Hero (){
    return (
        <section className="bg-[#e84c3d] text-white relative overflow-hidden">

        <div>
            <article>

                <div>
                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading 10">seu pet merece cuidado, carinho e atenção especial</h1>
                 <p className=" lg: text-lg">
                   Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas. 
                 </p>

                 <div>
                    <a href="#"
                    className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"
                    >
                        <WhatsappLogo className='w-5 h-5'/>
                        contato via WhatsApp
                    </a>
                 </div>
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>de desconto na primeira compra
                        </p>
                    </div>
                </div>
            </article>
        </div>
          
        </section>
    )
}