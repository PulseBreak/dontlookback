import { motion } from "framer-motion";
import room1 from "@/assets/room1.jpg";
import roomActor from "@/assets/room-actor.jpg";
import roomBlackout from "@/assets/room-blackout.jpg";

const features = [
  {
    title: "The Abandoned Precinct",
    description: "Step into a haunted 1940s police precinct. A detective has gone missing, and the evidence points... back at you. Decode morse code, crack case files, and survive.",
    image: room1,
  },
  {
    title: "Live Actor Scares",
    description: "Real performers deliver custom scares based on real-time camera monitoring. At the 30-minute mark, things get personal. No two experiences are the same.",
    image: roomActor,
  },
  {
    title: "Total Blackout Mode",
    description: "The lights go out. Completely. Navigate by sound, touch, and instinct while something stalks you in the darkness. AI-reactive audio responds to your every move.",
    image: roomBlackout,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-glow mb-4">
            THE <span className="text-primary">EXPERIENCE</span>
          </h2>
          <p className="text-muted-foreground font-body">Hollywood-level production. Real terror.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card border border-border overflow-hidden hover:border-glow transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
