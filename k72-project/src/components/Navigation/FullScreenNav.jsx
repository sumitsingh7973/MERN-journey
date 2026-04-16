import React from 'react'

const FullScreenNav = () => {
  return (
    <div id='fullscreennav' className='h-screen px-5 w-full absolute bg-amber-900'>
      <div className='all-links mt-[10vw]'>
        <div className='link border-y'>
          <h1 className='font-[font] text-[8vw] text-center leading-[0.8] pt-5 uppercase'>WORK</h1>
          <div className='absolute flex  '>
            <div className='flex items-center overflow-auto'>
              <h2 className=' whitespace-nowrap font-[font] text-[8vw] text-center leading-[0.8] pt-5 uppercase'>WORK</h2>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
              <h2 className=' whitespace-nowrap font-[font] text-[8vw] text-center leading-[0.8] pt-5 uppercase'>WORK</h2>
              <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
