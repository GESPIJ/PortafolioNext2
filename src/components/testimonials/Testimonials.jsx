//import "./testimonials.scss";
//import styles from "./testimonials.module.scss";
import Image from "next/image";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "/assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "/assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "/assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  console.log("Estos son los estilos de los testimonios");
  //console.log(styles);
  //console.log(styles.card);
  //debugger;
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => {
          let activeClass = d.featured ? "card featured" : "card";
          //let activeClass = styles.card;
          //console.log(styles);
          return (
            <div key={d.id} className={activeClass}>
              <div className="top">
                <Image
                  src="/assets/right-arrow.png"
                  className="left"
                  alt=""
                  width={25}
                  height={25}
                />
                <Image
                  className="user"
                  src={d.img}
                  alt=""
                  width={60}
                  height={60}
                />
                <Image
                  className="right"
                  src={d.icon}
                  alt=""
                  width={25}
                  height={25}
                />
              </div>
              <div className="center">{d.desc}</div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
