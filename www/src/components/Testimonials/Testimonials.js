import { useInView } from 'react-intersection-observer';
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import blob from '../../assets/blob-blue.svg';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    { img: user1, user: "James P.", role: "Video Editor", rate: 5, text: "“I can’t believe how easy it is to compress large video files. It saves me hours of upload time!”" },
    { img: user2, user: "Travis H.", role: "Content Creator", rate: 4, text: "“The offline functionality is a lifesaver when I’m traveling. Highly recommend it to anyone managing media files.”" },
    { img: user3, user: "Emily R.", role: "Photographer", rate: 5, text: "“MediaCompressor has been a game-changer for my workflow. It’s fast, reliable, and keeps my photo quality intact.”" },
  ]

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="testimonials" className="py-4 md:py-12 bg-gray-200 rounded-xl px-4 md:px-8 mb-5 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-2 md:mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.user}
                  className={`w-12 h-12 rounded-full ${styles.avatar}`}
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{testimonial.user}</h3>
                  <div className="flex justify-start">
                    {renderStars(testimonial.rate)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-left">{testimonial.text}</p>
            </div>))}
        </div>
      </div>
      <div ref={ref}></div>
      <img src={blob} alt="" className={`${inView ? styles.blob_active : styles.blob_basic} ${styles.blob}`} />
    </section >
  )
}
