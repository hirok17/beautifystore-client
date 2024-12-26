import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const testimonials = [
  {
    "name": "Emma L.",
    "location": "New York, USA",
    "testimonial": "The body wash is simply amazing! It leaves my skin feeling soft and fresh all day. The fragrance is heavenly and not overpowering. I'm a loyal customer now!"
  },
  {
    "name": "Sophie M.",
    "location": "London, UK",
    "testimonial": "I’ve tried countless body lotions, but none compare to yours. It absorbs quickly without leaving a greasy feeling, and my skin has never looked healthier."
  },
  {
    "name": "Carlos R.",
    "location": "Madrid, Spain",
    "testimonial": "The creams are perfect for my sensitive skin. They provide just the right amount of hydration and soothe any redness. Highly recommended!"
  },
  {
    "name": "Aisha K.",
    "location": "Dubai, UAE",
    "testimonial": "These beauty products are a game-changer! The body lotion has worked wonders for my dry skin, and the scent is luxurious. It’s like a spa treatment at home."
  },
  {
    "name": "Liam D.",
    "location": "Toronto, Canada",
    "testimonial": "I’m in love with the body wash and creams. The quality is exceptional, and I’ve noticed a huge improvement in my skin texture. Worth every penny!"
  },
  {
    "name": "Priya S.",
    "location": "Mumbai, India",
    "testimonial": "Your beauty products are the best I’ve used. The creams are lightweight yet super effective, and the body wash makes every shower feel like a treat."
  }
]

const Testimonial = () => {
  return (
    <div className="container mx-auto px-6 mt-16">
      <h2 className="text-center text-3xl">What customers are saying</h2>
      <Carousel className="max-w-3xl mx-auto">
        <CarouselContent className="">
          {
            testimonials.map((item, index) => <>
              <CarouselItem key={index} className="">
                <div className="card bg-base-100 shadow-2xl">
                  <div className="card-body">
                    <div className="rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.testimonial}</p>
                    <div className="card-actions justify-end">
                      <h3 className="font-bold">{item.location}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </>)
          }

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

  );
};

export default Testimonial;
