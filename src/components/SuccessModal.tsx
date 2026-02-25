import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  orderNumber: string;
}

const SuccessModal = ({ open, onClose, orderNumber }: SuccessModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-2 border-primary/30">
        <DialogTitle className="sr-only">Заявка успешно отправлена</DialogTitle>
        <DialogDescription className="sr-only">
          Ваша заявка на астрологический анализ успешно отправлена. Мы свяжемся с вами в ближайшее время.
        </DialogDescription>
        <div className="flex flex-col items-center justify-center space-y-6 p-6 text-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-green-500/30 rounded-full blur-2xl opacity-60 animate-pulse-mystical" />
            <div className="relative bg-green-500 rounded-full p-4 shadow-[0_0_50px_rgba(34,197,94,0.9)] glow-mystical">
              <CheckCircle2 className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gradient-gold glow-gold">Анкета успешно заполнена!</h2>
            <p className="text-base text-foreground">Ваша заявка передана эксперту.</p>
            <p className="text-sm text-muted-foreground">
              Персональный номер заявки: <span className="font-mono font-bold text-gold">{orderNumber}</span>
            </p>
          </div>

          <div className="space-y-4 w-full">
            <p className="text-base text-foreground">Напишите его Вере👇</p>

            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/m/FulZsu6CZDk6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).ym) {
                    (window as any).ym(105525628, "reachGoal", "messenger_telegram");
                  }
                }}
                className="inline-flex items-center justify-center gap-2 w-full bg-[#0088cc] hover:bg-[#006699] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
