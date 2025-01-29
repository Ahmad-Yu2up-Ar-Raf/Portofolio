import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';
export default function index() {
  return (
    <div className='border-t h-[12.5%] border-customGray md:h-[22%] md:border-none   pt-7 px-1 space-y-4'>
    <h1 className='text-xs font-medium text-customGray '>SOCIALS</h1>
    <div className={`${styles.footer} text-sm font-medium md:text-xs lg:text-sm gap-5 md:justify-between`}>
      <Magnetic>
        
        <a>Awwwards</a>
      </Magnetic>
      <Magnetic>
        
        <a>Instagram</a>
        </Magnetic>
        <Magnetic>
        
        <a>Dribble</a>
        </Magnetic>
        <Magnetic>
        
        <a>LinkedIn</a>
        </Magnetic>
    </div>
    </div>
  )
}
