import { motion } from "framer-motion";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpg";
import room3 from "@/assets/room3.jpg";

const rooms = [
  {
    title: "Лаборатория Теней",
    description: "Заброшенная AI-лаборатория. Системы активировались. У вас 60 минут, пока протокол зачистки не завершён.",
    difficulty: "Средняя",
    players: "2-4",
    image: room1,
  },
  {
    title: "Красный Коридор",
    description: "Бесконечный лазерный лабиринт, контролируемый безумным AI. Один неверный шаг — и вы начинаете сначала.",
    difficulty: "Высокая",
    players: "2-6",
    image: room2,
  },
  {
    title: "Ядро Системы",
    description: "Финальный босс. Проникните в сердце AI и отключите его навсегда. Или он отключит вас.",
    difficulty: "Экстремальная",
    players: "4-6",
    image: room3,
  },
];

const difficultyColor: Record<string, string> = {
  "Средняя": "text-yellow-500",
  "Высокая": "text-orange-500",
  "Экстремальная": "text-primary",
};

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-glow mb-4">
            НАШИ <span className="text-primary">КВЕСТЫ</span>
          </h2>
          <p className="text-muted-foreground font-body">Выберите свой кошмар</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card border border-border overflow-hidden hover:border-glow transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{room.title}</h3>
                <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">{room.description}</p>
                <div className="flex justify-between items-center text-sm font-body">
                  <span className={difficultyColor[room.difficulty]}>{room.difficulty}</span>
                  <span className="text-muted-foreground">{room.players} игроков</span>
                </div>
                <button className="w-full mt-6 py-3 bg-primary/10 border border-primary/30 text-primary font-heading uppercase tracking-wider text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Забронировать
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
