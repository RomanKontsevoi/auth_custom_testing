import { AppleSignIn } from '@/app/components/AppleSignIn'
import { FacebookSignIn } from '@/app/components/FacebookSignIn'
import { GoogleSignIn } from '@/app/components/GoogleSignIn'
import Image from 'next/image'
import s from './page.module.scss'
import cn from 'classnames'


export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.mainCardWrapper}>
        <div className={s.mainCardHeader}>
          <div className={s.mainCardHeaderLeft}>
            <Image
              width={156}
              height={32}
              src="https://aamotorswebapp800a.blob.core.windows.net/str-b2c/aamlogo.svg"
              alt="Al Abdulghani Motors"
            />
          </div>
          <div className={s.mainCardHeaderRight}>
            <Image
              width={20}
              height={16}
              className="!w-auto" data-tenant-branding-logo="true"
              src="https://aamotorswebapp800a.blob.core.windows.net/str-b2c/toyotalogo.svg"
              alt="Toyota Qatar"
            />
            <Image
              width={2}
              height={16}
              className={s.mainCardHeaderRight}
              src="https://aamotorswebapp800a.blob.core.windows.net/str-b2c/divider.png"
              alt="Divider"
            />
            <Image
              width={23}
              height={16}
              className="!w-auto" data-tenant-branding-logo="true"
              src="https://aamotorswebapp800a.blob.core.windows.net/str-b2c/lexus.svg"
              alt="Lexus Qatar"
            />
            <Image
              width={2}
              height={16}
              className={s.mainCardHeaderRight}
              src="https://aamotorswebapp800a.blob.core.windows.net/str-b2c/divider.png"
              alt="Divider"
            />
            <Image
              width={64}
              height={16}
              className="!w-auto" data-tenant-branding-logo="true"
              src="https://aamotorswebapp800a.blob.core.windows.net/str-b2c/kintologo.svg"
              alt="Kinto"
            />
          </div>
        </div>
        <div className={s.mainCardButtons}>
          <button className={cn(s.mainCardButton, s.mainCardButtonPrimary)}>
            Continue with Mobile number
          </button>
          <button className={cn(s.mainCardButton, s.mainCardButtonSecondary)}>
            Continue with Email
          </button>
        </div>
        <div className={s.mainCardDivider}>
          <span className={s.mainCardDividerLine} />
          <span className={s.mainCardDividerText}>Or</span>
          <span className={s.mainCardDividerLine} />
        </div>
        <div className={s.mainCardSocialWrapper}>
          <GoogleSignIn className={s.mainCardSocialButton} />
          <FacebookSignIn className={s.mainCardSocialButton} />
          <AppleSignIn className={s.mainCardSocialButton} />
        </div>
      </div>
    </div>
  )
}
