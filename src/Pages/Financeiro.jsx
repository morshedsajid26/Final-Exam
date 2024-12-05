import React from 'react'
import icon1  from '/icon1.png'

const Financeiro = () => {
  return (
    <div className='bg-whit h-full grid grid-cols-4 grid-rows-3 gap-7 p-7 pb-[105px]  '>
    <div className='bg-gradient-to-b from-[#212430] to-[#141722] col-span-3 row-span-1 rounded-[15px] px-5 pt-2.5 pb-4'>
        <h2 className='mb-5'>Principais Indicadores</h2>
        <div className='bg-whit h-[131px] flex gap-[217px] '>
        <div className='border-[#EF8354] border w-10 h-10 flex items-center justify-center rounded-[8px]'>
                <img src={icon1} alt="" />
            </div>


            <div className='border-[#EF8354] border w-10 h-10 flex items-center justify-center rounded-[8px]'>
                <img src={icon1} alt="" />
            </div>


            <div className='border-[#EF8354] border w-10 h-10 flex items-center justify-center rounded-[8px]'>
                <img src={icon1} alt="" />
            </div>
        </div>
    </div>
    
    <div className=' border border-[#EF8354]/30 row-span-3 rounded-[15px] flex flex-col items-center gap-[162px] pt-2.5'>
        <p>% Meta Faturamento</p>
        <p>Status Cliente</p>
        <p>Status Cliente</p>
    </div>
    
    <div className='bg-gradient-to-b from-[#212430] to-[#141722] col-span-3 row-span-2 rounded-[15px]  pt-2.5 flex flex-col justify-between overflow-hidden'>
         <div className='h-[203px] w-full pl-5'>
            <p>Selecione o Indicador:</p>
            </div>

            <div className='h-[116px] w-full bg-gradient-to-b from-[#212430] to-[#141722] pl-5 '>Variação %</div>
    </div>
    
    
    
</div>
  )
}

export default Financeiro