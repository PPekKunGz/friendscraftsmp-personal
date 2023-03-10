import styles from ".././styles/Home.module.css";
import Image from "next/image";
import Button from "../../components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleTeacher = (e) => {
    router.push("/teacher");
  };
  const handleClick = (e) => {
    router.push("/personal");
  };
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <Image
          src="/FSCHSC_LOGO.png"
          alt="FSC-HIGHTSCHOOL"
          width={820}
          height={430}
        />
        <h2 className={styles.h2}>
          FriendsCraft: SMP - SS3 <br />
          ประวัติส่วนตัวของตัวละครทั้งหมด
        </h2>
      </div>
      <div className={styles.btn}>
        <div onClick={handleTeacher}>
          <Button
            link="/teacher"
            icon="/img/teacher.svg"
            text="ประวัติอาจารย์"
            layout={"raw"}
          />
        </div>
        <div onClick={handleClick}>
          <Button
            link="/personal"
            icon="/img/school.svg"
            text="ประวัตินักเรียน"
            layout={"raw"}
          />
        </div>
      </div>
      {/* <Image
          src="/img/ppek.gif"
          alt="@PPekKunGzDev"
          width={120}
          height={120}
        /> */}
    </main>
  );
}
