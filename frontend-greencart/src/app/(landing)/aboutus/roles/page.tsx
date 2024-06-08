import React from "react";
import Image from "next/image";

const MissionVision = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <div className="relative">
        <Image
          src="/roles-image.png"
          alt="Farmer in field"
          layout="responsive"
          width={800}
          height={900}
          className="object-cover"
        />
        <div className="absolute ml-[53rem] mr-[15rem] inset-0 bg-[#23483B] bg-opacity-80 flex items-center justify-center p-2">
          <div className="max-w-xl text-white text-center">
            <p className="text-white text-[22px] font-Outfit">
              Choosing GreenCartPH offers farmers a multitude of compelling
              reasons. Firstly, it provides direct access to consumers,
              circumventing the need for intermediaries. By establishing a
              direct connection, farmers can showcase their produce and build
              lasting relationships with urban consumers. Secondly, GreenCartPH
              ensures fair and transparent pricing mechanisms, benefiting both
              farmers and consumers alike. With real-time pricing information
              and the removal of middlemen, farmers receive equitable
              compensation for their goods, while consumers make informed
              purchasing decisions. Thirdly, participation in GreenCartPH
              expands farmers' market reach beyond local boundaries. This
              extension broadens sales opportunities, fostering business growth
              and sustainability. Moreover, by opting for GreenCartPH, farmers
              actively support local agriculture. By connecting consumers with
              nearby farmers, the platform reinforces the resilience of local
              food systems and bolsters community economies. Finally,
              GreenCartPH streamlines the selling process, offering convenience
              and efficiency to farmers. With features such as in-house
              delivery, the platform simplifies transactions, enhancing the
              overall selling experience.
            </p>
          </div>
        </div>
      </div>
      <div className="py-[8rem] px-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-[10rem] md:grid-cols-2 font-Outfit">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <h3 className="text-[20px] font-bold mb-4 text-[#336841]">GreenCartPH <br /><span className="text-[#23483B] text-[40px]">MISSION</span></h3>
            <p className="mb-4 px-[5rem] text-justify">
              Lorem ipsum dolor st amet consectetur adipisicing elt. Aperiam
              voluptas eum inventore qui, possimus facilis suscipit numquam
              deleniti , natus eligendi non earum quasi ure doloremque molestiae
              nostrum tempora cumque nescidr diunt expedita voluptatsccusamus
              expli cabo unde. Expedita facilis similique q libero amet tenietur
              ipsum quis atqu e dolor nisi unde, sit, ebitis iusto ipsa d
              olorum!
            </p>
            <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center">
              <Image
                src="/Goal.png"
                width={195}
                height={200}
                alt="appgallery"
                className="object-cover p-1"
              />
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <h3 className="text-[20px] font-bold mb-4 text-[#336841]">GreenCartPH <br /><span className="text-[#23483B] text-[40px]">VISION</span></h3>
            <p className="mb-4 px-[5rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              voluptas eum inventore qui, possimus facilis suscipit numquam
              deleniti, natus eligendi non earum quas iure doloremque molestiae
              nostrum tempora cumque nesciunt.
            </p>
            <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center">
            <Image
                src="/Vision.png"
                width={195}
                height={200}
                alt="appgallery"
                className="object-cover p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
