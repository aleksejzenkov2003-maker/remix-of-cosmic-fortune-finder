import { useState } from "react";
import { MapPin, Star, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizStep from "./QuizStep";
import LoadingWheel from "./LoadingWheel";
import MysticDateScrollPicker from "./MysticDateScrollPicker";
import MysticTimePicker from "./MysticTimePicker";
import astrologerImage from "@/assets/astrologer.jpg";
import astrologer2Image from "@/assets/astrologer-2.png";
import astrologer3Image from "@/assets/astrologer-3.png";

interface MultiStepQuizProps {
  onSubmit: (data: {
    date: string;
    city: string;
    time: string;
  }) => void;
}

const MultiStepQuiz = ({
  onSubmit
}: MultiStepQuizProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    city: "",
    time: ""
  });

  const handleNext = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      if (currentStep === 1) {
        (window as any).ym(105525628, 'reachGoal', 'date_selected');
      } else if (currentStep === 2) {
        (window as any).ym(105525628, 'reachGoal', 'city_entered');
      } else if (currentStep === 3) {
        (window as any).ym(105525628, 'reachGoal', 'time_selected');
      }
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleLoadingComplete = () => {
    onSubmit(formData);
  };

  if (isLoading) {
    return <LoadingWheel onComplete={handleLoadingComplete} />;
  }

  // Step 1: Date
  if (currentStep === 1) {
    return <div className="min-h-screen flex flex-col">
        {/* Progress bar */}
        <div className="w-full h-1 bg-muted/30">
          <div className="h-full bg-gradient-gold transition-all duration-500 ease-out shadow-[0_0_15px_hsl(var(--gold))]" style={{
          width: `${2 / 14 * 100}%`
        }} />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-4 pb-8 overflow-hidden">
          <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in flex flex-col">
            {/* Name */}
            <div className="text-center flex-shrink-0 mt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-gold glow-gold">
                Дипломированный астролог Вера
              </h2>
            </div>

            {/* Photo */}
            <div className="relative group mx-auto max-w-[180px] flex-shrink-0">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-40 group-hover:opacity-60 blur-2xl transition-opacity duration-500 animate-pulse-mystical" />
              
              <div className="relative rounded-full overflow-hidden border-4 border-accent/50 shadow-[0_0_60px_rgba(255,216,138,0.6)] aspect-square glow-mystical">
                <img src={astrologerImage} alt="Астролог Вера" className="w-full h-full object-cover" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-1 -right-1 text-xl animate-float">⭐</div>
              <div className="absolute -bottom-1 -left-1 text-lg animate-float" style={{
              animationDelay: "0.5s"
            }}>✨</div>
            </div>

            {/* Astrologer info */}
            <div className="text-center space-y-1 flex-shrink-0">
              <h1 className="text-base sm:text-lg font-semibold text-gradient-mystical leading-tight">
                Астролог с 20-летним опытом
              </h1>
              <p className="text-xs sm:text-sm text-gradient-mystical font-semibold">
                Провела более 1700 консультаций
              </p>
            </div>

            {/* Title */}
            <div className="text-center space-y-2 flex-shrink-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-gold glow-gold">
                Получите бесплатный астрологический разбор
              </h2>
              <p className="text-sm  pt-6 sm:text-base font-semibold text-accent animate-bounce">
                👇 Нажмите кнопку ниже
              </p>
            </div>

            {/* Button */}
            <div className="flex-shrink-0">
              <Button
                onClick={() => window.open('https://t.me/m/FulZsu6CZDk6', '_blank')}
                className="w-full h-14 text-base font-extrabold bg-gradient-gold hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(255,216,138,0.6)] hover:shadow-[0_0_60px_rgba(255,216,138,1)] border-2 border-white/80 ring-4 ring-gold/40 relative overflow-hidden"
              >
                <span className="relative z-10">Получить бесплатный анализ ✨</span>
                <div className="absolute -inset-1 rounded-xl bg-white/20 blur-md animate-pulse" />
              </Button>
            </div>

            {/* === Info Blocks === */}

            {/* Block 1: About Astrology */}
            <div className="bg-card/20 backdrop-blur-md border-2 border-accent/30 rounded-2xl p-5 space-y-3 glow-mystical">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-bold text-gradient-gold">Что раскроет астрология?</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Отношения</strong> — совместимость, кармические связи и идеальный партнёр</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Карьера</strong> — предназначение, таланты и лучшие периоды для роста</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Здоровье</strong> — слабые зоны и рекомендации по укреплению энергии</span>
                </li>
              </ul>
            </div>

            {/* Block 2: About Expert */}
            <div className="bg-card/20 backdrop-blur-md border-2 border-accent/30 rounded-2xl p-5 space-y-4 glow-mystical">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-bold text-gradient-gold">Об эксперте Вере</h3>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-accent/40 flex-shrink-0">
                  <img src={astrologer2Image} alt="Астролог Вера" className="w-full h-full object-cover" />
                </div>
                <div className="text-sm text-foreground/90 space-y-1">
                  <p>✨ 20+ лет практики в ведической и западной астрологии</p>
                  <p>🎓 Дипломированный специалист</p>
                  <p>📋 Более 1700 персональных консультаций</p>
                  <p>🌟 Автор курсов и наставник</p>
                </div>
              </div>
            </div>

            {/* Block 3: What you get */}
            <div className="bg-card/20 backdrop-blur-md border-2 border-accent/30 rounded-2xl p-5 space-y-4 glow-mystical">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-bold text-gradient-gold">Что вы получите</h3>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-accent/40 flex-shrink-0">
                  <img src={astrologer3Image} alt="Натальная карта" className="w-full h-full object-cover" />
                </div>
                <div className="text-sm text-foreground/90 space-y-1">
                  <p>🔮 Разбор ключевых аспектов натальной карты</p>
                  <p>🪐 Анализ положения планет на момент рождения</p>
                  <p>💫 Персональные рекомендации от эксперта</p>
                  <p>📩 Результат в Telegram — быстро и удобно</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>;
  }

  // Step 2: City
  if (currentStep === 2) {
    return <QuizStep title="Где вы родились?" subtitle="Место рождения определяет расположение домов в вашей карте" step={3} totalSteps={14}>
        <div className="space-y-6">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold z-10" />
            <input type="text" value={formData.city} onChange={e => setFormData({
            ...formData,
            city: e.target.value
          })} className="w-full h-14 pl-12 pr-4 text-base bg-card/60 border-2 border-primary/40 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all duration-300 backdrop-blur-sm glow-mystical" placeholder="Введите город" required />
          </div>
          
          <div className="flex gap-3">
            <Button onClick={handleBack} variant="outline" className="h-14 px-6 text-base font-semibold border-2 border-primary/40 text-gold hover:bg-primary/20 hover:border-gold transition-all duration-300">
              ← Назад
            </Button>
            <Button onClick={handleNext} disabled={!formData.city} className="flex-1 h-14 text-base font-semibold bg-gradient-gold hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,216,138,0.6)] hover:shadow-[0_0_50px_rgba(255,216,138,0.9)] border-0">
              Продолжить ✨
            </Button>
          </div>
        </div>
      </QuizStep>;
  }

  // Step 3: Time
  if (currentStep === 3) {
    return <QuizStep title="Во сколько вы родились?" subtitle="Точное время рождения позволит определить ваш асцендент" step={4} totalSteps={14}>
        <div className="space-y-6">
          <MysticTimePicker value={formData.time} onChange={time => setFormData({
          ...formData,
          time
        })} />
          
          <div className="flex gap-3">
            <Button onClick={handleBack} variant="outline" className="h-14 px-6 text-base font-semibold border-2 border-primary/40 text-gold hover:bg-primary/20 hover:border-gold transition-all duration-300">
              ← Назад
            </Button>
            <Button onClick={handleNext} disabled={!formData.time} className="flex-1 h-14 text-base font-semibold bg-gradient-gold hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,216,138,0.6)] hover:shadow-[0_0_50px_rgba(255,216,138,0.9)] border-0 relative overflow-hidden group">
              <span className="relative z-10">Получить анализ ✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </QuizStep>;
  }
  return null;
};
export default MultiStepQuiz;
