import { chipImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Chip = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="a17" width={180} height={180} />
        </div>
        <div className="flex fle-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A monster win for gaming.
            <p className="hiw-subtitle"></p>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Chip;
