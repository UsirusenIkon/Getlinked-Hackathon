import { sponsorsIcon } from "../../assets";
import Wrapper from "../utility/wrapper";
import styles from './index.module.css'

export default function Sponsors() {
  return (
    <Wrapper
      classHead={styles.head}
      header1={'Partners and Sponsors'}
      head_txt={'Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors'}
      children2={<img src={sponsorsIcon} className={styles.img} alt="img" />}
    />
  )
}
