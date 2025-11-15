import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function SendMensage() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  function handleSend() {
    if (!message.trim()) {
      toast.error("Digite uma mensagem antes de enviar.");
      return;
    }

    toast.success("Mensagem enviada com sucesso!");
    setMessage("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-400 dark:bg-purple-400 text-white hover:cursor-pointer dark:hover:bg-white dark:text-dark w-[50%]">Enviar Mensagem</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enviar Mensagem</DialogTitle>
          <DialogDescription>
            <div className="grid w-full gap-2">
              <Textarea
                placeholder="Digite o seu texto."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button className="hover:bg-black/80 hover:cursor-pointer" onClick={handleSend}>Enviar</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
