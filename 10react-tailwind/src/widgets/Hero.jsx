import React from 'react'

function Hero() {
  return (
    <div className='grid justify-items-center gap-8 bp-28 relative'>
        <p className='text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal'>
            打造一个完美、现象级的、充满创造力的网站。
        </p>
        <p className='text-xl text-gray-700 md:w-1/2 text-center'> 试文案这是测试文是测试文案，这是测试文案 这是测试文案这是测试文案这是测试文案这是测试文案。</p>
        <div>
            <button className='rounded bg-blue-500 px-8 py-2 text-base text-white' >现在开始</button>
            <button className='rounded bg-gray-900 px-8 py-2 text-base text-white ml-3' >了解更多</button>
        </div>
    </div>
  )
}

export default Hero