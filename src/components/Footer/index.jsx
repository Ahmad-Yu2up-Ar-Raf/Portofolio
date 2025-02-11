import styles from '../Header/style.module.scss';
import Magnetic from '../../common/Magnetic';
export default function Footer() {


    return(
        <>
        <div className="bg-black  border-gray-600 content-center px-5 fixed z-50 w-full border-t py-8 bottom-0">
            <div className=" text-gray-200 max-w-7xl m-auto flex md:justify-between justify-center items-center ">

               <h1>Hello</h1>
               <h1>Hello</h1>
                   <Magnetic>
 <Link href={'/'}>
            <div className={`${styles.logo}`}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.dennis}>Ahmad</p>
                    <p className={styles.snellenberg}>Yusuf Ar-Rafi</p>
                </div>
            </div>
 </Link>
        </Magnetic>
            </div>
        </div>
        
        </>
    )
}