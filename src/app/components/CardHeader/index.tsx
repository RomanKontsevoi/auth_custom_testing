import { imagesPrefix } from 'app/consts'
import s from './CardHeader.module.scss'
import Image from 'next/image'
import React from 'react'

export const CardHeader: React.FC = () => (
  <div className={s.mainCardHeader}>
    <div className={s.mainCardHeaderLeft}>
      <Image
        width={156}
        height={32}
        src={`${imagesPrefix}aamlogo.svg`}
        alt="Al Abdulghani Motors"
      />
    </div>
    <div className={s.mainCardHeaderRight}>
      <Image
        width={20}
        height={16}
        className="!w-auto" data-tenant-branding-logo="true"
        src={`${imagesPrefix}toyotalogo.svg`}
        alt="Toyota Qatar"
      />
      <Image
        width={2}
        height={16}
        className={s.mainCardHeaderRight}
        src={`${imagesPrefix}divider.png`}
        alt="Divider"
      />
      <Image
        width={23}
        height={16}
        className="!w-auto" data-tenant-branding-logo="true"
        src={`${imagesPrefix}lexus.svg`}
        alt="Lexus Qatar"
      />
      <Image
        width={2}
        height={16}
        className={s.mainCardHeaderRight}
        src={`${imagesPrefix}divider.png`}
        alt="Divider"
      />
      <Image
        width={64}
        height={16}
        className="!w-auto" data-tenant-branding-logo="true"
        src={`${imagesPrefix}kintologo.svg`}
        alt="Kinto"
      />
    </div>
  </div>
)
