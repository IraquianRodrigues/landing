import Image from "next/image"
import about1Img from "../../../public/about-1.png"
import about2Img  from "../../../public/about-2.png"
import { Check } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About(){
    return(
        <section className="bg-[#fdf6ec] py-16 ">
            <div className="container mx-auto grid cols-1 ld: grid-cols-2 gap-12 items-center">

              <div className="relative">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                    src={about1Img}
                    alt="foto do cachorro"
                    fill
                    quality={100}
                    priority
                    className="object-cover hover:scale-110 duration-300"
                    />
                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                    <Image
                    src={about2Img}
                    alt="foto do gato"
                    fill
                    quality={100}
                    priority
                    />
                </div>

              </div>

            
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Sobre</h2>

                <p>
                Nosso espaço foi pensado para proporcionar conforto e alegria aos pets de estimação e tranquilidade aos seus tutores. Ofereça desde banhos relaxantes com produtos premium até tosas estilizadas para deixar seu bichinho ainda mais charmoso. Contamos também com um pet spa, atendimento veterinário especializado e uma boutique cheia de acessórios, brinquedos e alimentos saudáveis ​​para todas as fases da vida do seu
                </p>

                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <Check className="text-red-500"/>
                     Aberto desde de 2019
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-red-500"/>
                     Equipe altamente treinado.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-red-500"/>
                     Qualidade é nossa prioridade
                    </li>
                </ul>

                <a href="#"
                className="bg-[#fbd404]"
                >
                    <WhatsappLogo className="w-5 h-5 text-white"/>
                    Contato via WhatsApp
                </a>
              </div>
          
            </div>
        </section>
    )
}