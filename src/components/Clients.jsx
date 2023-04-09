import { clients } from "../constants";
import styles from "../styles";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((item, index) => (
          <div key={index} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={item.logo}
              alt={item.name}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
