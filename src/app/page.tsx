import { AppleSignIn } from '@/app/components/apple/AppleSignIn'
import { GoogleSignIn } from '@/app/components/google/GoogleSignIn'
import s from './page.module.scss'


export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.mainCardWrapper}>

        <div className={s.mainCardSocialWrapper}>
          <AppleSignIn />
          <GoogleSignIn />
        </div>
      </div>
      <footer className={s.footer}>
        AAM Custom Auth testing
      </footer>
    </div>
  )
}
