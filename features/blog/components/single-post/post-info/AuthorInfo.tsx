import { type FC } from 'react'
import Image from 'next/image'

import aleciaPic from '@/img/alecia_bw.png'

const AuthorInfo: FC = () => {
  return (
    <div className="mt-6 md:mt-16 w-full px-16 mx-auto md:max-w-screen-sm md:px-10 lg:max-w-screen-md">
      <div className="border-t-2 mt-8 grid grid-cols-3 pt-10 gap-8">
        <div className="col-span-1 rounded-full overflow-hidden">
          <Image
            src={aleciaPic}
            alt="A black and white picture of Alecia Vogel sitting in a coffee shop"
          />
        </div>
        <div className="col-span-2">{/* TODO */}</div>
      </div>
    </div>
  )
}

export default AuthorInfo
