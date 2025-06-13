'use client'

import { Box } from "@radix-ui/themes"
import Image from "next/image"
import './carousel.css'

export const Carousel = () => {
    const size = 14
    return (
            <>
              <Image
                //@ts-expect-error
                style={{'--start': 0}}
                className="orbiting-image"
                src="/square-function.svg"
                width={size}
                height={size}
                alt="Picture of the author"
                unoptimized
              />
              <Image
                //@ts-expect-error
                style={{'--start': 0.2}}
                className="orbiting-image"
                src="/package-open.svg"
                width={size}
                height={size}
                alt="Picture of the author"
                unoptimized
              />
              <Image
                //@ts-expect-error
                style={{'--start': 0.4}}
                className="orbiting-image"
                src="/train-track.svg"
                width={size}
                height={size}
                alt="Picture of the author"
                unoptimized
              />
               <Image
                //@ts-expect-error
                style={{'--start': 0.6}}
                className="orbiting-image"
                src="/file-sliders.svg"
                width={size}
                height={size}
                alt="Picture of the author"
                unoptimized
              />
              <Image
                //@ts-expect-error
                style={{'--start': 0.8}}
                className="orbiting-image"
                src="/package-open.svg"
                width={size}
                height={size}
                alt="Picture of the author"
                unoptimized
              />
          </>
    )
}